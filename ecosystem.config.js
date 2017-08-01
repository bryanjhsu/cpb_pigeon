module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'Pigeon Pretotype',
      script    : 'server.js',
      env: {
        ADMIN_USR: 'devAdminUser',
        ADMIN_PWD: '$up3r$3cr3tP@$$w0rd'
      }
    }
  ]
}
