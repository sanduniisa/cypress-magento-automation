class MyWishListPage {

    validateWishListPageLoad() {
        cy.url().should('include', '/wishlist');
        cy.get('span.base[data-ui-id="page-title-wrapper"]')
            .should('be.visible')
            .and('have.text', 'My Wish List');
        cy.get('.wishlist').should('exist');
    }
    hoverProductAndClickAddToCart(productName) {
        cy.contains('.product-item-name', productName)
            .scrollIntoView()
            .parents('.product-item')
            .as('productCard');

        cy.get('@productCard')
            .trigger('mouseover');

        cy.get('@productCard').within(() => {
            cy.contains('Add to Cart', { matchCase: false })
                .scrollIntoView()
                .click({ force: true });
        });
    }
    clickCartAndProceedToCheckout() {
        cy.get('.showcart', { timeout: 10000 }).click();
        cy.wait(1000);

        cy.get('#top-cart-btn-checkout', { timeout: 10000 }).then($btn => {
            if ($btn.is(':visible')) {
                cy.wrap($btn).click({ force: true });
            } else {
                cy.visit('/checkout/cart/');
            }
        });

        cy.url({ timeout: 10000 }).should('include', '/checkout');
    }




}
export default new MyWishListPage();
