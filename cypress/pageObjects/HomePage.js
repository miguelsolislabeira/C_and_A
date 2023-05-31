import BasePage from "./BasePage";

class HomePage extends BasePage {

    spanishLanguageOption = '[data-qa = "FilterChipText"]';
    confirmLanguageButton = '[data-qa = "LoadingButton"]';
    accountIcon = '[data-qa = "HeaderAccountButton"]';
    logo = 'svg[data-qa = "Logo"]';

    clickOnspanishLanguageOption() {
        cy.get(this.spanishLanguageOption).first().click();
        cy.get(this.spanishLanguageOption).first().should('have.focus');
    }

    clickOnConfirmLanguageButton() {
        cy.get(this.confirmLanguageButton).click();
    }

    clickOnAccountIcon(){
        cy.get(this.accountIcon).click();
    }

    getLogo(){
       return cy.get(this.logo);
    }
}
module.exports = new HomePage();