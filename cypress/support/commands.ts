import {locators} from "../Locators/OnlinerLocators";

Cypress.Commands.add("Tv", (locator: string): void => {

    cy.contains("Каталог").click({force: true});
    cy.get(locators.electronic).eq(1).click();
    cy.contains("Телевидение").click();
    cy.get(`[href="https://catalog.onliner.by/tv"]`).click({force: true});
    cy.contains("LG").click().should("contain.text", locator);
});
