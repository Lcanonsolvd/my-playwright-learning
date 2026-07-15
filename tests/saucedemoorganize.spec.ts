import { test, expect } from '@playwright/test'; // 1. import tools 

test.describe('Login Tests', () => {

  //we add the test before each test to go to the base url
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();


  });

    test('to have. inventory', async ({ page }) => {       
        await expect(page).toHaveURL(/inventory/);    
    });

    
    test('add a product to the cart', async ({ page }) => {       
        await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
        await expect(
        page.locator(".shopping_cart_badge"),
        "Cart badge should show 1 after adding a product"
        ).toHaveText("1");
  });

    test('remove a product from the cart', async ({ page }) => {       
        await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
        await expect(
            page.locator(".shopping_cart_badge"),
            "Cart badge should show 1 after adding a product"
        ).toHaveText("1");
        await page.getByRole('button', { name: 'Remove' }).click();
        await expect(
        page.locator(".shopping_cart_badge"),
        "Cart badge should not be visible after removing product"
        ).not.toBeVisible();
    });



});