import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  //declaramos los locators que vamos a usar en la pagina de inventario
  readonly page: Page;

  readonly backpackAddButton: Locator;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;
// el constructor es un metodo especial que se llama cuando se crea una instancia de la clase, en este caso 
// cuando se crea una instancia de la clase InventoryPage, se le pasa como parametro el objeto page que es el 
// que nos permite interactuar con la pagina web, y dentro del constructor se inicializan los locators que vamos a
//  usar en la pagina de inventario, para ello usamos los metodos getByTestId y locator de la clase Page, que nos
//  permiten buscar elementos en la pagina web por su atributo data-testid o por su selector CSS respectivamente.
  constructor(page: Page) {
    this.page = page;

    this.backpackAddButton = page.getByTestId(
      "add-to-cart-sauce-labs-backpack"
    );

    this.shoppingCartBadge = page.locator(".shopping_cart_badge");

    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
  }
// el metodo addBackpackToCart es un metodo asincrono que se encarga de hacer click en el boton de agregar al
//  carrito del producto backpack, para ello usamos el metodo click del locator backpackAddButton, que es el que 
// representa el boton de agregar al carrito del producto backpack.
  async addBackpackToCart() {
    await this.backpackAddButton.click();
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}