class WelcomePage {

    greetingText = "Hola";

    getGreetingText() {
        return cy.contains(this.greetingText);
    }
}
module.exports = new WelcomePage();