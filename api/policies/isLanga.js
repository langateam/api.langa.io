'use strict'

const Policy = require('trails-policy')

module.exports = class isLanga extends Policy {
  isLanga(request, reply) {
    console.log('OK');

    reply();
  }
}
