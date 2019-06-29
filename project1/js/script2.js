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
    citation: "BACK TO THE FUTURE PART 2",
    year: "2002"
  },
  {
    quote: "Nobody calls me chicken!",
    source: "Marty McFly",
    citation: "www.rottentomatoes.com",
    year: " "
  },
  {
    quote: "Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!",
    source: "Dr. Emmett Brown",
    citation: "www.rottentomatoes.com",
    year: " "
  },
  {
    quote: "IF MY CALCULATIONS ARE CORRECT, WHEN THIS BABY HITS 88 MILES PER HOUR, YOU'RE GONNA SEE SOME SERIOUS S***.",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: "WHY DON’T YOU MAKE LIKE A TREE AND GET OUTTA HERE?",
    source: "Biff Tannen",
    citation: " ",
    year: " "
  },
  {
    quote: "I GUESS YOU GUYS AREN’T READY FOR THAT YET. BUT YOUR KIDS ARE GONNA LOVE IT.",
    source: "Marty McFly",
    citation: " ",
    year: " "
  },
  {
    quote: "ROADS? WHERE WE’RE GOING, WE DON’T NEED ROADS.",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: "I'm sure in 1985 plutonium is in every corner drug store, but in 1955, its a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: "Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
    source: " ",
    citation: " ",
    year: " "
  },
  {
    quote: "If you put your mind to it you can accomplish anything.",
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
  let html = "";

  let quoteContainer = document.getElementById('quote-box')
  let quoteInput = document.createElement('p');
  
  quoteInput.innerHTML = quotes[getRandomQuote()].toString();
  quoteContainer.appendChild(quoteInput);
  return quoteContainer;
};

console.log(quotes[getRandomQuote()]);
console.log(printQuote());

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

