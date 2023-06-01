class WelcomePage {

    greetingText = "Hola";

    getGreetingText() {
        return cy.get('h1').contains(this.greetingText);
    }
}
module.exports = new WelcomePage();