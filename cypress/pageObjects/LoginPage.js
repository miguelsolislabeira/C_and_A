class LoginPage {

    registrateAhoraLink = 'Regístrate ahora';
    emailInput = 'input[data-testid = "myaccount_login_email"]';
    passwordInput = 'input[data-testid = "myaccount_login_password"]';
    loginButton = 'button[data-qa = "LoadingButton"]';
    failedLoginNotification = 'div[data-qa = "InlineNotification"] div';

    clickOnRegistrateAhoraLink() {
        cy.contains(this.registrateAhoraLink).click();
    }

    enterEmailAddress(emailAddress) {
        cy.get(this.emailInput).clear().type(emailAddress);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).clear().type(password);
    }

    clickOnLoginButton() {
        cy.get(this.loginButton).click();
    }

    getfailedLoginNotification() {
        return cy.get(this.failedLoginNotification).eq(1);
    }


}
module.exports = new LoginPage();