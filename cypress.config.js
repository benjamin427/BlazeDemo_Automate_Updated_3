const { defineConfig } = require("cypress");
const builder = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberpreprocessor = require('cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuilder = require('cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = builder({
        plugins: [createEsbuilder(config)]
      })
      on('file:preprocessor', build)
      addCucumberpreprocessor(on, config)
      return config
    },
    specPattern: "**/*.feature",
    supportFile: false
  },
});
