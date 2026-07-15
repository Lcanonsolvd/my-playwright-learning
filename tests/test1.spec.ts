import { test,expect } from '@playwright/test';

test('mercado libre test 1', async ({page}) => {

await page.goto('https://www.mercadolibre.com.ar/');

//await page.locator('input[id=cb1-edit] ').fill('casa');
await page.locator('#cb1-edit').fill('iphone 14 pro max');
await page.keyboard.press('Enter');
//Task 2
//await page.locator("div:nth-child(3) > span")
// as we know the using the div as locator is not the best option so we should convert the fragile locator to a more robust one,
//for example we can use the text of the element or a data attribute if available.    
// why is not trustable ? 
// because is someone add one more thin to the list or card I would not be able to find the element anymore.
const product = page// we create a variale to store the locator wich is I call "product" we want to click on,
// in this case the first product that matches the search query.
// inside that variable I will save the  element that I wanto to find 
    .getByRole('link', { name: /iphone 14 pro max/i })
    // adding "i" at the end it does nbot matter capitalization or not.
    .first();
// before clicking on the element we should check if the element is visible and ready to be clicked, 
// so we can use the expect function to check if the element is visible.
  await expect(product).toBeVisible();
  await product.click();
});