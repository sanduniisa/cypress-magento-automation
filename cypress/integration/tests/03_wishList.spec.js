import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import MyWishListPage from '../../pages/MyWishListPage';
import ProductWishlistPage from '../../pages/ProductWishlistPage';



describe('Test Case (C): Add to Wishlist and Checkout from Wishlist', () => {

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

    it('should add product to wishlist and validate navigate My Wish List Page', function () {
        HomePage.navigateToWomenTopsJackets();

        const product = this.data.products[2];
        ProductPage.addProductToWishlist(product.name);
         MyWishListPage.validateWishListPageLoad();
        MyWishListPage.hoverProductAndClickAddToCart(product.name);
        ProductWishlistPage.selectSizeAndColorAndAddToCart(product.size, product.colorIndex);
        MyWishListPage.clickCartAndProceedToCheckout();

        
    });
});

