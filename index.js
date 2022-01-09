// Import axios for requests module & cheerio for web scraping
import axios from 'axios';
import cheerio from "cheerio";
// Look at Google Notes - continue where I left from.
// https://www.simplygames.com/p/xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s
const getProductUrl = (product_id) => `https://www.simplygames.com/p/${product_id}`;

async function getProduct(product_id) {
    const productUrl = getProductUrl(product_id);
    const { data }= await axios.get(productUrl, {
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            Host: 'www.simplygames.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.55',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',

        },
    });
    console.log(data);
}

getProduct('xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s');


/*
// Sending a Get request to the URL - SimplyGames
const get_request = async () => {
    const response = await fetch(url,
        {headers});
    const body = await response.text();
    const $ = cheerio.load(body);
    const product = $('.product_content').children('h1').text();
    const stockStatus = $('.in_stock').text().trim();
    const price = $('.price_point').text();

    const productInfo = {
        "Product name": product,
        "Stock Status": stockStatus,
        "Price": price
    };


    console.log(productInfo);

};

// Runs the get_request function
get_request();
*/



// TODO
/*
First task to do

- Make it so each product prints out the following:
- Title
- Stockstatus aka true or false
- Price
- Image can be later for discord
Unit test regularly for each function

Do this for all products that I want monitor, may want to put it in an array
I can have an empty array which has all the products it wants to monitor // a file it
wants to read from
 */


