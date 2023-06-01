import BasePage from "./BasePage";

class HomePage extends BasePage {

    spanishLanguageOption = 'button[data-qa = "FilterChipText"]';
    confirmLanguageButton = 'button[data-qa = "LoadingButton"]';
    accountIcon = 'button[data-qa = "HeaderAccountButton"]';
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