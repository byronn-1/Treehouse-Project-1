/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
//Project- Build a random quote generator 

//needs more properties


// Idea- starwars quote generator with- movie, time in movie, darkside or empire maybe even a href to a clip. 
var quotes =[
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: " ",
    source: " ",
    citation: " ",
    year: " "
  },
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
  // so this is an array of objects meaning that each object will have a numerical value starting from 0
 function getRandomQuote(quotes) {
  
  function getRndInteger(  ) {
    let numberOfQuotes = quotes.length;
    let randQ = Math.floor(Math.random() * numberOfQuotes) ;
    return randQ;
  }

  randomQuote = quotes.randQ
  // or RandomQuote = quotes[randQ + 1];
  // or RandomQuote = quotes[randQ];
  return randomQuote
}



//     for (var i = 0; i < quotes.length; i += 1) {
//       quote = quotes[i]; }

//     return quote;
//  }


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(message, randomQuote, quotes ){
  let html = '';
  let htmlPlusQuote = html + randomQuote;
  var outputDiv = document.getElementById('quote-box');
  
  outputDiv.innerHTML = message;
  if (quotes.citation == true ) {
    htmlPlusQuote + quotes.citation
  } 
  if(quotes.year == true) {
    htmlPlusQuote + quotes.year
  }
}

// random background color, Auto refresh, more properties

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.