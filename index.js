// Import the fetch api for node & cheerio to use for web scraping
import fetch, {Headers} from 'node-fetch';
import cheerio from "cheerio";

// Added the header for the Edge browser
const meta = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62',
};
const headers = new Headers(meta);

// Sending a Get request to the URL - SimplyGames
const get_request = async () => {
    const response = await fetch('https://www.simplygames.com/p/xbox-series-s-fortnite-and-rocket-league-bundle-xbox-series-x--s',
        {headers});
    const body = await response.text();
    const $ = cheerio.load(body);
    const product = $('.product_content');
    const output = product.children('h1').text();
    console.log(output);

};
// Runs the get_request function
get_request();


