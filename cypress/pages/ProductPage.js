import { timeout } from "async";

class ProductPage {

  addProductToCartAndReturnPrice(productName, size, colorIndex) {
    return cy.get('.products-grid .product-item-info')
      .contains(productName)
      .parents('.product-item-info')
      .scrollIntoView()
      .should('be.visible')
      .trigger('mouseover')
      .then(($productCard) => {
        return cy.wrap($productCard).within(() => {
          cy.get(`.swatch-option.text[option-label="${size}"]`).should('be.visible').click();

          cy.get('.swatch-attribute.color .swatch-option.color')
            .eq(colorIndex)
            .should('be.visible')
            .trigger('mouseover')
            .click();

          return cy.get('[data-price-type="finalPrice"] .price')
            .should('be.visible')
            .invoke('text')
            .then((priceText) => {
              const price = parseFloat(priceText.replace('$', ''));
              cy.log(`Adding ${productName} (${size}, color index ${colorIndex}) - $${price}`);

              return cy.get('button.action.tocart')
             .should('be.visible')
            .click({ force: true }) 
         .then(() => price);

            });
        });
      });
  }
  
 addProductToWishlist(productName) {
  return cy.get('.products-grid .product-item-info')
    .contains(productName)
    .parents('.product-item-info')
    .scrollIntoView()
    .should('be.visible')
    .then(($card) => {
      cy.wrap($card).trigger('mouseover');
      cy.wait(500); 

      cy.wrap($card).within(() => {
        cy.get('.action.towishlist', { timeout: 10000 })
          //.should('be.visible')
          .click({ force: true });
      });

      cy.url({ timeout: 10000 }).should('include', '/wishlist');
    });
}


}

export default new ProductPage();
