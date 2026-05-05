// On importe le type Page depuis Playwright
// "Page" représente une page navigateur
import { Page } from '@playwright/test';

// On crée une classe InventoryPage
// Elle représente la page des produits (inventory) après login
export class InventoryPage {
  // Le constructeur reçoit l'objet "page" (le navigateur)
  // "private page: Page" permet de stocker cette instance dans la classe
  constructor(private page: Page) {}

  // Méthode pour ajouter un produit au panier
  async addFirstItemToCart() {
    // Clique sur le bouton du premier produit
    // ".inventory_item button" sélectionne le bouton "Add to cart"
    // du premier produit affiché
    await this.page.click('.inventory_item button');
  }

    // Méthode pour aller dans le panier
  async goToCart() {
    // Clique sur l'icône du panier en haut à droite
    // ".shopping_cart_link" est le sélecteur CSS du panier
    await this.page.click('.shopping_cart_link');
  }
}