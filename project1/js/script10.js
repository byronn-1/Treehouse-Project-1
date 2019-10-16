/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************

/** 
An array of objects that contains quotes from the back to the future films, the character who said the quote, the film in which the character said the quote, year in which the quote was said (real or year in the film!), and tags that are activated on mouse over.
**/
var quotes = [
  {
    quote:"Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine… out of a DeLorean?",
    character:"Marty McFly",
    citation:"Back To The Future",
    year:1985,
    filmtime:[1.50,],
    tags: ["humor"]
  },
  {
    quote:"Doc! You disintegrated Einstein",
    character: "Marty McFly",
    citation: "Back To The Future",
    year:1985,
    tags:["humor"]
  },
  {
    quote:"Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain.",
    character: "George McFly ",
    citation: "Back To The Future Part 2",
    year:2002,
    tags:["humor", " crazy"]
  },
  {
    quote:"Nobody calls me chicken!",
    character:"Marty McFly",
    citation: "",
    year:"",
    filmtime:["1.20", "48.20", "1,10.30" ],
    tags:["bravery"]
  },
  {
    quote:"If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious s***.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:[]
  },
  {
    quote:"Why don’t you make like a tree and get outta here?",
    character:"Biff Tannen",
    citation:"Back To The Future Part 2",
    year:"",
    tags:[]
  },
  {
    quote:"I guess you guys aren’t ready for that yet but your kids are gonna love it.",
    character:"Marty McFly",
    citation:"",
    year:"",
    tags:[]
  },
  {
    quote:"Roads? Where we’re going, we don’t need roads.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:2015,
    tags:["brilliant"]
  },
  {
    quote:"I'm sure in 1985 plutonium is in every corner drug store, but in 1955, it's a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:[]
  },
  {
    quote:"Einstein has just become the worlds first time traveler. I sent him into the future.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:1985,
    tags:[]
  },
  {
    quote:"Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:["out of date", " humor"]
  },
  {
    quote:"If you put your mind to it you can accomplish anything.",
    character:"Dr. Emmett Brown",
    citation:"Back To The Future",
    year:"",
    tags:["inspirational"]
  },
];

const outputDiv = document.querySelector('#quote-box');
const quoteP = document.querySelector('.quote');
const buttonClick = document.getElementById('loadQuote');
const bodyElement = document.getElementsByTagName("BODY")[0];


// randomNums function creates a random number between two values
function randomNums(max, min){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// randomColor function creates a random rgb value within a certain colour range this range is aided by the randomNums function
function randomColor(){
  
  let r = randomNums(150,210); 
  let g = randomNums(150,210); 
  let b = randomNums(140,200); 
  bodyElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    return bodyElement;
}

// getRandomQuote function uses the randomNums function to get a random quote from the quotes object |||******* off by one ERROR needs sorting********|||
function getRandomQuote() {
  let randomQuote = quotes[randomNums(quotes.length, 0)];

  return randomQuote;
}
console.log(getRandomQuote())


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

function printQuote(){
  let randomQuoteObj = getRandomQuote();

  html = '';

    html += '<p class="quote">' + randomQuoteObj.quote + '</p>';
    html += '<p class="source">' + randomQuoteObj.character;
      if(randomQuoteObj.citation) {
          html += '<span class="citation">' + randomQuoteObj.citation + '</span>';
      }
      if(randomQuoteObj.year) {
          html += '<span class="year">' + randomQuoteObj.year + '</span>'
      } else {
          html += '<span class="year">Some Time Back to the Future!</span>';
      }

      html += '</p>';

      /*
      const tooltipVar document.getElement(tooltip);
      if(randomQuoteObj.tags) {
        tooltipVar.attribute = randomQuoteObj.tags;
      }

      OR 

      return var quote = {
        toPrint: html,
        tags: randomQuoteObj.tags
      }
      */

  outputDiv.innerHTML = html;
  randomColor();
  var quotee = {
    toPrint: html,
    tags: randomQuoteObj.tags
  }
  // let randomQuote = getRandomQuote()

return quotee;
}
 console.log(printQuote())

function clickedButton(){
  clearInterval(printQuote);
  startInterval();
}

function startInterval(){
  setInterval(printQuote, 5000);
}

// var myVar = setInterval(myTimer, 1000);

// setInterval(function(){ alert("Hello"); }, 3000);

// starts off quote generator from window load
window.addEventListener('load',startInterval);

// event listener for button click 
buttonClick.addEventListener('click', clickedButton);

// mouseover event listener to show tags
quoteP.addEventListener('mouseover', () => {

  let toolTip = document.createElement('div');

  toolTip.className = "tooltip";
  toolTip.innerHTML = getRandomQuote().tags
  outputDiv.appendChild(toolTip);
  console.log("jeaseuuus")
});

function print() {
 printQuote()
}

/*
  fix off buy one ERROR in the getRandomQuote function
  fix mouseover 
        God only knows the problem here
  fix clickedButton function 
      clear interval and setinterval timer(possibly put it into a variable)
      {seperated them into two functions}
 */
