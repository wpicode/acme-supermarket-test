module.exports = {
  "Pricing rule buy one get one free": function(browser) {
    browser
      .url("http://localhost:5000")
      .waitForElementVisible("body")
      .pause(200)
      .click(".add-to-cart-FR1")
      .click(".add-to-cart-FR1");

    browser.expect
      .element(".total-sum")
      .text.to.equal("3.11");

    browser.end();
  },
    "Pricing rule bulk buy": function(browser) {
      browser
        .url("http://localhost:5000")
        .waitForElementVisible("body")
        .pause(200)
        .click(".add-to-cart-SR1")
        .click(".add-to-cart-SR1")
        .click(".add-to-cart-SR1");

      browser.expect
        .element(".total-sum")
        .text.to.equal("13.5");

      browser.end();
    }
};
