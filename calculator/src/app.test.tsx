import { expect, test } from '@playwright/experimental-ct-react'
import type { Page } from '@playwright/test'
import { App } from './app'

const calculate = async (
  page: Page,
  first: string,
  second: string,
  symbol: '+' | '-' | '/' | 'x'
) => {
  await page.getByLabel('First argument').fill(first)
  await page.getByLabel('Second argument').fill(second)
  await page.getByText(symbol).click()
}

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const component = await mount(<App />)
  await expect(component).toContainText('First argument')
})

test.describe('success', () => {
  const data = [
    ['0.2', '0.1', '+', '0.3'],
    ['5', '2', '-', '3'],
    ['12.5', '5', '/', '2.5'],
    ['10', '0.2', 'x', '2'],
  ] as const

  data.forEach(([first, second, op, res]) => {
    test(`${first} ${op} ${second} = ${res}`, async ({ mount, page }) => {
      await mount(<App />)

      await calculate(page, first, second, op)

      await expect(page.getByText('Result')).toHaveText(`Result: ${res}`)
    })
  })
})

test.describe('failure', () => {
  const data = [
    ['asd', '0.1', '+', 'Wrong input'],
    ['5', 'ddd', '-', 'Wrong input'],
    ['12.5', '0', '/', "Can't divide by 0"],
    ['a', '0.2', 'x', 'Wrong input'],
  ] as const

  data.forEach(([first, second, op, res]) => {
    test(`${first} ${op} ${second} = ${res}`, async ({ mount, page }) => {
      await mount(<App />)

      await calculate(page, first, second, op)

      await expect(page.getByText('Error')).toHaveText(`Error: ${res}`)
    })
  })
})
