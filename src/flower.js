/*

Write a constructor function that produces objects
matching the description in spec/flower_spec.js.

*/

var Flower = function(name,color) {
  this.name = name;
  this.color = color;
}

var flower1 = new Flower('rose','red');
var flower2 = new Flower('daisy','white');
var flower3 = new Flower('tulip','pink');
console.log('flower 1 to follow');
console.log(flower1);
console.log(flower2);
