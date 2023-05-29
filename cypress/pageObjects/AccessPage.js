class AccessPage{

    registrateAhoraLink = 'Regístrate ahora';
   

    clickOnRegistrateAhoraLink(){
        cy.contains(this.registrateAhoraLink).click();
    }

   
}
module.exports = new AccessPage();