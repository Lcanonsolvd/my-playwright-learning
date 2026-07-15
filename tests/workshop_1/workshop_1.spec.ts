import { test } from '@playwright/test';

test('Basic Navigation', async ({page}) => {
    await page.goto('https://github.com/');
    await page.waitForTimeout(3000);
    await page.reload();
});

test('Interacting with web Element on Gitlab ', async ({page}) => {
    await page.goto('https://about.gitlab.com/'); 
    await page.getByRole('link', { name: 'Try for free' }).click();
    //await page.locator ('[data-testid="new-user-first-name-field"]').fill('John');
    //await page.locator ('[data-testid="new-user-last-name-field"]').fill('Martinez');    
    await page.getByTestId('new-user-first-name-field').fill('Laura');
    await page.getByTestId('new-user-last-name-field').fill('Ar');
});

test('Using various Locators methods', async ({page}) => {
    await page.goto('https://about.gitlab.com/'); 
   //await page.getByRole('button', { name: 'Website language selector' }).click();
    await page.getByRole('menuitem', { name: 'Company' }).click();
    //await page.getByRole('link', { name: 'Press' }).click()// falla algunas veces por que me busca en la totalidad de la pagina y no en el menu de company;
    //para solucionarlo debo restringir la busqueda a un contenedor especifico, en este caso el menu de company
   
    //await page.getByLabel('Company').getByRole('link', { name: 'Press' }).click();--: me daba error por q el sub meno lo maneja con el id 
    //aria-controls="navigation-submenu-4"
    await page.locator('#navigation-submenu-4').getByRole('link', { name: 'Press' }).click();
});