import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  readonly checkoutButton: Locator;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.getByTestId("checkout");

    this.cartItem = page.getByText("Sauce Labs Backpack");
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}