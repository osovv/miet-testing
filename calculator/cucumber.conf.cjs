const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} = require('@cucumber/cucumber')
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require('playwright')

setDefaultTimeout(30_000)

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  })
})

// close the browser
AfterAll(async () => {
  await global.browser.close()
})

Before(async () => {
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
})

// Cleanup after each scenario
After(async () => {
  await global.page.close()
  await global.context.close()
})

// module.exports = {
//   default: [
//     '--require-module ts-node/register',
//     '--require ./features/**/*.ts',
//     '--require ./features/*.ts',
//     --require tests/acceptance/stepDefinitions/**/*.ts,
//     --format @cucumber/pretty-formatter
//   ].join(' '),
// }
