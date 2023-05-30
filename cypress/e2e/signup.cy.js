import myAccountPage from '../pageObjects/MyAccountPage';
import signUpPage from '../pageObjects/SignUpPage';
import { getRandomString, getRandomEmail, getRandomPassword } from '../support/utils';
import { urls } from '../support/urls';
import * as errorMessages from '../fixtures/signUpFormValidationMessages.json';
import * as signUpValidationMessages from '../fixtures/signUpValidationMessages.json';

describe("Sign Up", () => {

    beforeEach(() => {

        signUpPage.goTo(urls.Home + urls.SignUp);
        signUpPage.getUrl().should('contain', urls.SignUp);
        signUpPage.clickOnAcceptCookiesButton();
        signUpPage.getNuevoClienteHeader().should('be.visible');
    })

    it('Users can register on the site', () => {

        signUpPage.checkGender("Mrs");
        signUpPage.enterFirstName(getRandomString());
        signUpPage.enterLastName(getRandomString());
        signUpPage.enterEmailAddress(getRandomEmail());
        signUpPage.enterPassword(getRandomPassword());
        signUpPage.checkPrivacyCheckbox();
        signUpPage.clickOnRegisterButton();

        cy.url().should('contain', urls.MyAccountAfterRegistration);
        myAccountPage.getSignUpSuccessMessage().should('contain', signUpValidationMessages.successSignUp)
            .and('be.visible');

    });

    it("Validation messages are displayed when submitting an empty form", () => {

        const msgs = Object.values(errorMessages);
        signUpPage.clickOnRegisterButton();
        signUpPage.getErrorMessages().should('have.length', 5)
            .each(($messages, $index) => {
                expect($messages.text()).to.be.equal(msgs[$index]);
            });
        signUpPage.getPasswordInput().should('have.class', 'ng-dirty');
        
    })

})
