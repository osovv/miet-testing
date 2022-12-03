const { Given, Then, When } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')

const url = 'http://localhost:5173'

Given('a user has navigated to the homepage', async () => {
  // navigate to the app
  await page.goto(url)
  // locate the element in the webUI
  const locator = await page.getByText('Calculator')
  // assert that it's visible
  await expect(locator).toBeVisible()
})

When('the user types {string} into the {string} field', async (item, label) => {
  await page.getByLabel(label).fill(item)
})

When('the user clicks {string} button', async (item) => {
  await page.getByText(item).click()
})

Then('text {string} should be displayed', async (text) => {
  await expect(page.getByText(text)).toBeVisible()
})
