class ProductWishlistPage {
    selectSizeAndColorAndAddToCart(size, colorIndex) {
        cy.get(`.swatch-attribute.size .swatch-option[option-label="${size}"]`)
            .should('be.visible')
            .click();
        cy.wait(500);
        cy.get('.swatch-attribute.color .swatch-option.color')
            .eq(colorIndex)
            .should('be.visible')
            .click();
        cy.wait(500);
        cy.get('button.action.tocart')
            .should('be.visible')
            .click();
    }
}

export default new ProductWishlistPage();
