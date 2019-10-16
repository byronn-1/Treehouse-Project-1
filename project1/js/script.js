

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
    filmtime:["1.20", "48.20", "10.30" ],
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


console.log(Object.keys(quotes));
const outputDiv = document.querySelector('#quote-box');
const quoteP = document.querySelector('.quote');
const buttonClick = document.getElementById('loadQuote');
const bodyElement = document.getElementsByTagName("BODY")[0];

function randomNums(max, min){
  return Math.floor(Math.random()*(max-min)+min);}

function randomColor(){
  let r = randomNums(150,210); 
  let g = randomNums(150,210); 
  let b = randomNums(140,200); 
  bodyElement.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    return bodyElement;}

function printQuote(){

  function getRandomQuote() {
    let randomQuote = quotes[randomNums(quotes.length, 0)];
    return randomQuote;}

  let randomQuoteObj = getRandomQuote();
  
  randomColor();


    html = '';
      if(randomQuoteObj.quote){
        html += '<p class="quote">' + randomQuoteObj.quote + '</p>';
      }
      if(randomQuoteObj.character ){
        html += '<p class="source">' + randomQuoteObj.character;
      }
      if(randomQuoteObj.citation) {
          html += '<span class="citation">' + randomQuoteObj.citation + '</span>';
      }
      if(randomQuoteObj.year) {
          html += '<span class="year">' + randomQuoteObj.year + '</span>'
      } else {
          html += '<span class="year">Some Time Back to the Future!</span>';
      }
      html += '</p>';
  
 outputDiv.innerHTML = html;

  var quotee = {
    toPrint: html,
    tag: randomQuoteObj.tags
  }

  console.log(quotee);
return quotee;}



function tagsMouseOver(){
  let tagsJson = printQuote().quotee.toPrint;
  let toolTip = document.createElement('div');
  
  toolTip.className = "tooltip";
  toolTip.innerHTML = tagsJson.tag;
  outputDiv.appendChild(toolTip);
  console.log("jeaseuuus");
  console.log(toolTip);
}

var interval = setInterval(printQuote, 5000);

function clickedButton(){
  clearInterval(interval);
  printQuote();
  startInterval();
  
  console.log("you clicked the button");
}

function startInterval(){
  return interval = setInterval(printQuote, 5000);
}

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(t)
}
buttonClick.addEventListener('click', clickedButton);

quoteP.addEventListener('mouseover', tagsMouseOver);

function print() {
 printQuote()

  return 
}

