/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/

//quotes variable declaration
var quotes = [
  { quote: "The expedient path may be fast and simple. That doesn’t make it the right path.",
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
    citation: "Bible",
    year: null,
    category: "Faith"
}];


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
