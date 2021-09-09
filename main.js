// alert("let's get start so that we can get done fasts");

// Review 1:

// Use .map to create a new array of objects where each object has a property
// for ```petNumber``` and ```petType```
// based on the elements in the array. Print the new array of objects.

// let petTypes = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects you produce

// pet_objects = petTypes.map((el, evt) => {
//   return {
//     petNumber: el,
//     petTypes: evt,
//   };
// });

// console.log(pet_objects);

// Review 2:
//  Use ```.filter``` to create an array of pet objects that only holds the hamsters.


// let pets = [
// {
//   name: 'fred',
//   type: 'fish'
// },
// {
//   name: 'violt',
//   type: 'rabbit'
// },
// {
//   name: 'Kate',
//   type: 'dog'
// }
// ]

// // let fish = []; //new array to hold objects

// let fish = pets.filter(

//   (el) =>{
//     return( el === "fish");
//       }
// );
// console.log(fish);


// Review 3
// Write a function that takes a string and returns total character count of 
// letters for all strings in the sentence. 

// Use ```.reduce``` return this count.  Hint: See ```.split()``` and string ```length``` property.

// I need to make a string that is put in a array 

// let what = "What happen if life do go your way";

// let arr = what.split("");

// function countAllLetter(){
// console.log(arr);
// }
// countAllLetter(); 
// let theNumberOfLetters = what.map(


//   (el) => {
//     return(el.length.split(""))
    

//   }


// );
// console.log(what);


// Review 4: 
// Use `map` to take an array of words in lower-case and returns an array of 
// the strings where *every other word* is in all caps. 
// Then use `foreach` to print out the new array.


// ex: 
// `hey pal, lets javascript together sometime` // => "HEY pal, LETS javascript TOGETHER sometime"

let x = ["hey pal, lets javascript together sometime"];

let oddCap = x.map(
    (el) => {
        return(el.length)

    }
)

console.log(oddCap);