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

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function randomNums(max, min){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(){
  
  let r = randomNums(150,210); 
  let g = randomNums(150,210); 
  let b = randomNums(140,200); 
  bodyElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    return bodyElement;
}
function getRandomQuote() {
  let randomQuote = quotes[randomNums(quotes.length, 0)];

  return randomQuote;
}
console.log(getRandomQuote())
console.log(getRandomQuote().tags);

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

  html += '</p>';

  outputDiv.innerHTML = html;
  randomColor();
  
  // let randomQuote = getRandomQuote()

return outputDiv;
}

function clickedButton(){
if (buttonClick){
  clearInterval(printQuote);
  setInterval(printQuote, 3000);
  console.log('Whupdeefuckingdoo')
  }
}

// window.addEventListener('load', clickedButton);
buttonClick.addEventListener('click', clickedButton);
quoteP.addEventListener('mouseover', () => {

  let toolTip = document.createElement('div');

  toolTip.className = "tooltip";
  toolTip.innerHTML = getRandomQuote().tags
  outputDiv.appendChild(toolTip);
});

function print() {
  
}
// Remember to delete the comments that came with this file, and replace them with your own code comments.