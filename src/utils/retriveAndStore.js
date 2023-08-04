const fs = require("fs");

async function storeHtmlAndScreenshot(page, productName) {
  // get HTML content of product page
  const html = await page.content();
  //create directory with product name
  const dirpath = `${productName}`;
  fs.mkdirSync(dirpath, { recursive: true });
  fs.writeFileSync(`./${productName}/${productName}.html`, html);
  // take screenshot of the product page
  await page.screenshot({ path: `./${productName}/${productName}.jpg` });
}

async function getLinksToAllProducts(page, urlHop1) {
  //launch urlHop1 - It will enter search result base page of the respective product
  await page.goto(urlHop1);
  // get links to all products on base page
  const hrefs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a.a-link-normal"), (a) =>
      a.getAttribute("href")
    )
  );
  return hrefs;
}

module.exports = {storeHtmlAndScreenshot, getLinksToAllProducts};