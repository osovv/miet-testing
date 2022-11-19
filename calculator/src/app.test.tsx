import { expect, test } from '@playwright/experimental-ct-react'
import { App } from './app'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const component = await mount(<App />)
  await expect(component).toContainText('First argument')
})
