// Import axios for requests module & cheerio for web scraping
import axios from 'axios';
import cheerio from 'cheerio';

// Getting the product url and replacing it with a product ID
const getProductUrlSimplyGames = (product_id) => `https://www.simplygames.com/p/${product_id}`;

// Function for getting the product ID information with the use of headers to allow us to act like a web browser & avoid bot detection.
async function getProductSimplyGames(product_id) {
    const productUrl = getProductUrlSimplyGames(product_id);
    const { data }= await axios.get(productUrl, {
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            Host: 'www.simplygames.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.55',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
        }
    });

    // Web scrapes for the product, stockStatus and price
    const $ = cheerio.load(data);
    const product = $('.product_content').children('h1').text();
    // If product is in stock it returns true, otherwise returns false
    const stockStatus = $('.in_stock').text().includes('In Stock');
    const price = $('.price_point').text();
    const productInfo = {
        'Product Name': product,
        'Stock Status': stockStatus,
        'Price': price,
    }
    // Prints product info variables needed for program to function
    console.log(productInfo);
}
    // An array of all products to be monitored
    const allProducts = [
        'xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s',
        'xbox-series-s-console-xbox-series-x',
        'ps5-console-ps4',
        'playstation5-digital-edition-ps5',
        'ps4-slim-500gb-console-ps4',
        'xbox-one-x-console-xbox-one',
        'xbox-one-s-console--1tb-hdd-xbox-one',
        'nintendo-switch-neon-redneon-blue-nintendo-switch',
        'nintendo-switch-lite-coral--animal-crossing-bundle-nintendo-switch'
    ]

    // A function for loop that loops through the allProducts array and logs the status of each product e.g. name, status of stock and price.
    const simplyGames = allProducts => {
    for (let i = 0; i < allProducts.length; i++) {
        getProductSimplyGames(allProducts[i]);
    }
}
    // To run the simplyGames function website
    // simplyGames(allProducts);

// -------------- ShopTo --------------


// Product url for ShopTo
const getProductUrlShopTo = (product_id) => `https://www.shopto.net/en/${product_id}`;

// Get product information using a function with the use of a product ID and using headers from the browser
async function getProductShopTo(product_id) {
    const productUrl = getProductUrlShopTo(product_id);
    const { data } = await axios.get(productUrl, {
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            Host: 'www.shopto.net',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en;q=0.5',
        }
    });

    // Web scraping with cheerio
    // Still scraping the product title for the ps5 on shopto
    const $ = cheerio.load(data);
    const product = $('.itemcard_item_name').children('span').text().trim();
    const productInfo = {
        'Product': product
    }




    console.log(productInfo);
};

    // products for shopTo to be monitored!


    getProductShopTo('ps5hw01-playstation-5-console-p191472/');






