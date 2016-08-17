/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */
module.exports = [

  /**
   * Endpoint for User emails
   */
  {
    method: 'POST',
    path: '/email',
    handler: 'EmailController.sendEmail',
    config: {
      cors: {
        origin: [ 'https://www.langa.io',
                  'https://langa.io',
                  'http://www.langa-io-staging.herokuapp.com',
                  'http://langa-io-staging.herokuapp.com'
                ]
      }
    }
  }
]
