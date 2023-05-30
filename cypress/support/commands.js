import loginPage from "../pageObjects/LoginPage";

Cypress.Commands.add('login', (emailAddress, password) => {
  loginPage.enterEmailAddress(emailAddress);
  loginPage.enterPassword(password);
  loginPage.clickOnSessionButton();
});

Cypress.Commands.add('logout', () => {
  loginPage.clickOnSessionButton();
});