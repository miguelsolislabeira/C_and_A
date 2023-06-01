import homePage from '../pageObjects/HomePage';
import loginPage from '../pageObjects/LoginPage';
import { urls } from '../support/urls';
import '../support/commands';
import welcomePage from '../pageObjects/WelcomePage';
import * as loginValidationMessages from '../fixtures/loginValidationMessages.json';
import loginData from '../fixtures/loginData.json';

describe('Login functionality', () => {

    let emailAddress;
    let password;
    beforeEach(() => {

        homePage.goTo(urls.Home);
        homePage.getUrl().should('contain', urls.Home);
        homePage.clickOnAcceptCookiesButton();
        homePage.clickOnspanishLanguageOption();
        homePage.clickOnConfirmLanguageButton();
        homePage.getUrl().should('contain', urls.Shop);
        homePage.getLogo().should('be.visible');
        homePage.clickOnAccountIcon();
        loginPage.getHeader().should('be.visible');

    });

    it('Login correct with valid credentials', () => {
        emailAddress = loginData.users.validUser.email;
        password = loginData.users.validUser.password;

        cy.login(emailAddress, password);

        welcomePage.getGreetingText()
            .should('contain', loginData.users.validUser.name);

        cy.logout();
        loginPage.getHeader().should('be.visible');

    });

    it('Login incorrect with incorrect password', () => {
        emailAddress = loginData.users.validUserWrongPassword.email;
        password = loginData.users.validUserWrongPassword.password;

        cy.login(emailAddress, password);

        loginPage.getfailedLoginNotification().should('be.visible')
            .and('have.text', loginValidationMessages.wrongCredentials);

    });

    it('Login incorrect with unregistered user', () => {
        emailAddress = loginData.users.unRegisteredUser.email;
        password = loginData.users.unRegisteredUser.password;

        cy.login(emailAddress, password);

        loginPage.getfailedLoginNotification().should('be.visible')
            .and('have.text', loginValidationMessages.wrongCredentials);

    });

    afterEach(() => {
        cy.interceptRequests();
    });

});
