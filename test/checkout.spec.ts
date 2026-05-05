// On importe les fonctions principales de Playwright :
// - test : pour créer un test
// - expect : pour faire des assertions (vérifications)
import { test, expect } from '@playwright/test';

// On définit un test nommé "checkout flow"
// Playwright fournit automatiquement "page" (le navigateur)
test('checkout flow', async ({ page }) => {
   // On ouvre la page d'accueil (baseURL défini dans config)
  await page.goto('/');
  // On remplit le champ username avec "standard_user"
  await page.fill('#user-name', 'standard_user');
  // On remplit le champ password
  await page.fill('#password', 'secret_sauce');
  // On clique sur le bouton login
  await page.click('#login-button');

  // On clique sur le bouton "Add to cart" du premier produit
  await page.click('.inventory_item button');
  // On clique sur l'icône du panier
  await page.click('.shopping_cart_link');
  // On clique sur le bouton "Checkout"
  await page.click('#checkout');

  // On remplit le prénom dans le formulaire de checkout
  await page.fill('#first-name', 'Jean');
  // On remplit le nom de famille
  await page.fill('#last-name', 'Remy');
  // On remplit le code postal
  await page.fill('#postal-code', '69006');

  // On clique sur "Continue" pour passer à l'étape suivante
  await page.click('#continue');
  // On clique sur "Finish" pour finaliser la commande
  await page.click('#finish');

  // Assertion : on vérifie que le message de confirmation contient "thank you"
  // ".complete-header" est le message affiché après achat
  await expect(page.locator('.complete-header')).toHaveText(/thank you/i);
});