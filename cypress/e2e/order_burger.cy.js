describe('Ordering a Burger on Wolt.com', () => {
  it('should successfully order a burger', () => {
    // Go to Wolt.com website
    cy.visit('https://www.wolt.com');
    
    // Accept cookies
    cy.contains('Accept').click();

    // Search for a restaurant that offers burgers and delivers to Kauno Dokas
    cy.get('#front-page-input').type('Kauno Dokas').as('dropdown-menu');
    cy.wait(500);
    cy.get('@dropdown-menu').type('{enter}');
    
    // press on burgers
    cy.get(':nth-child(2) > .sc-96be9519-0 > .sc-be33da98-0 > .sc-be33da98-1 > .sc-be33da98-2 > :nth-child(2) > .sc-e4f94c87-0 > [aria-hidden="true"] > .sc-43223f4c-0 > .sc-f5bf6d34-0').click();
    
    
    // find mcdonalds restaurant
    cy.get('a[data-test-id="venueCard.mcdonalds-karaliaus-mindaugo-pr"]').click();
    
    // TODO: place order
    cy.contains('Didelis jautienos Maestro™ su gruzdintu sūriu kompleksas').click();
    cy.get('button[data-test-id="product-modal.submit"]').click();
    
    // TODO: check if order is successfully placed
    cy.contains('View order').should('exist');
    cy.contains('View order').click();
    // CartItemName should be Maestro didelis kompleksas
    
    // TODO: confirm order
    cy.get('button[data-test-id="CartViewNextStepButton"]').click();
    

    // Example assertion for successful order placement
    cy.contains('Order placed successfully').should('exist');
  });
});
