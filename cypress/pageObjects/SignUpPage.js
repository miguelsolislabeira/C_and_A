class SignUpPage {

    firstNameInput = 'input[id = "register.firstName"]';
    lastNameInput = 'input[id = "register.lastName"]';
    emailInput = 'input[id = "register.email"]';
    passwordInput = 'input[id = "register.loginPassword"]';
    privacyCheckbox = 'input[id = "register.confirmPrivacy"]';
    registerButton = "Registrarse ahora";
    nuevoClienteHeader = '¿Nuevo cliente?';
    
    /*
    gender : "Mr", "Mrs", "Other"
    */
    checkGender(gender) {
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
        cy.contains(this.registerButton).click();
    }

    getNuevoClienteHeader(){
        return cy.contains(this.nuevoClienteHeader);
    }


}

module.exports = new SignUpPage();