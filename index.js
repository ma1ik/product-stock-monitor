// Import axios for requests module & cheerio for web scraping
const axios = require('axios');
const cheerio = require('cheerio');

    // Getting date
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // Getting time
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    // Getting the product url and replacing it with a product ID
    const getProductUrlSimplyGames = (product_id) => `https://www.simplygames.com/p/${product_id}`;

    // Function for getting the product ID information with the use of headers to allow us to act like a web browser & avoid bot detection.
    async function getProductSimplyGames(product_id) {
        const productUrl = getProductUrlSimplyGames(product_id);
        const { data } = await axios.get(productUrl, {
            headers: {
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                Host: 'www.simplygames.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.55',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
            }
        });



    /* Web scrapes for the product, stockStatus and price.
       For stock status, it checks if product is in stock and returns true, otherwise returns false
    */
    const $ = cheerio.load(data);
    const store = 'SimplyGames';
    const product = $('.product_content').children('h1').text();
    const stockStatus = $('.in_stock').text().includes('In Stock');
    const price = $('.price_point').text();
    const productInfo = {
        'Store': store,
        'Product Name': product,
        'Stock Status': stockStatus,
        'Price': price,
        'Date': dateTime,
    }


        // Prints product info variables needed for program to function
    console.log(productInfo);
}
    // Array of product pages to be monitored
    const allProducts = [
        'gran-turismo-7-ps5',
        'grand-theft-auto-the-trilogy---the-definitive-edition-xbox-one-xbox-series-x--s',
        'ps5-console-ps4',
        'xbox-series-s-console-xbox-series-x',
        'lego-star-wars-the-skywalker-saga-xbox-one',
    ]

    // A function for loop that loops through the allProducts array and logs the status of each product e.g. name, status of stock and price.
    const simplyGames = allProducts => {
    for (let i = 0; i < allProducts.length; i++) {
        getProductSimplyGames(allProducts[i]);
        }
    };

// -------------- Zavvi Web Scraping--------------
    // Product url for Zavvi
    const getProductUrlZavvi = (product_id) => `https://www.zavvi.com/${product_id}`;

    // Get product information using a function with the use of a product ID and using headers from the browser
    async function getProductZavvi(product_id) {
        const productUrl = getProductUrlZavvi(product_id);
        const { data } = await axios.get(productUrl, {
            headers: {
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                Host: 'www.zavvi.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-GB,en;q=0.5',
            }
    });

    /* Web scrapes for the product, stockStatus and price.
    For stock status, it checks if product is in stock and returns true, otherwise returns false
    */
    const $ = cheerio.load(data);
    const store = 'Zavvi';
    const product = $('.productName_title').text();
    const stockStatus = $('.productAddToBasket.productAddToBasket-buyNow.js-e2e-add-basket').text().includes('Buy Now');
    const price = $('.productPrice_price').text().trim();
    const productInfo = {
        'Store': store,
        'Product': product,
        'Stock Status': stockStatus,
        'Price': price,
        'Date': dateTime,
    }
    console.log(productInfo);
}
    // All products to be monitored for Zavvi
    const allProductsZavvi = [
        'consoles-nintendo-switch/nintendo-switch-neon-red-blue/12749474.html',
        'nintendo-switch-lite-coral/12667100.html',
        'consoles-nintendo-switch/nintendo-switch-console-with-grey-joy-con/11396049.html',
        'gift-other/xbox-series-x-mini-fridge-uk-plug/13490218.html',
        'toys-games/pokemon-tcg-sword-shield-6-elite-trainer-box/12916529.html',
        'blu-ray/spider-man-1-3-4k-ultra-hd-includes-blu-ray/13436577.html'
    ]

    // A function for loop that loops through the allProductsZavvi array and logs the status of each product e.g. name, status of stock and price.
    const zavvi = () => {
        for (let i = 0; i < allProductsZavvi.length; i++) {
            getProductZavvi(allProductsZavvi[i]);
        }
    }
    /*These are the functions that allow you to see the web scraping in action.
    Once the web scraper is ran, both simply games and zavvi will web scrape the products.
    If you want to focus on one website web scraping, comment out the other function e.g. simplyGames(allproducts) then re-run the software.
    */
    zavvi(allProductsZavvi);
    simplyGames(allProducts);


module.exports = {
    getProductZavvi,
    zavvi
};

