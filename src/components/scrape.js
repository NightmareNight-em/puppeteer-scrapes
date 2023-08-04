const puppet = require("puppeteer");
const UserInput = require("./userInput.js");
const {storeHtmlAndScreenshot, getLinksToAllProducts} = require("./../utils/retriveAndStore.js");

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
};

const URL = "https://www.amazon.com/";

async function Scrape() {
  try {
    //launch browser in headless mode
    const browser = await puppet.launch({ headless: "new" });
    //browser new page
    const page = await browser.newPage();

    // get product name from the user
    const productName = await UserInput.UserInput();
    // creating url for search results on the product inputted by the user
    const urlHop1 = URL + `s?k=${productName}`;

    const linksToAllProducts = await getLinksToAllProducts(page, urlHop1);
    // considering first product to scrape
    const urlHop2 = URL + linksToAllProducts[0];
    // launch the product page
    await page.goto(urlHop2);

    await storeHtmlAndScreenshot(page, productName);

    await browser.close();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { Scrape };
