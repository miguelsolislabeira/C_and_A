import homePage from '../pageObjects/homePage';
import loginPage from '../pageObjects/LoginPage';
import { urls } from '../support/urls';
import '../support/commands';
import welcomePage from '../pageObjects/WelcomePage';
import * as loginValidationMessages from '../fixtures/loginValidationMessages.json';
import loginData from '../fixtures/loginData.json';

describe('Login functionality', () => {

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
        
        cy.login(loginData.users.validUser.email,
                loginData.users.validUser.password);

        welcomePage.getGreetingText()
                .should('contain', loginData.users.validUser.name);
        
        cy.logout();
        loginPage.getHeader().should('be.visible');

    });

    it('Login incorrect with incorrect password', () => {
      
        cy.login(loginData.users.validUserWrongPassword.email,
            loginData.users.validUserWrongPassword.password);

        loginPage.getfailedLoginNotification().should('be.visible')
            .and('have.text', loginValidationMessages.wrongCredentials);
    })

    it('Login incorrect with unregistered user', () => {
      
        cy.login(loginData.users.unRegisteredUser.email,
            loginData.users.unRegisteredUser.password);
    
        loginPage.getfailedLoginNotification().should('be.visible')
            .and('have.text', loginValidationMessages.wrongCredentials);
       
    })
})
