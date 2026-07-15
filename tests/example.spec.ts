//Import test and assertion from playwright 
import { test, expect } from '@playwright/test'; // 1. import tools 

//create a  test named "has title" 
test('has title', async ({ page }) => { // this is a key  it is the standart destructuring {page}--> take the page 
                                        //  out of the objetc 

  //navigate to the playwright website 
  await page.goto('https://www.saucedemo.com'); // we uses await and it means dono go the the next line until this 
                                              //action is done  
  //verify that the age title contains "Playwright"
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

/*test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
/});
