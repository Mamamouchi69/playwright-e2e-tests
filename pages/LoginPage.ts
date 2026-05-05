// On importe le type "Page" depuis Playwright
// "Page" représente un onglet de navigateur (comme Chrome)
import { Page } from '@playwright/test';

//On crée une classe LoginPage 
// Elle représente la page de login 
export class LoginPage {
  
  // Le constructeur est appelé 
  // "page" est injecté dans la classe pour pouvoir interagir avec le navigateur
  constructor(private page: Page) {}

  // Méthode pour accéder à la page de login
  async goto() {
    
    // Va à l'URL définie dans baseURL (config Playwright)
    // Ici "/" = page d'accueil : https://www.saucedemo.com/
    await this.page.goto('/');
  }

  // Méthode pour effectuer une action de login
  // Elle prend en paramètre username + password
  async login(username: string, password: string) {
    
    // Remplit le champ username avec la valeur passée en paramètre
    // '#user-name' est le sélecteur CSS de l'input
    await this.page.fill('#user-name', username);
    // Remplit le champ password
    await this.page.fill('#password', password);
     // Clique sur le bouton login
    await this.page.click('#login-button');
  }
}