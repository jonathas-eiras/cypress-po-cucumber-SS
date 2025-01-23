const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
   
    baseUrl: "https://form.jotform.com/250225776387667",
    specPattern: "cypress/e2e/step_definitions/*.feature",
    supportFile: 'cypress/support/e2e.js',
    hideCredentials: true,
    chromeWebSecurity: false,

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },

  },
  video: true,

  retries: {
    runMode: 2,
    openMode: 0,
  }

})
