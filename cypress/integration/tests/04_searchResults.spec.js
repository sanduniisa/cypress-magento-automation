import HomePage from '../../pages/HomePage';

describe('Test Case (D): Search and validate results', () => {
    beforeEach(function () {
        cy.fixture('userData').then((data) => {
            this.data = data;

            HomePage.visitSignIn();
            HomePage.enterLoginEmail(data.user.email);
            HomePage.enterLoginPassword(data.user.password);
            HomePage.clickSignIn();
            HomePage.validateLoginSuccess();
        });
    });

    it('should search for a product and validate that jacket products are displayed', function () {
        const keyword = this.data.search.keyword;
        HomePage.searchForProduct(keyword);
        cy.get('span.base').should('contain.text', `Search results for: '${keyword}'`);
        cy.get('.product-item-name').should('have.length.greaterThan', 0);
        cy.get('.product-item-name:visible').each(($el) => {
            cy.wrap($el)
                .invoke('text')
                .then((text) => {
                    const trimmed = text.trim().toLowerCase();
                    expect(trimmed).to.not.be.empty;
                    expect(trimmed).to.include('jacket');
                });
        });

    });
});
