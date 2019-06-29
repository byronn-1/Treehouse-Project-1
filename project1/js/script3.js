// query selectors for selecting HTML elements
let quoteBox= document.getElementById("quote-box");
let citationHtml = document.querySelector("span.citation");
let tagsHtml = document.querySelector(".tags");
let yearHtml = quoteBox.querySelector(".year");
let colorElement = document.getElementsByTagName("BODY")[0];
var nIntervId;


// an array of quote objects
var quotes = [
  {
    quote: "Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine… out of a DeLorean?",
    character: "Marty McFly",
    citation: "Back To The Future",
    year: 1985,
    filmtime: [1.50,],
    tags: ["humor"]
  },
  {
    quote: "Jeasus Christ, Doc! You disintegrated Einstein",
    character: "Marty McFly",
    citation: "Back To The Future",
    year: 1985,
    tags: ["humor"]
  },
  {
    quote: "Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain. ",
    character: "George McFly ",
    citation: "Back To The Future Part 2",
    year: 2002,
    tags: ["humor", " crazy"]
  },
  {
    quote: "Nobody calls me chicken!",
    character: "Marty McFly",
    citation: "",
    year: "",
    filmtime: ["1.20", "48.20", "1,10.30" ],
    tags: ["bravery"]
  },
  {
    quote: "Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future Part 2",
    year: "",
    tags: ["sexist", " out of date"]
  },
  {
    quote: "If my calculations are correct, when this baby hits 88 miles per hour, you're gonna see some serious s***.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: ""
  },
  {
    quote: "Why don’t you make like a tree and get outta here?",
    character: "Biff Tannen",
    citation: "Back To The Future Part 2",
    year: ""
  },
  {
    quote: "I guess you guys aren’t ready for that yet but your kids are gonna love it.",
    character: "Marty McFly",
    citation: "",
    year: ""
  },
  {
    quote: "Roads? where we’re going, we don’t need roads.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: 2015,
    tags: ["brilliant"]
  },
  {
    quote: "I'm sure in 1985 plutonium is in every corner drug store, but in 1955, it's a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: ""
  },
  {
    quote: "Einstein has just become the worlds first time traveler. I sent him into the future.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: 1985
  },
  {
    quote: "Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: "",
    tags: ["out of date", " humor"]
  },
  {
    quote: "If you put your mind to it you can accomplish anything.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: "",
    tags: ["inspirational"]
  },
];

// we could introduce a set interval that when you hover on the quote it gives a pop up of when it was said in the film

// getRandomQuote function creates a random number and uses it to select an object from the array of objects.


function getRandomQuote(rand) {

  function randomQuoteNum() {
    randomNumber =  Math.floor(Math.random() * quotes.length);
    return randomNumber;
  }

    let html = "";
    let bracketsBefore = "[";
    let bracketsAfter = "]";
    let quotePlusNum = quotes[randomQuoteNum()];
    let quotesObj = quotePlusNum.quote;
    let quoteLit = quotePlusNum.quote
    let characterLit = quotePlusNum.character;
    let citationLit = quotePlusNum.citation;
    let yearLit = quotePlusNum.year;
    let tagsArray = bracketsBefore + quotePlusNum.tags + bracketsAfter;
    let filmTimeArray = quotePlusNum.filmtime;


    quoteBox.querySelector('p.quote').innerHTML = quotesObj.toString();

      if (!quotePlusNum.citation) {
        citationHtml.style.display = "none";
      }
      if (!yearLit) {
      yearLit = `Some Time Back to the Future!`;
      }
      if (quotePlusNum.tags === undefined) {
        tagsArray.style.display = "none"
      }

      html += `<p class="quote"> ${quoteLit} </p><p class="character"> ${characterLit} <span class="citation"> ${citationLit} </span><span class="year"> ${yearLit}</span><span class="tags">${tagsArray}</span></p>`;


    // document.querySelector('.quote').addEventListener("mouseover",);

    return html
} 

// numberForColor() is a random number generator that then supplies randomColor()
function numberForColor(max, min){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// randomColor() takes a randomly generated number that is between the range given in the arguments and passes it into the body tags style property in an rgb format (so the colours dont jump like crazy)
function randomColor(){
  
    let r = numberForColor(150,210); 
    let g = numberForColor(150,210); 
    let b = numberForColor(140,200); 
    colorElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      return colorElement;
}
function changeColor() {
  nIntervId = setInterval(changeBackgroundAndQuote, 7500);
}

function changeBackgroundAndQuote(){
  colorElement.style.backgroundColor = randomColor();
  printQuote();
}


function printQuote(){
  const outputDiv = document.querySelector('#quote-box');

  randomColor();
  outputDiv.innerHTML = getRandomQuote(quotes);
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

