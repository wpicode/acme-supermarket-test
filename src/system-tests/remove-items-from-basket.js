module.exports = {
  "Remove products from basket": function(browser) {
    browser
      .url("http://localhost:5000")
      .waitForElementVisible("body")
      .pause(200)
      .click(".add-to-cart-FR1")
      .click(".add-to-cart-FR1");
    browser.expect.elements(".basket-item").count.to.equal(2);
    browser.expect
      .element(".basket-list")
      .text.to.contain("Fruit tea");

    browser
      .click(".basket-remove-FR1");
    browser.expect.elements(".basket-item").count.to.equal(1);

    browser.end();
  }
};
