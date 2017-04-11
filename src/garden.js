/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {}

garden.name = 'Kula Botanical Garden';
garden.location = 'Makawao';
garden.flowers = [];

var daffodil = new Flower("daffodil", "yellow");
var iris     = new Flower("iris", "purple");
var aster    = new Flower("aster", "red");

garden.plant = function(flowerNames) {
  var i;
  for(i=0; i < arguments.length; i++) {
    newFlower = new Flower(flowerNames[i]);
    this.flowers.push(newFlower);
  }
}

garden.addFlower = function(flower) {
    this.flowers.push(flower);
}


