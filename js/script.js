var quotes = [
  {
    quote: "Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine … out of a DeLorean?",
    character: "Marty McFly",
    citation: "Back to the Future",
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
    character: "Back to the Future",
    citation: "",
    year: ""
  },
  {
    quote: "Why don’t you make like a tree and get outta here?",
    character: "Biff Tannen",
    citation: "Back To The Future Part 2",
    year: ""
  },
  {
    quote: "I guess you guys aren’t ready for that yet. but your kids are gonna love it.",
    character: "Marty McFly",
    citation: "",
    year: ""
  },
  {
    quote: "Roads? where we’re going, we don’t need roads.",
    character: "Dr. Emmett Brown",
    citation: "Dr. Emmett Brown",
    year: 2015
  },
  {
    quote: "I'm sure in 1985 plutonium is in every corner drug store, but in 1955, its a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
    character: "Dr. Emmett Brown",
    citation: "Back to the Future",
    year: ""
  },
  {
    quote: "Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
    character: "Dr. Emmett Brown",
    citation: "Back to the Future",
    year: ""
  },
  {
    quote: "If you put your mind to it you can accomplish anything.",
    character: "Dr. Emmett Brown",
    citation: "Back to the Future",
    year: ""
  },
];

function getRandomQuote() {
  function randomQuoteNum() {
    randomNumber =  Math.floor(Math.random() * quotes.length);
    return randomNumber;
  }
  
  randomNumber = randomQuoteNum();
  
  let html = '';
  html += '<p class="quote">Quote: ' + quotes[randomNumber].quote + '</p>';
  html +='<p class="source">Character: ' + quotes[randomNumber].character + '</p>';
  html += '<p class="citation">Citation: ' + quotes[randomNumber].citation + '</p>';
  
  
  if (quotes[randomNumber].year) {
    html += '<p class="year">Year: ' + quotes[randomNumber].year + '</p>'}
  else {
    html += '<p class="year">Year: Some Time Back to the Future!</p>';
  }

  return html;
}
console.log(getRandomQuote());

function printQuote(){

  var outputDiv = document.querySelector('.quote');
  outputDiv.innerHTML = getRandomQuote();

};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

