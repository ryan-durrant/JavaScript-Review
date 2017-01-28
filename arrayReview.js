var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
  function last(arr){
    return arr[arr.length - 1];
  }

  alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];
function isEven(elements){
  if(elements % 2 === 0){
    return elements;
  }
}
  //code here
var evens = evenArray.filter(isEven);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
function checkRandom(randArr){
  var num = getRandomArbitrary();
  randArr.forEach(function(e){
    if(e === num){
      return true;
    }
  });
  return false;
}

checkRandom(randomArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = first;
second.push(6,7);
  //code here

alert(first); //[1,2,3,4,5];
alert(second); //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

  //code here
function longest(sent){
  var arr = sent.split(" ");
  var length = 0;
  var longest;
  for(var i =  0; i < arr.length; i++){
    if(arr[i].length > length){
      length = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
  function capitalize(poem){
    var arr = poem.split(" ");
    var capArr = arr.map(function(e){
      return e.charAt(0).toUpperCase() + e.slice(1);
    });
    return capArr;
  }


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(string){
  var arr = string.split("");
  var counter = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 'a' || 'e' || 'i' || 'o' || 'u'){
      counter++;
    }
  }
  return counter;
}
