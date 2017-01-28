//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

//code here
function Animal(species, name, legs, color, food){
this.species = species;
this.name = name;
this.legs = legs;
this.color = color;
this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

//code here
function personCreation(name, age, height, gender){
var obj = {
  "name": name,
  "age": age,
  "height": height,
  "gender": gender
};
return obj;
}

//Create a animal array and a person array.

//code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

//code here
animal[0] = new Animal('bird', 'robin', 2, 'gray', ['worms', 'nuts', 'berries']);
animal[1] = new Animal('cat', 'tiger', 4, 'orange', ['animals', 'people', 'birds']);
//Create two instances of person and push those into your person array.
//console.log(animal);
//code here
person[0] = personCreation('john', 23, '5\'3\"', 'male');
person[1] = personCreation('sarah', 24, '5\'1\"', 'female');
//console.log(person);
//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

//code here
Animal.prototype.eat = function(animalID) {
var rand = Math.floor((Math.random() * 3) + 1) - 1;
return animal[animalID].name + ' ate ' + animal[animalID].food[rand];
};

function randNum(min, max){
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(animal[randNum(0,1)].eat(randNum(0,1)));


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
//no, person isn't a constructor which you could add a prototype to. each one is a separate object.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
