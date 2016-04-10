'use strict'

const Service = require('trails-service')
const Mandrill = require('mandrill-api/mandrill').Mandrill

/**
 * @module MandrillService
 *
 * @description Mandrill Service
 * @see {@link http://trailsjs.io/doc/api/services}
 * @this TrailsApp
 */
module.exports = class MandrillService extends Service {

  constructor () {
    this.mandrill = new mandrill.Mandrill(this.app.config.email.mandrillKey)
  }

  /**
   * Return some info about this application
   */
  sendEmail (formData) {
    const email = {
      template_name: 'langa-website-contact-form',
      template_content: [{
          name: 'email',
          content: formData.email
        }, {
          name: 'reason',
          content: formData.reason
        }, {
          name: 'message',
          content: formData.message
        }
      ]
    })

    return new Promise((resolve, reject) => {
      this.mandrill.sendTemplate(email, resolve, reject)
    })
  }
}
