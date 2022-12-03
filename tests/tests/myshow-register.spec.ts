import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const username = faker.name.firstName() + faker.random.numeric();
const email = faker.internet.email();
const password = faker.internet.password();

test("registration", async ({ page }) => {
  await page.goto("https://myshows.me/");
  await page.waitForLoadState("networkidle");
  await page.locator(".Login-container").click();
  await page.getByRole("link", { name: "Регистрация" }).click();
  await page.getByRole("textbox").first().fill(username);
  await page.locator('input[type="email"]').fill(email);
  await page.getByRole("textbox").nth(2).fill(password);
  await page.getByRole("textbox").nth(3).fill(password);
  await page.getByRole("button", { name: "Войти" }).click();

  await page.isVisible(`Привет, ${username}`);
});

test("search", async ({ page }) => {
  await page.goto("https://myshows.me/");
  await page.getByPlaceholder("Рик и Морти").fill("Рик и Морти");
  await page.getByRole("button", { name: "Найти" }).click();

  await page.getByRole("link", { name: "Рик и Морти" }).isVisible();
});

test("not found page", async ({ page }) => {
  await page.goto(`https://myshows.me/${faker.datatype.uuid()}`);

  await page.getByRole("heading", { name: "Оппс… Заблудился?" }).isVisible();
});
