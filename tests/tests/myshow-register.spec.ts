import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

test("test", async ({ page }) => {
  await page.goto("https://myshows.me/");
  await page.getByText("Войти").first().click();
  await page.getByRole("link", { name: "Регистрация" }).click();
  await page.getByRole("textbox").first().fill(username);
  await page.locator('input[type="email"]').fill(email);
  await page.getByRole("textbox").nth(2).fill(password);
  await page.getByRole("textbox").nth(3).fill(password);
  await page.getByRole("button", { name: "Войти" }).click();

  await page.isVisible(`Привет, ${username}`);
});
