var quotes = [
  {
    quote: " Wait a minute. Wait a minute Doc, uh, are you telling me you built a time machine … out of a DeLorean?",
    source: "Marty McFly",
    citation: " ",
    year: " "
  },
  {
    quote: "Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain. ",
    source: "George McFly ",
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

function getRandomQuote() {
  let randomQuoteNum = Math.floor(Math.random() * quotes.length);

  return randomQuoteNum;
}
console.log(getRandomQuote());


function printQuote(){
  getRandomQuote()
  let html = "";
  html.textContent = "<p>" + JSON.stringify(quotes[getRandomQuote()].quote) + "</p>";

  return html;
};

console.log(quotes[getRandomQuote()]);
console.log(printQuote());

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

