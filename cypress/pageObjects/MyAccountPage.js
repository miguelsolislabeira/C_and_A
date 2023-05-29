class MyAccountPage{

    signUpSuccessMessage = 'div .alert--success';

    getSignUpSuccessMessage(){
        return cy.get(this.signUpSuccessMessage, {timeout:10000});
    }
}
module.exports = new MyAccountPage();