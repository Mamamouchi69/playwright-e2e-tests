// On importe "test" pour créer un test
// et "expect" pour faire des assertions (vérifications)
import { test, expect } from '@playwright/test';
// On importe la classe LoginPage (Page Object)
// depuis le dossier pages
import { LoginPage } from '../pages/LoginPage';

// On définit un test avec un nom ("user can login")
// Playwright fournit automatiquement "page" (navigateur)
test('user can login', async ({ page }) => {
  // On crée une instance de LoginPage
  // et on lui passe "page" pour qu'elle puisse interagir avec le navigateur
  const loginPage = new LoginPage(page);

  // On appelle la méthode goto() pour ouvrir la page de login
  await loginPage.goto();
  
  // On appelle la méthode login avec un username + password
  // Cette méthode va remplir les champs + cliquer sur login
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertion : on vérifie que l'URL contient "/inventory"
  // Ca confirme que le login a réussi
  await expect(page).toHaveURL(/inventory/);
});