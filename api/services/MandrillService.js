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

  constructor (app) {
    super(app)
    this.mandrill = new Mandrill(this.app.config.email.mandrillKey)
  }

  /**
   * Return some info about this application
   */
  sendEmail (formData) {
    this.log.info('contact form submitted with form data', formData)

    const emailConfig = this.app.config.email
    const email = {
      template_name: 'langa-website-contact-form',
      template_content: [ ],
      message: {
        headers: {
          'reply-to': formData.email
        },
        to: [{
          email: emailConfig.to,
          to: 'to'
        }],
        subject: formData.subject,
        merge_language: 'handlebars',
        global_merge_vars: [{
          name: 'email',
          content: formData.email
        }, {
          name: 'subject',
          content: formData.subject || 'Hello from Langa!'
        }, {
          name: 'message',
          content: formData.message
        }, {
          name: 'ip',
          content: formData.ip
        }, {
          name: 'origin',
          content: formData.origin
        }, {
          name: 'referrer',
          content: formData.referrer
        }]
      }
    }

    return new Promise((resolve, reject) => {
      this.log.info('sending email', email)
      this.mandrill.messages.sendTemplate(email, resolve, err => {
        this.log.warn('error received from mandrill', err)
        reject(err)
      })
    })
  }
}
