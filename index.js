// Import the fetch api for node & cheerio to use for web scraping
import fetch, {Headers} from 'node-fetch';
import cheerio from "cheerio";

// Added the header for the Edge browser
const meta = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
};
const headers = new Headers(meta);
const url = 'https://www.simplygames.com/p/xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s'

// Sending a Get request to the URL - SimplyGames
const get_request = async () => {
    const response = await fetch(url,
        {headers});
    const body = await response.text();
    const $ = cheerio.load(body);
    const product = $('.product_content').children('h1').text();
    const stockStatus = $('.in_stock');
    const price = $('.price_point');

    const output = [product];


    console.log(output);

};
// Runs the get_request function
get_request();

// TODO
/*
First task to do

- Make it so each product prints out the following:
- Title
- Stockstatus aka true or false
- Price
- Image can be later for discord

Do this for all products that I want monitor, may want to put it in an array
 */

