'use strict'

const _ = require('lodash')
const Service = require('trails-service')
const  mandrill = require('mandrill-api/mandrill')

/**
 * @module MandrillService
 *
 * @description Mandrill Service
 * @see {@link http://trailsjs.io/doc/api/services}
 * @this TrailsApp
 */
module.exports = class MandrillService extends Service {

  /**
   * Return some info about this application
   */
  sendEmail () {
    const MANDRILL_KEY = this.app.config.local.MANDRILL_KEY
    const mandrill_client = new mandrill.Mandrill(MANDRILL_KEY)

    const params = {
      "message": {
        "from_email": "weyland@balderdash.io",
        "to": [{"email": "weyland@balderdash.io"}],
        "subject": "Mandrill Test Email",
        "text": "Working on Mandrill API"
      }
    }

    mandrill_client.messages.send(params, function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    })

    return {
      params
    }
  }
}
