//const fs = require('fs')
//fs.readFile('quotes.txt', (err,quotesRaw) => {
//  if (err) throw err;
//});
//var quotesRaw = quotesRaw.toString();
//var quotes = quotesRaw.split(/\r?\n/);

let quotes = [
  "Quoth the Raven “Nevermore.”\n—Edgar Allen Poe, 1845",
  "These are the times that try men's souls…yet we have this consolation with us, that the harder the conflict, the more glorious the triumph.\n—Thomas Paine, 1776",
  "In the midst of chaos, there is also opportunity.\n—Sun Tzu, 5th century BC",
  "The question is not what you look at, but what you see.\n—Henry David Thoreau, 1851",
  "It is not enough to be industrious; so are the ants. What are you industrious about?\n—Henry David Thoreau, 1857",
  "Life, liberty, and property do not exist because men have made laws. On the contrary, it was the fact that life, liberty, and property existed beforehand that caused men to make laws in the first place.\n—Frederic Bastiat, 1850",
  "By this art you may contemplate the variation of the 23 letters.\n—Robert Burton, 1621",
  "NUTS!\n—Brig. Gen. Anthony McAuliffe, 1944",
  "Knowledge itself is power.\n—Sir Francis Bacon, 1597",
  "Eternal vigilance is the price of an open mind.\n—Henry Hazlitt, 1916",
  "Still I hope I shall always possess firmness and virtue enough to maintain (what I consider the most enviable of all titles) the character of an honest man.\n—George Washington, 1788"
];
let numQuotes = quotes.length;
let index = Math.floor(Math.random() * numQuotes);
let quote = quotes[index];
let quoteElement = document.getElementById("quote");
quoteElement.innerHTML = quote;
