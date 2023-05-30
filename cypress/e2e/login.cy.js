
import homePage from '../pageObjects/homePage';
import loginPage from '../pageObjects/LoginPage';
import { urls } from '../support/urls';
import '../support/commands';
import welcomePage from '../pageObjects/WelcomePage';
import * as loginValidationMessages from '../fixtures/loginValidationsMessages.json';

describe('Login functionality', () => {

    beforeEach(() => {
        cy.visit('/');
        homePage.clickOnAcceptCookiesButton();
        homePage.clickOnspanishLanguageOption();
        homePage.clickOnConfirmLanguageButton();
        cy.url().should('contains', urls.Shop);
        homePage.getLogo().should('be.visible');
        homePage.clickOnAccountIcon();

    });

    it('Login correct with valid credentials', () => {
        cy.fixture('loginData').then((loginData) => {

            cy.login(loginData.users.validUser.email,
                loginData.users.validUser.password);

            welcomePage.getGreetingText()
                .should('contain', loginData.users.validUser.name);
        })

    });

    it('Login incorrect with incorrect password', () => {
        cy.fixture('loginData').then((loginData) => {

            cy.login(loginData.users.validUserWrongPassword.email,
                loginData.users.validUserWrongPassword.password);

            loginPage.getfailedLoginNotification().should('be.visible')
                .and('have.text', loginValidationMessages.wrongCredentials);


        })
    })

    it('Login incorrect with unregistered user', () => {
        cy.login(loginData.users.unRegisteredUser.email,
            loginData.users.unRegisteredUser.password);

        loginPage.getfailedLoginNotification().should('be.visible')
            .and('have.text', loginValidationMessages.wrongCredentials);
    })
})
