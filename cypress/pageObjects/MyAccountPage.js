class MyAccountPage{

    signUpSuccessMessage = 'div .alert--success';

    getSignUpSuccessMessage(){
        return cy.get(this.signUpSuccessMessage);
    }
}
module.exports = new MyAccountPage();