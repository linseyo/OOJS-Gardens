/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  addFlower: function(flower) {
    this.flowers.push(flower);
  },
  plant: function(flowers) {
    this.flowers = this.flowers.concat(flowers);
  },
  remove: function(flower) {
    var flowerIndex = this.flowers.indexOf(flower);
    this.flowers.splice(flowerIndex, 1);
  },
  flowersByColor: function(color) {
    return this.flowers.filter(function(flower) {
      return flower.color === color;
    });
  },
  flowersByName: function(name) {
    return this.flowers.filter(function(flower) {
      return flower.name === name;
    });
  }
};
