'use strict'

const Controller = require('trails-controller')

/**
 * @module EmailController
 *
 * @description Email Controller
 */
module.exports = class EmailController extends Controller {

  /**
   * Return some info about this application
   */
  sendEmail (request, reply) {
    const formData = request.payload
    formData.origin = request.info.hostname
    formData.ip = request.headers['x-forwarded-for'] || request.info.remoteAddress
    formData.referrer = request.info.referrer

    reply(this.app.services.MandrillService.sendEmail(formData)
      .then(result => {
        if (Array.isArray(result)) {
          delete result[0]._id
          return result[0]
        }
        else {
          return result
        }
      })
    )
  }
}
