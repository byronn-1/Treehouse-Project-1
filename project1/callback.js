function sayHello () {
  console.log('hello');
}

function executeCallback(callback) {
  callback();
}

executeCallback(sayHello);

/*ANONYMOUS fUNCTIONS*/

function executeCallback(callback) {
  callback();
}

executeCallback(function () {
  console.log('hello');
});

executeCallback(function () {
  console.log('goodbye');
});

/*ANONYMOUS fUNCTIONS TO ARROW FUNCTIONS*/

executeCallback((callback) => {
  callback();
});

executeCallback(function () {
  console.log('hello');
});

executeCallback(() => {
  console.log('goodbye');
});
