/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//adds images to all die
const d6 = document.querySelector('#d6-roll');
d6.src = "images/start/d6.png";

const d6One = document.querySelector('#double-d6-roll-1');
d6One.src = "images/start/d6.png";

const d6Two = document.querySelector('#double-d6-roll-2');
d6Two.src = "images/start/d6.png";

const d12 = document.querySelector('#d12-roll');
d12.src = "images/start/d12.jpeg"

const d20 = document.querySelector('#d20-roll');
d20.src = "images/start/d20.jpg"

/*******************
 * EVENT LISTENERS *
 *******************/

//adds click event that will change single 6-side die to a number 1-6
d6.addEventListener('click', function (){
  let number = getRandomNumber(6);
  if (number === 1) {
    d6.src = 'images/d6/1.png'
  } else if (number === 2) {
    d6.src = 'images/d6/2.png'
  } else if (number === 3) {
    d6.src = 'images/d6/3.png'
  } else if (number === 4) {
    d6.src = 'images/d6/4.png'
  } else if (number === 5) {
    d6.src = 'images/d6/5.png'
  } else if (number === 6) {
    d6.src = 'images/d6/6.png'
  }
}) 

//declares two dies as one variable
const doubleDie = document.querySelectorAll('#double-d6-buttons')
//adds click event that will change each 6-side die to a number 1-6 separate of what each die returns
doubleDie.forEach(item => {
  item.addEventListener('click', event => {
    let number = getRandomNumber(6);
  let number2 = getRandomNumber(6);
  if (number === 1) {
    d6One.src = 'images/d6/1.png'
  } else if (number === 2) {
    d6One.src = 'images/d6/2.png'
  } else if (number === 3) {
    d6One.src = 'images/d6/3.png'
  } else if (number === 4) {
    d6One.src = 'images/d6/4.png'
  } else if (number === 5) {
    d6One.src = 'images/d6/5.png'
  } else if (number === 6) {
    d6One.src = 'images/d6/6.png'
  }

  if (number2 === 1) {
    d6Two.src = 'images/d6/1.png'
  } else if (number2 === 2) {
    d6Two.src = 'images/d6/2.png'
  } else if (number2 === 3) {
    d6Two.src = 'images/d6/3.png'
  } else if (number2 === 4) {
    d6Two.src = 'images/d6/4.png'
  } else if (number2 === 5) {
    d6Two.src = 'images/d6/5.png'
  } else if (number2 === 6) {
    d6Two.src = 'images/d6/6.png'
  }
  })
})


d12.addEventListener('click', function(){
  let number = getRandomNumber(12);
  if (number === 1) {
    d12.src = 'images/numbers/1.png'
  } else if (number === 2) {
    d12.src = 'images/numbers/2.png'
  } else if (number === 3) {
    d12.src = 'images/numbers/3.png'
  } else if (number === 4) {
    d12.src = 'images/numbers/4.png'
  } else if (number === 5) {
    d12.src = 'images/numbers/5.png'
  } else if (number === 6) {
    d12.src = 'images/numbers/6.png'
  } else if (number === 7) {
    d12.src = 'images/numbers/7.png'
  } else if (number === 8) {
    d12.src = 'images/numbers/8.png'
  } else if (number === 9) {
    d12.src = 'images/numbers/9.png'
  } else if (number === 10) {
    d12.src = 'images/numbers/10.png'
  } else if (number === 11) {
    d12.src = 'images/numbers/11.png'
  } else if (number === 12) {
    d12.src = 'images/numbers/12.png'
  }
})

d20.addEventListener('click', function(){
  let number = getRandomNumber(20);
  if (number === 1) {
    d20.src = 'images/numbers/1.png'
  } else if (number === 2) {
    d20.src = 'images/numbers/2.png'
  } else if (number === 3) {
    d20.src = 'images/numbers/3.png'
  } else if (number === 4) {
    d20.src = 'images/numbers/4.png'
  } else if (number === 5) {
    d20.src = 'images/numbers/5.png'
  } else if (number === 6) {
    d20.src = 'images/numbers/6.png'
  } else if (number === 7) {
    d20.src = 'images/numbers/7.png'
  } else if (number === 8) {
    d20.src = 'images/numbers/8.png'
  } else if (number === 9) {
    d20.src = 'images/numbers/9.png'
  } else if (number === 10) {
    d20.src = 'images/numbers/10.png'
  } else if (number === 11) {
    d20.src = 'images/numbers/11.png'
  } else if (number === 12) {
    d20.src = 'images/numbers/12.png'
  } else if (number === 13) {
    d20.src = 'images/numbers/13.png'
  } else if (number === 14) {
    d20.src = 'images/numbers/14.png'
  } else if (number === 15) {
    d20.src = 'images/numbers/15.png'
  } else if (number === 16) {
    d20.src = 'images/numbers/16.png'
  } else if (number === 17) {
    d20.src = 'images/numbers/17.png'
  } else if (number === 18) {
    d20.src = 'images/numbers/18.png'
  } else if (number === 19) {
    d20.src = 'images/numbers/19.png'
  } else if (number === 20) {
    d20.src = 'images/numbers/20.png'
  }
})


/******************
 * RESET FUNCTION *
 ******************/

// declare a variable that grabs button
const resetter = document.querySelector('button');

// align reset button to center

//add eventlistener for reset button

resetter.addEventListener('click', function(){
  //handles the die images reset
  if (d6.src !== "images/start/d6.png") {
    d6.src = "images/start/d6.png"
  }

  if (d6One.src !== "images/start/d6.png"){
    d6One.src = "images/start/d6.png";
  }

  if (d6Two.src !== "images/start/d6.png"){
    d6Two.src = "images/start/d6.png";
  }

  if (d12.src !== "images/start/d12.jpeg"){
    d12.src = "images/start/d12.jpeg";
  }

  if (d20.src !== "images/start/d20.jpg"){
    d20.src = "images/start/d20.jpg";
  }

  //TODO:
  //write handlers to reset averages

})


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
