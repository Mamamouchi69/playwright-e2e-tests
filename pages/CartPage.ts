// On importe deux choses depuis Playwright :
// - Page : pour interagir avec le navigateur
// - expect : pour faire des assertions (vérifications)
import { Page, expect } from '@playwright/test';

// On crée une classe CartPage
// Elle représente la page du panier (cart)
export class CartPage {
  // Le constructeur reçoit l'objet "page" (le navigateur)
  // "private page: Page" permet de le stocker dans la classe
  constructor(private page: Page) {}

  // Méthode pour vérifier qu’un produit est présent dans le panier
  async verifyItemInCart() {
    // On vérifie qu’un élément avec la classe ".cart_item" est visible
    // locator() permet de cibler un élément
    // expect() permet de faire une assertion
    // toBeVisible() vérifie que l’élément est affiché à l’écran
    await expect(this.page.locator('.cart_item')).toBeVisible();
  }
}