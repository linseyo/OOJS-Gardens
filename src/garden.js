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
  plant: function(planted) {
    for(var i = 0; i < planted.length; i++){
      this.flowers.push(planted[i]);
    }
  },
  remove: function(flower) {
    for(var i = 0; i < this.flowers.length; i++){
      if(this.flowers[i] == flower){
        this.flowers.splice(i, 1);
      }
    }
  },
  flowersByColor: function(color){
    var colorFlower = [];
    for(var i =0; i < this.flowers.length; i++){
      if(this.flowers[i].color == color){
        colorFlower.push(this.flowers[i]);
      }
    }
    return colorFlower
  },

  flowersByName: function(name){
    var flowerPower = [];
    for(var i=0; i < this.flowers.length; i++){
      if(this.flowers[i].name == name){
        flowerPower.push(this.flowers[i]);
      }
    }
    return flowerPower;
  },

};
