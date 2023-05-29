const accessPage = require("../pageObjects/AccessPage");
const myAccountPage = require("../pageObjects/MyAccountPage");
const signUpPage = require("../pageObjects/SignUpPage");
const homePage = require("../pageObjects/homePage");
import {getRandomString,  getRandomEmail, getRandomPassword} from '../support/utils';
import {urls} from '../support/urls';


describe("Sign Up", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Users can register on the site', () => {

        homePage.clickOnAcceptCookiesButton();
        homePage.clickOnspanishLanguageOption();
        homePage.clickOnConfirmLanguageButton();
        cy.url().should('contains', urls.Shop);
        homePage.getLogo().should('be.visible');
        homePage.clickOnAccountIcon();
        
        accessPage.clickOnRegistrateAhoraLink();
        cy.url().should('contain',urls.SignUp);
        signUpPage.getNuevoClienteHeader().should('be.visible');
        
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


});