window.addEventListener('load', printQuote,);


function quoteTimer(){
  try {
    if (event.triger == buttonClick){
    clearInterval(printQuote)
    setInterval(printQuote, 1000)
  } 
} catch {
    if (event.triger == buttonClick){
    setInterval(printQuote, 1000)
    } 
  }
}


function startTimer(func, time, setInterval){
  setInterval(func, time);
}

function stopTimer(func, clearInterval){
  clearInterval(func);
}

