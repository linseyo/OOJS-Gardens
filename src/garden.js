/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/


// OBJECT LITERAL SYNTAX
var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],

  addFlower: function(flower) {
    this.flowers.push(flower);
  },

  plant: function(multipleFlowers) {
    this.flowers = this.flowers.concat(multipleFlowers);
  },

  remove: function(flower) {
    var index = this.flowers.indexOf(flower);
    this.flowers.splice(index, 1);
    // for (var i = 0; i < this.flowers.length; i++) {
    //   if ((this.flowers[i].name === flower.name) && (this.flowers[i].color === flower.color)) {
    //     this.flowers.splice(i, 1);
    //   }
    // }
  },

  flowersByColor: function(color) {
    var sameColor = [];
    for (var i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].color === color) {
        sameColor.push(this.flowers[i]);
      }
    }
    return sameColor;
  },

  flowersByName: function(name) {
    var sameName = [];
    for (var i = 0; i < this.flowers.length; i++) {
      if (this.flowers[i].name === name) {
        sameName.push(this.flowers[i]);
      }
    }
    return sameName;
  },
}
