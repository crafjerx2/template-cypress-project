/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.one_url = process.env.ONE_URL;
      config.retries = 2;

      on('task', {
        log(message) {
          console.log(message)

          return null
        },
        table(message) {
          console.table(message)

          return null
        }
      })

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito');
        }
        if (browser.name === 'edge') {
          // open in incognito
          launchOptions.args.push('--inprivate');
        }
        return launchOptions;
      });
      return config;
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    testIsolation: true,
    pageLoadTimeout: 30000,
    chromeWebSecurity: true,
    experimentalOriginDependencies: true,
    defaultCommandTimeout: 30000,
    specPattern: './cypress/e2e/One/**/*'
  }
});
