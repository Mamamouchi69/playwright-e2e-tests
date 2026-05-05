// On importe "test" depuis Playwright
// "test" permet de créer et exécuter un test
import { test } from '@playwright/test';
// On importe la classe LoginPage (Page Object du login)
import { LoginPage } from '../pages/LoginPage';
// On importe la page des produits (inventory)
import { InventoryPage } from '../pages/InventoryPage';
// On importe la page du panier
import { CartPage } from '../pages/CartPage';

// On définit un test nommé "add item to cart"
// Playwright fournit automatiquement "page" (le navigateur)
test('add item to cart', async ({ page }) => {
  // On crée une instance de LoginPage
  // Elle va permettre d'interagir avec la page de login
  const loginPage = new LoginPage(page);
  // Instance de la page inventory (liste des produits)
  const inventory = new InventoryPage(page);
  // Instance de la page panier
  const cart = new CartPage(page);

  // On ouvre la page d'accueil (baseURL)
  await loginPage.goto();
 // On effectue le login avec un utilisateur valide 
  await loginPage.login('standard_user', 'secret_sauce');

  // On ajoute le premier produit au panier
  await inventory.addFirstItemToCart();
  // On navigue vers la page du panier
  await inventory.goToCart();

  // On vérifie qu’un produit est bien présent dans le panier
  // (assertion via CartPage)
  await cart.verifyItemInCart();
});