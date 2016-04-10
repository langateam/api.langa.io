'use strict'

const Policy = require('trails-policy')

module.exports = class EmailPolicy extends Policy {
  isLanga (request, reply) {
    if (request.info.hostname === 'langa.io') {
      reply()
    }
    else {
      this.log.warn('client attempted to use EmailController from foreign domain',
        request.info.hostname)
      reply()
    }
  }
}
