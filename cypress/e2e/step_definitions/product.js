import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.visit("https://demo.nopcommerce.com/");
});

When("I click Computers category", () => {
  cy.get(
    "body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(1) > a"
  ).click();
});

Then("I click Notebooks category", () => {
  cy.get(
    "#main > div > div.center-2 > div > div.page-body > div.category-grid.sub-category-grid > div > div:nth-child(2) > div > h2 > a"
  ).click();
});

Then("I see list of notebook product", () => {
  cy.get("#main > div > div.center-2 > div > div.page-title > h1").should(
    "be.visible"
  );
  cy.get("#main > div > div.center-2 > div > div.page-title > h1").should(
    "contain.text",
    "Notebooks"
  );
});
