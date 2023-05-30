class BasePage {

    acceptCookiesButton = '#onetrust-accept-btn-handler';

    goTo(url) {
        cy.visit(url);
    }

    getUrl(){
        return cy.url();
    }

    clickOnAcceptCookiesButton() {
        cy.get(this.acceptCookiesButton).click();

    }

}
export default BasePage;