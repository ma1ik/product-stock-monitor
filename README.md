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

## Focusing on one website to webscrape:


## Discord Interaction:

Join the discord server: https://discord.gg/9Qc2zP6rbS

To start the discord bot and allow it to come online, type in the terminal of your IDE `node interaction.js`. The bot will then log in. If the bot isn't logged in, then the interaction with the bot in Discord won't work.

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

