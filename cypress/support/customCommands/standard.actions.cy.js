

Cypress.Commands.add('LaunchApp', () => {
    cy.visit('/')
 })

 Cypress.Commands.add('typeText', (field, text) => {
    cy.fixture('selectors').then((el)=>{
        cy.get(field).should('be.visible').type(text);
    })
 })
// Cypress.Commands.add('clickAnElement', (element)=>{
//     cy.fixture('selectors').then((el)=>{
//         cy.get(element).should('be.visible').click()
//     })   
// })
// Cypress.Commands.add('clickAnElement', (element) => {
//     cy.fixture('selectors').then((el) => {
//       cy.get(element).should('be.visible').then(($el) => {
//         if ($el.is('select')) {
//           // Use cy.select() for <select> elements
//           cy.get(element).select($el.val());
//         } else {
//           // Use cy.click() for other clickable elements
//           cy.get(element).click();
//         }
//       });
//     });
//   });
Cypress.Commands.add('clickAnElement', (element) => {
    cy.fixture('selectors').then((el) => {
      cy.get(element).should('be.visible').then(($el) => {
        if ($el.is('select')) {
          // Use cy.select() for <select> elements
          cy.get(element).select($el.val());
        } else {
          // Check if the element is hidden, if so, force the click
          if (!$el.is(':visible')) {
            cy.get(element).click({ force: true });
          } else {
            // Use cy.click() for other clickable elements
            cy.get(element).click();
          }
        }
      });
    });
  });

Cypress.Commands.add('clickElement', (element)=>{
    cy.fixture('selectors').then((el)=>{
        cy.get(element).should('be.visible').check('1')
    })   
})