import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';

describe('Test Case (B): Place order with multiple products and validate total price', () => {

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

    it('should add multiple products and validate cart total', function () {
        const prices = [];
        HomePage.navigateToWomenTopsJackets();

        cy.wrap(this.data.products)
            .each((product) => {
                cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html');
                return ProductPage.addProductToCartAndReturnPrice(product.name, product.size, product.colorIndex)
                    .then((price) => {
                        prices.push(price);
                    });
            })
            .then(() => {
                const expectedTotal = prices.reduce((sum, price) => {
                    return sum + (typeof price === 'number' ? price : 0);
                }, 0);
                cy.get('.showcart',{timeout:10000}).click();
                cy.get('div.mage-dropdown-dialog', { timeout: 10000 }).should('be.visible');
                cy.get('.price-wrapper[data-bind*="subtotal_excl_tax"] .price')
                    .invoke('text')
                    .then((subtotalText) => {
                        const subtotal = parseFloat(subtotalText.replace('$', '')).toFixed(2);
                        const expected = expectedTotal.toFixed(2);

                        expect(subtotal).to.equal(expected);
                        cy.log(`Subtotal in mini cart: $${subtotal}`);
                    });
            });

    });



});

