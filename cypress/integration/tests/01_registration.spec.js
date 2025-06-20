import HomePage from '../../pages/HomePage';

describe('Test Case (A): Registration flow and login flow with valid credentials', () => {
  beforeEach(function () {
    cy.fixture('userData').then((data) => {
      this.data = data;
    });
  });

  it('should register a new account successfully', function () {
    HomePage.visit();
    HomePage.enterFirstName(this.data.user.firstname);
    HomePage.enterLastName(this.data.user.lastname);
    HomePage.enterEmail(this.data.user.email);
    HomePage.enterPassword(this.data.user.password);
    HomePage.confirmPassword(this.data.user.password);
    HomePage.clickCreatAnAccountButton();
    HomePage.validateLoginSuccess();
  });
  it('should login with the valid credentials', function () {
    HomePage.visitSignIn();
    HomePage.enterLoginEmail(this.data.user.email);
    HomePage.enterLoginPassword(this.data.user.password);
    HomePage.clickSignIn();
    HomePage.validateLoginSuccess();
  });

});
