// Constants
const quoteElement = document.getElementById("quote");
const quotes = [
  "Quoth the Raven “Nevermore.”\n—Edgar Allen Poe, 1845",
  "These are the times that try men's souls…yet we have this consolation with us, that the harder the conflict, the more glorious the triumph.\n—Thomas Paine, 1776",
  "In the midst of chaos, there is also opportunity.\n—Sun Tzu, 5th century BC",
  "The question is not what you look at, but what you see.\n—Henry David Thoreau, 1851",
  "It is not enough to be industrious; so are the ants. What are you industrious about?\n—Henry David Thoreau, 1857",
  "Life, liberty, and property do not exist because men have made laws. On the contrary, it was the fact that life, liberty, and property existed beforehand that caused men to make laws in the first place.\n—Fr&#233d&#233ric Bastiat, 1850",
  "By this art you may contemplate the variation of the 23 letters.\n—Robert Burton, 1621",
  "NUTS!\n—Brig. Gen. Anthony McAuliffe, 1944",
  "Knowledge itself is power.\n—Sir Francis Bacon, 1597",
  "Eternal vigilance is the price of an open mind.\n—Henry Hazlitt, 1916",
  "Still I hope I shall always possess firmness and virtue enough to maintain (what I consider the most enviable of all titles) the character of an honest man.\n—George Washington, 1788",
  "Nothing beside remains. Round the decay\nOf that colossal Wreck, boundless and bare\nThe lone and level sands stretch far away.\n—Percy Shelley, 1818",
  "The woods are lovely, dark and deep,\nBut I have promises to keep,\nAnd miles to go before I sleep,\nAnd miles to go before I sleep.\n—Robert Frost, 1923",
  "The awful daring of a moment's surrender\nWhich an age of prudence can never retract\nBy this, and this only, we have existed\n—T. S. Eliot, 1922"
];
const numQuotes = quotes.length;

// Functions
function quoteIndex() {
  return Math.floor(Math.random() * numQuotes);
}

function updateQuote() {
  quoteElement.innerHTML = quotes[quoteIndex()];
}

// Quote
updateQuote(); // initialize quote