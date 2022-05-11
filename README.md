## product-stock-monitor

Honours Project 2021 for Uni Year 4

It currently web scrapes two websites:

- SimplyGames
- Zavvi

It tracks multiple products such as Xbox Series S, PS5 and some nintendo switches and games.

Some products show out of stock as false and products as in stock as true.

# Running the software [guide]

## Run the web scraper:

To run the web scraper, in the terminal of your IDE type `node index.js` and this will start scraping all the products for the web scraper.

## Adding a product to webscrape:

To add further products to webscrape, put the product ID of the product you want to web scrape.

Simply Games:
Use the allProducts array and put the product ID in there.

Zavvi:
Use the allProductsZavvi array and put the product ID in there.

### An Example on how to add the product ID for any product on Zavvi:
In this example I'll be using blu-ray spiderman film.

Copy the part after the / so e.g. blu-ray/spider-man-1-3-4k-ultra-hd-includes-blu-ray/13436577.html
![image](https://user-images.githubusercontent.com/23563378/167905134-01894d8d-9475-4765-9512-786f4ca5b49b.png)

Go to the allProductsZavvi array and paste it in between the quotation marks as shown below.
![image](https://user-images.githubusercontent.com/23563378/167905481-37deaba6-cba8-4cc8-b115-b97a882f37f5.png)

Then, run the web scraper and you've managed to webscrape the spiderman blu-ray film.
![image](https://user-images.githubusercontent.com/23563378/167906301-0f481d9c-7412-4957-8ae9-7d69ccba0b9d.png)



## Focusing on one website to webscrape:


## Discord Interaction:

Join the discord server: https://discord.gg/9Qc2zP6rbS

To start the discord bot and allow it to come online, type in the terminal of your IDE `node interaction.js`. The bot will then log in. If the bot isn't logged in, then the interaction with the bot in Discord won't work. It should appear on the right hand side of discord that the bot is online.

![image](https://user-images.githubusercontent.com/23563378/167906600-9bc724ca-0119-4c92-a3d5-ad36df7c64e8.png)


![image](https://user-images.githubusercontent.com/23563378/167906814-3b86b118-f97f-4627-9591-5a13b6a5a072.png)



Use the discord server link to join the server. Then within the #general chat, here you will be able to communicate with the discord bot. To get started you can type the following command to track stock, make you it’s copied exactly as shown below

- I would like to track stock

Select one of the options below, which item you want to track and message it to the box:

- nintendo switch grey
- nintendo switch red blue
- nintendo switch lite
- xbox mini fridge
- pokemon elite trainer box

**The interaction chat is not finished, so the bot won't display the tracked item. But you can still test the interaction messages with the bot.**

### You may notice:
When you run the `interaction.js` file, in the terminal of the IDE, the web scraper will output the web scraped products. Don't worry about this, the reason why this happens is because I've exported the index.js file into the interaction file and haven't finished the interaction code, so the function for the webscraper outputs the code.

