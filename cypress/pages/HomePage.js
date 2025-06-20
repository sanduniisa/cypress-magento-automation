class HomePage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.contains('Create an Account').click();
  }

  enterFirstName(firstname) {
    cy.get('#firstname').should('be.visible').type(firstname);
  }

  enterLastName(lastname) {
    cy.get('#lastname').should('be.visible').type(lastname);
  }

  enterEmail(email) {
    cy.get('#email_address').should('be.visible').type(email);
  }

  enterPassword(password) {
    cy.get('#password').should('be.visible').type(password);
  }

  confirmPassword(password) {
    cy.get('#password-confirmation').should('be.visible').type(password);
  }

  clickCreatAnAccountButton() {
    cy.get('button[title="Create an Account"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  validateRegisterSuccess() {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  }

  // ---- Sign-in methods ----

  visitSignIn() {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('body', { timeout: 10000 }).should('be.visible');
    cy.contains('Sign In', { timeout: 10000 }).click();
  }

  enterLoginEmail(email) {
    cy.get('#email').should('be.visible').type(email);
  }

  enterLoginPassword(password) {
    cy.get('#pass').should('be.visible').type(password);
  }

  clickSignIn() {
    cy.get('#send2', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  validateLoginSuccess() {
    cy.get('.logged-in', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Welcome, Sanduni SenarathArachchige!');
  }


  // ---- Navigation: Women > Tops > Jackets ----

  navigateToWomenTopsJackets() {
    cy.contains('Women', { timeout: 10000 }).trigger('mouseover');
    cy.contains('Tops', { timeout: 10000 }).should('be.visible').trigger('mouseover');
    cy.contains('Jackets', { timeout: 10000 }).should('be.visible').click();
  }

  //------Search for products and results-------
  searchForProduct(keyword) {
    cy.get('#search').should('be.visible').type(`${keyword}{enter}`);
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('#search')
      .should('be.visible')
      .type(keyword)
      .type('{enter}');
  }

}

export default new HomePage();
