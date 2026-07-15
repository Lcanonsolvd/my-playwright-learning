import { test, expect } from '@playwright/test'; // 1. import tools 

test.describe('Login Tests', () => {

  //we add the test before each test to go to the base url
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });


  test('Successful login', async ({ page }) => {   

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory/);    
  });


  test('Negative login wrong password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByTestId('error'),"Error should appear for wrong credentials").toBeVisible();
  });




  test('add a product to the cart', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

    await expect(
      page.locator(".shopping_cart_badge"),
      "Cart badge should show 1 after adding a product"
    ).toHaveText("1");
  });



  test('remove a product from the cart', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
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


  test('Empty validation. no password ', async ({ page }) => {   

      await page.getByPlaceholder('Username').fill('standard_user');      
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByTestId('error'),"Error should appear for missing passwords").toBeVisible();
      
    });


    test('Empty validation. no username', async ({ page }) => {   
      await page.getByPlaceholder('Password').fill('secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.getByTestId('error'),"Error should appear for missing passwords").toBeVisible();
      
    });


   

});