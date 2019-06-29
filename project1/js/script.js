// query selectors for selecting HTML elements
let quoteBox= document.getElementById("quote-box");
let citationHtml = document.querySelector("span.citation");
let tagsHtml = document.querySelector(".tags");
let yearHtml = quoteBox.querySelector(".year");
let bodyElement = document.getElementsByTagName("BODY")[0];



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
    quote: "Jesus Christ, Doc! You disintegrated Einstein",
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
    year: "",
    tags: []
  },
  {
    quote: "Why don’t you make like a tree and get outta here?",
    character: "Biff Tannen",
    citation: "Back To The Future Part 2",
    year: "",
    tags: []
  },
  {
    quote: "I guess you guys aren’t ready for that yet but your kids are gonna love it.",
    character: "Marty McFly",
    citation: "",
    year: "",
    tags: []
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
    year: "",
    tags: []
  },
  {
    quote: "Einstein has just become the worlds first time traveler. I sent him into the future.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: 1985,
    tags: []
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

/*
functions list---
    randomNums - creates random nums
    getRandomQuote - uses randomNums to get random quote from the array
    randomColor - uses randomNums to create rgb() and adds it to the style.prop
    changeColor - set interval timer to change background
    changeBackGroundAndQuote
    printQuote
*/

// randomNums() is a random number generator that generates a number between the the given numbers in the arguments 
function randomNums(max, min){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomQuote(q) {

    let html = "";
    let bracketsBefore = "[";
    let bracketsAfter = "]";
    let quotePlusNum = quotes[randomNums(quotes.length, 0)];
    let tagsArray = "";
    let newTags = "";

  console.log(tagsArray)
    quoteBox.querySelector('p.quote').innerHTML = quotePlusNum.quote.toString();

      if (!quotePlusNum.citation) {
        citationHtml.style.display = "none";
      }
      if (!quotePlusNum.year) {
        quotePlusNum.year = `Some Time Back to the Future!`;
      }
      //(!quotePlusNum.tags) || (quotePlusNum.tags === null) 
      // if (typeof(quotePlusNum.tags) !== undefined ) {
      //   tagsArray.innerHTML = "";
        
      // } else {
      //   tagsArray +=  bracketsBefore + quotePlusNum.tags[0] + bracketsAfter;
      // }
      if (quotePlusNum.tags !== null) {
        quotePlusNum.tags =  bracketsBefore + quotePlusNum.tags + bracketsAfter;
      } else {
        document.getElementsByClassName('.tags').textContent = "twat" ;
      }
      html += `<p class="quote"> ${quotePlusNum.quote} </p><p class="character"> ${quotePlusNum.character} <span class="citation"> ${quotePlusNum.citation} </span><span class="year"> ${quotePlusNum.year}</span><span class="tags">${quotePlusNum.tags}</span></p>`;


    // document.querySelector('.quote').addEventListener("mouseover",);

    return html
} 

// randomColor() takes a randomly generated number that is between the range given in the arguments and passes it into the body tags style property in an rgb format (so the colours dont jump like crazy)
function randomColor(){
  
    let r = randomNums(150,210); 
    let g = randomNums(150,210); 
    let b = randomNums(140,200); 
    bodyElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      return bodyElement;
}

function loadSetInt(){
if (window.load){
  setInt();
  console.log(hey);
} else {
  clearInterval(setInt());
  setInt();
  }
}
  
function setInt() {
  setInterval(changeBackgroundAndQuote, 7500);
}

function changeBackgroundAndQuote(){
  bodyElement.style.backgroundColor = randomColor();
  printQuote();
}

function printQuote(){
  const outputDiv = document.querySelector('#quote-box');

  randomColor();
  outputDiv.innerHTML = getRandomQuote(quotes);
}

window.addEventListener("load", loadSetInt, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

