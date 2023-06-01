class WelcomePage {

    greetingText = "Hola";

    getGreetingText() {
        return cy.get('span').contains(this.greetingText);
    }
}
module.exports = new WelcomePage();