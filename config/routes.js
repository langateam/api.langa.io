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
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  /**
   * Endpoint for User emails
   */
  {
    method: 'POST',
    path: '/email',
    handler: 'EmailController.sendEmail',
    config: {
      cors: {
        origin: [ '*.langa.io', '*.balderdash.io', '*.trailsjs.io' ]
      }
    }
  }
]
