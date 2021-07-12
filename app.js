// 1.) Same keys and values

/* Write an ES2015 Version */

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}
  
// My attempt: 
function myCreateInstructor(firstName, lastname) {
    return {
        firstName,
        lastName
    }
}

// Notes: No corrections

// ====================================================

// 2.) Computed Property Names

/* Write an ES2015 Version */

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
  
// My attempt: 
let myFavoriteNumber = 42;

const myInstructor = {
    firstName: "Colt",
    [myFavoriteNumber]: `That is my favorite!`
}


// Notes: No corrections

// =====================================================

// 3.) Object Methods

// Write an ES2015 Version
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
}
  
//My attempt:
const myInstructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstName} says bye!`;
    }
}

// Notes: I prefer to use backticks versus concatenating strings. 

// ====================================================================

// 4.) createAnimalFunction
// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

const dog = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
dog.bark()  //"Woooof!"

const sheep = createAnimal1("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
sheep.bleet() //"BAAAAaaaa"

// My attempt:
const createAnimal1 = function (species, verb, noise) {
    return {
        species,
        verb,
        noise,
        [verb]() {
            return noise;
        }
    }
}


// Notes: My version had too much code/information, and I'm not sure it would even function since there are two keys with the same name; would they be different since only one would have parens?

// Correct version:

function createAnimal2(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}