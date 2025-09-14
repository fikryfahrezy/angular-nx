import { test, expect } from "@playwright/test";

test("has home page title", async ({ page }) => {
  await page.goto("/");

  // Expect h1 to contain a substring.
  expect(await page.locator("h1").innerText()).toContain("Home Page");
});
