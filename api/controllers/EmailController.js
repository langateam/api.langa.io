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
    reply(this.app.services.MandrillService.sendEmail(request.payload))
  }
}
