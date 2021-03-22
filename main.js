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


//d6.addEventListener('click', function() {})


/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
