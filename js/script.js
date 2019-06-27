var quoteBox= document.getElementById("quote-box");
let citationHtml = document.querySelector("span.citation");
let yearHtml = quoteBox.querySelector(".year");

var quotes = [
  {
    quote: "Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine… out of a DeLorean?",
    character: "Marty McFly",
    citation: "Back To The Future",
    year: 1985
  },
  {
    quote: "Jeasus Christ, Doc! You disintegrated Einstein",
    character: "Marty McFly",
    citation: "Back To The Future",
    year: 1985
  },
  {
    quote: "Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain. ",
    character: "George McFly ",
    citation: "Back To The Future Part 2",
    year: 2002
  },
  {
    quote: "Nobody calls me chicken!",
    character: "Marty McFly",
    citation: "",
    year: ""
  },
  {
    quote: "Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future Part 2",
    year: ""
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
    year: 2015
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
    year: ""
  },
  {
    quote: "If you put your mind to it you can accomplish anything.",
    character: "Dr. Emmett Brown",
    citation: "Back To The Future",
    year: ""
  },
];

function getRandomQuote() {

  function randomQuoteNum() {
    randomNumber =  Math.floor(Math.random() * quotes.length);
    return randomNumber;
  }

    let html = "";
    let quotePlusNum = quotes[randomQuoteNum()];
    let quotesObj = quotePlusNum.quote;
    let quoteLit = quotePlusNum.quote
    let characterLit = quotePlusNum.character;
    let citationLit = quotePlusNum.citation;
    let yearLit = quotePlusNum.year;

    quoteBox.querySelector('p.quote').innerHTML = quotesObj.toString();
    if (!citationLit) {
        citationHtml.style.display = "none";
    }
    if (!yearLit) {
      yearLit = `Some Time Back to the Future!`;
      }

      html += `<p class="quote"> ${quoteLit} </p><p class="character"> ${characterLit} <span class="citation"> ${citationLit} </span><span class="year"> ${yearLit} </span></p>`

    return html
} 

function numberForColor(){
  return Math.floor(Math.random() * 256);
}

function randomColor(){
  let colorElement = document.getElementsByTagName("BODY")[0];
    let r = numberForColor(); 
    let g = numberForColor(); 
    let b = numberForColor(); 
    colorElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      return colorElement;
}

function printQuote(){
  const outputDiv = document.querySelector('#quote-box');

  randomColor();
  outputDiv.innerHTML = getRandomQuote();
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

