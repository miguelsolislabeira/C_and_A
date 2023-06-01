import BasePage from "./BasePage";

class SignUpPage extends BasePage {

    firstNameInput = 'input[id = "register.firstName"]';
    lastNameInput = 'input[id = "register.lastName"]';
    emailInput = 'input[id = "register.email"]';
    passwordInput = 'input[id = "register.loginPassword"]';
    privacyCheckbox = 'input[id = "register.confirmPrivacy"]';
    registerButton = "Registrarse ahora";
    nuevoClienteHeader = '¿Nuevo cliente?';
    passwordInput = 'input[id = "register.loginPassword"]';

    checkGenderCheckbox(gender) {
        cy.get(`[value = '${gender}']`).check({ force: true });
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameInput).clear().type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameInput).clear().type(lastName);
    }

    enterEmailAddress(emailAddress) {
        cy.get(this.emailInput).clear().type(emailAddress);
    }

    enterPassword(password) {
        cy.get(this.passwordInput).clear().type(password);
    }

    checkPrivacyCheckbox() {
        cy.get(this.privacyCheckbox).check({ force: true });
    }

    clickOnRegisterButton() {
        cy.get('button').contains(this.registerButton).click();
    }

    getNuevoClienteHeader() {
        return cy.get('h3').contains(this.nuevoClienteHeader);
    }

    getErrorMessages() {
        return cy.get('p .error-required:visible')
    }
    getPasswordInput() {
        return cy.get(this.passwordInput);
    }


}

module.exports = new SignUpPage();