import { locators } from "../../Locators/OnlinerLocators";

describe("Positive tests", () => {
    beforeEach(function () {
        cy.visit("/")
        cy.fixture("example").then((aa) => (this.aa = aa));
    });
    it("Checking checkbox",  function () {
        cy.Tv("LG");




    });
});