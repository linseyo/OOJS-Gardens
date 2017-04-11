/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: []
}

garden.addFlower = function(newFlower) {
  this.flowers.push(newFlower);
};

garden.plant = function([flowerOne, flowerTwo]) {
  this.flowers.push(flowerOne, flowerTwo);
};

garden.remove = function(flower) {
  this.flowers.pop(flower);
  return this.flowers;
};

garden.flowersByColor = function(color) {
  return this.flowers.filter( function(flower) {
    return flower.color === color;
  }, color);
}
