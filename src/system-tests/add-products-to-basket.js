module.exports = {
  "Adding products to shopping basket": function(browser) {
    browser
      .url("http://localhost:5000")
      .waitForElementVisible("body")
      .pause(200)
      .click(".add-to-cart-FR1");

    browser.expect
      .element(".basket-list")
      .text.to.contain("Fruit tea");
    browser.end();
  },
  "Adding multiple products": function(browser) {
    browser
      .url("http://localhost:5000")
      .waitForElementVisible("body")
      .pause(200)
      .click(".add-to-cart-SR1")
      .click(".add-to-cart-SR1")
      .click(".add-to-cart-SR1")
      .pause(200);

    browser.expect
      .element(".basket-list")
      .text.to.contain("Strawberries");
    browser.expect.elements(".basket-item").count.to.equal(3);
    browser.end();
  }
};
