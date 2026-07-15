import { test, expect } from "@playwright/test";

test("error message on wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByTestId("error")).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"   // ← is this the exact text?
    // this is not the exact text "Username and password do not match"
    // the exact text is ""
  );
 //as note  if I don have the exact text I can also use toContainText(
 //await expect(page.getByTestId("error")).toContainText("Username and password do not match");
 // or also using .toContainText(/username and password do not match/i); o ignore capitals

});