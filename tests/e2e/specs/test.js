// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});

describe("Transaction Page", () => {
  it("Visits the page at correct URL", () => {
    cy.visit("/transaction");
    cy.contains("h1", "New Transaction");
  });
});
