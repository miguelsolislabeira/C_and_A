import loginPage from '../pageObjects/LoginPage';
import myAccountPage from '../pageObjects/MyAccountPage';
import signUpPage from '../pageObjects/SignUpPage';
import homePage from '../pageObjects/homePage';
import { getRandomString, getRandomEmail, getRandomPassword } from '../support/utils';
import { urls } from '../support/urls';
import * as errorMessages from '../fixtures/signUpValidationMessages.json';


describe("Sign Up", () => {

    beforeEach(() => {
        cy.visit('/');
        homePage.clickOnAcceptCookiesButton();
        homePage.clickOnspanishLanguageOption();
        homePage.clickOnConfirmLanguageButton();
        cy.url().should('contains', urls.Shop);
        homePage.getLogo().should('be.visible');
        homePage.clickOnAccountIcon();

        loginPage.clickOnRegistrateAhoraLink();
        cy.url().should('contain', urls.SignUp);
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
        myAccountPage.getSignUpSuccessMessage().contains('Tu cuenta de cliente se ha creado correctamente.')
            .should('be.visible');

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
