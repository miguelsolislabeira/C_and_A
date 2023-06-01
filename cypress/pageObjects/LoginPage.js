import BasePage from "./BasePage";

class LoginPage extends BasePage {

    registrateAhoraLink = 'Regístrate ahora';
    emailInput = 'input[data-testid = "myaccount_login_email"]';
    passwordInput = 'input[data-testid = "myaccount_login_password"]';
    sessionButton = 'button[data-qa = "LoadingButton"]';
    failedLoginNotification = 'div[data-qa = "InlineNotification"] div';
    irATuCuentaHeader = 'Ir a tu cuenta';

    clickOnRegistrateAhoraLink() {
        cy.get('span').contains(this.registrateAhoraLink).click();
    }

    enterEmailAddress(emailAddress) {
        cy.get(this.emailInput).clear().type(emailAddress);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).clear().type(password);
    }

    clickOnSessionButton() {
        cy.get(this.sessionButton).click();
    }

    getfailedLoginNotification() {
        return cy.get(this.failedLoginNotification).eq(1);
    }

    getHeader(){
        return cy.get('span').contains(this.irATuCuentaHeader);
    }


}
module.exports = new LoginPage();