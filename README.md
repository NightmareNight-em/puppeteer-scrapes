# puppeteer-scrapes
Scraping and Getting a Product HTML from Amazon

### Tech Stack
- `Node.js`

### Libraries used
- `Puppeteer`
- `Inquirer`

### Setup Instructions
- Download project folder from Github.
- `npm install` - cd to project directory and run this command.
- `npm start` - run this command to start the application.

### Input/Output
- Input : Product name (to be searched) taken from user through terminal.
- Output : Screenshot and HTML of first product among input search results.

### Working
- Puppeteer launched modified search URL to get products by searching product name inputted by the user.
- Collected all links (hrefs) to products on search result page.
- Extracted link to the first product.
- Puppeteer launched this link and helped taking screeenshot and html.
