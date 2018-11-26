// A Random Quote Generator

/***********************global variable declarations***************************/
var quotes = [
  { quote: "The expedient path may be fast and simple. That doesn’t make it the right path.",
    source: "Samara",
    citation: "Mass Effect 2",
    year: 2010,
    category: "Video Games"
  },
  { quote: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    source: "F. Scott Fitzgerald",
    citation: "The Great Gatsby",
    year: 1925,
    category: "Literature"
  },
  { quote: "Real things in the darkness seem no realer than dreams.",
    source: "Murasaki Shikibu",
    citation: "The Tale of Genji",
    year: null,
    category: "Literature"
  },
  { quote: "To see a world in a grain of sand. And a heaven in a wild flower, Hold infinity in the palm of your hand. And eternity in an hour.",
    source: "William Blake",
    citation: "Auguries of Innocence",
    year: 1863,
    category: "Literature"
  },
  { quote: "The successful warrior is the average man, with laser-like focus.",
    source: "Bruce Lee",
    citation: null,
    year: null,
    category: "Inspiration"
  },
  { quote: "What we do in life echoes in eternity.",
    source: "Maximus",
    citation: "Gladiator",
    year: 2000,
    category: "Movies"
  },
  { quote: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    source: "1 Corinthians 13:13",
    citation: "The Bible",
    year: null,
    category: "Faith"
}];

/*************************function declarations****************************/

//Generate a random nunber 0-255
function getRandomRGBNumber () {
  return Math.floor(Math.random() * 256);
}

//Generate a random RGB color
function getRandomRGBColor () {
  var color = "rgb("

  color += getRandomRGBNumber() + ", ";
  color += getRandomRGBNumber() + ", ";
  color += getRandomRGBNumber() +")";

  return color;
}

//Generate a random quote from the quotes array then display it on screen.  Also, change the background color of the body
function getRandomQuote () {
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

//Display a random quote on screen
function printQuote() {
  //retrieve random quote object from quotes array
  var randomQuote = getRandomQuote();
  //begin buidling html string
  var html = "<p class=\"quote\">";

  //continue building HTML string
  html += randomQuote.quote + "</p>";
  html += "<p class=\"source\">" + randomQuote.source;

  //use conditionals to revent null properties from displaying on screen
  if(randomQuote.citation !== null && randomQuote.citation !== undefined){
    html += "<span class=\"citation\">" + randomQuote.citation + "</span>";
  }
  if(randomQuote.year !== null && randomQuote.year !== undefined){
    html += "<span class=\"year\">" + randomQuote.year +"</span>";
  }
  if(randomQuote.category !== null && randomQuote.category !== undefined) {
    html += "<p class=\"category\">" + randomQuote.category + "</p>";
  }

  html += "</p>";

  //replace innerHTML of div with id "quote-box"
  document.getElementById('quote-box').innerHTML = html;
  //change background color of html body
  document.querySelector('body').style.background = getRandomRGBColor();

}

/***************************execute program**********************************/

//generate new quote when "show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//new quote will appear automatically after 20000 miliseconds
window.setInterval(printQuote,20000);
