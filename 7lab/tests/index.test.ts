import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // log

  await page.goto("https://mail.ru/");
  await page.getByTestId("enter-mail-primary").click();
  await page
    .frameLocator(".ag-popup__frame__layout__iframe")
    .getByPlaceholder("Account name")
    .click();
  await page
    .frameLocator(".ag-popup__frame__layout__iframe")
    .getByPlaceholder("Account name")
    .fill("klonpro");
  await page
    .frameLocator(".ag-popup__frame__layout__iframe")
    .locator('[data-test-id="next-button"]')
    .click();
  await page
    .frameLocator(".ag-popup__frame__layout__iframe")
    .getByPlaceholder("Password")
    .fill("ol18181818");
  await page
    .frameLocator(".ag-popup__frame__layout__iframe")
    .locator('[data-test-id="submit-button"]')
    .click();
  await page.getByPlaceholder("Password").fill("ol181818");
  await page.locator('[data-test-id="submit-button"]').click();
  // await page.waitForNavigation({ waitUntil: "domcontentloaded" });
  // await page.goto('https://e.mail.ru/inbox/?app_id_mytracker=58519&authid=lc1pbq33.5el&back=1%2C1&dwhsplit=s10273.b1ss12743s&from=login%2Cnavi%2Cnavi&x-login-auth=1&afterReload=1');

  await page.getByRole("link", { name: "Написать письмо" }).click();
  await page.locator('input[type="text"]').first().click();
  await page.locator('input[name="Subject"]').click();
  await page.locator('input[name="Subject"]').fill("Happy new Year");
  await page.locator(".editable-0xcs > div:nth-child(2)").click();
  await page
    .getByRole("textbox", { name: "false" })
    .fill(
      "\n\nRemember, bro, U R THE BEST. Happy new year!\nПодпись\n--\nян чиков\nОтправлено из Почты Mail.ru"
    );
  await page.locator('[data-test-id="send"]').click();
  await page
    .locator(
      ".layer__controls > .button2 > .button2__wrapper > .button2__ico > .ico"
    )
    .click();
  await page.getByRole("link", { name: "Отправленные" }).click();
  await page
    .getByRole("link", {
      name: "Пометить непрочитанным eccentricmadm@gmail.com Пометить флажком Happy new Year Remember, bro, U R THE BEST. Happy new year! -- ян чиков Отправлено из Почты Mail.ru 11:19",
    })
    .click({
      button: "right",
    });
  await page.locator(".contextmenu-message > .list > div:nth-child(4)").click();
  await page.locator("a").filter({ hasText: "Отменить" }).click();
  await page
    .getByRole("link", {
      name: "Пометить непрочитанным eccentricmadm Пометить флажком Happy new Year Remember, U R THE BEST!! -- ян чиков Отправлено из Почты Mail.ru 11:15",
    })
    .click();
  await page.goto("https://e.mail.ru/sent/");
});
