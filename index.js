// Import axios for requests module & cheerio for web scraping
import axios from 'axios';
import cheerio from "cheerio";
// https://www.simplygames.com/p/xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s

// Getting the product url and replacing it with a product ID
const getProductUrl = (product_id) => `https://www.simplygames.com/p/${product_id}`;

// Function for getting the product ID information with the use of headers to allow us to act like a web browser & avoid bot detection.
async function getProduct(product_id) {
    const productUrl = getProductUrl(product_id);
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
    console.log(productInfo);
}


getProduct('xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s');
//getProduct('ps5-console-ps4');

