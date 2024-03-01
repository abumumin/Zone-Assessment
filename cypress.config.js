const { defineConfig } = require("cypress");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.dummyticket.com',
    viewportWidth: 1400,
    specPattern: '**/*.feature',
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    requestTimeout: 30000,
    waitForAnimations: true,
    watchForFileChanges: true,
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    setupNodeEvents,
  },
});




