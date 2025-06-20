# cypress-magento-automation

**Test Reports** – [Click to view report](https://drive.google.com/file/d/1-XwfCbCywEOy9aDySB3PWihhMiQFpPgQ/view?usp=sharing)

---

##Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- NPM (comes with Node.js)
- Google Chrome (or any browser supported by Cypress)

### Clone the Repository and Install Dependencies

```bash
git clone https://github.com/your-username/cypress-magento-automation.git
cd cypress-magento-automation
```

#Run Tests with Report
npm run test:report

#Open html report
open cypress/reports/index_004.html

# Run Cypress tests with the interactive UI (test runner)
npx cypress open

# Run Cypress tests in headless mode (no UI, good for CI)
npx cypress run

#Tech Stack
Cypress , JavaScript ,Page Object Model (POM) ,Mochawesome for reporting

#Automated UI flows for Magento:

1. registration.spec.js ---> user create account and login scenario  , before execute add a new email to userData.json in fixtures folder , Test Case (A): Registration flow and login flow with valid credentials

2. placeOrder.spec.js ----> add procuts to cart and calculating the total then validate the total with subtotal . note: my test is currently failing , Test Case (B): Place order with multiple products and validate total price

3. wishList.spec.js ---> add product to wishlist and add to cart from wishlist and go to checkout page , Test Case (C): Add to Wishlist and Checkout from Wishlist

4. searchResults.spec.js ---> search for a product and validate the producte include the search word , Test Case (D): Search and validate results
