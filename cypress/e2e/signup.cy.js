const accessPage = require("../pageObjects/AccessPage");
const myAccountPage = require("../pageObjects/MyAccountPage");
const signUpPage = require("../pageObjects/SignUpPage");
const homePage = require("../pageObjects/homePage");


describe("Sign Up", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Users can register on the site', () => {

        homePage.clickOnAcceptCookiesButton();
        homePage.clickOnspanishLanguageOption();
        homePage.clickOnConfirmLanguageButton();
        cy.url().should('eq','https://www.c-and-a.com/es/es/shop');
        homePage.getLogo().should('be.visible');
        homePage.clickOnAccountIcon();
        
        accessPage.clickOnRegistrateAhoraLink();
        cy.url().should('eq','https://www.c-and-a.com/webapp/wcs/stores/servlet/account/registration?storeId=10155&langId=-5');
        signUpPage.getNuevoClienteHeader().should('be.visible');
        
        signUpPage.checkGender("Mrs");
        signUpPage.enterFirstName("Test");
        signUpPage.enterLastName("Test");
        signUpPage.enterEmailAddress("test1471182_@test.com");
        signUpPage.enterPassword("felipe123!A");
        signUpPage.checkPrivacyCheckbox();
        signUpPage.clickOnRegisterButton();
        
        cy.url().should('contains', 'account');
        myAccountPage.getSignUpSuccessMessage().contains('Tu cuenta de cliente se ha creado correctamente.')
            .should('be.visible');
        

    });


});