import loginPage from "../pageObjects/LoginPage";

Cypress.Commands.add('login', (emailAddress, password) => {
  loginPage.enterEmailAddress(emailAddress);
  loginPage.enterPassword(password);
  cy.interceptRequests();
  loginPage.clickOnSessionButton();
});

Cypress.Commands.add('logout', () => {
  loginPage.clickOnSessionButton();
});

Cypress.Commands.add('interceptRequests', () => {
  cy.intercept({ url: '**', method: 'GET' }, (req) => {
    if (!req.url.startsWith('https://c-and-a.com')) {
      req.reply({ status: 200, body: 'Request blocked' })
    }
  });

});