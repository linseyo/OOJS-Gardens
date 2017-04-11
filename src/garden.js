/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {}

garden.name = 'Kula Botanical Garden';
garden.location = 'Makawao';
garden.flowers = [];

garden.plant = function(flowers) {
  var i;
  for(i=0; i < flowers.length; i++) {
    var newFlower = flowers[i];
    this.addFlower(newFlower);
  }
}

garden.addFlower = function(flower) {
    this.flowers.push(flower);
}

garden.remove = function(flower) {
  var flowerIndex = this.flowers.indexOf(flower);
  this.flowers.splice(flowerIndex,1);
}

garden.flowersByColor = function(colorToFind) {
  var flowersThisColor = function(el) {
    return (el.color === colorToFind);
  }
  return this.flowers.filter(flowersThisColor);
}

garden.flowersByName = function(nameToFind) {
  var flowersThisName = function(el) {
    return (el.name === nameToFind);
  }
  return this.flowers.filter(flowersThisName);
}


