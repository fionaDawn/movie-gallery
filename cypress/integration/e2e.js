/* eslint-disable no-undef */
describe('e2e testing', () => {
    it('should run as expected', () => {
        cy.visit('localhost:3000')
        cy.findByText("Pop Movies").should("exist");
        cy.findAllByTestId("movie-poster").should('have.length', 20)
        cy.findAllByTestId("movie-poster").first().click()
        cy.url().should("contain", "/movie/");
        cy.findByText("Add to Favorite").should("exist");
        cy.findByText("120 mins").should("exist");
        cy.findByText("TRAILERS").should("exist");
        cy.findByTestId("back-button").click()
        cy.url().should("not.contain", "/movie/");
        cy.url().should("contain", ":3000/");
    })
})