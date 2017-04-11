/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  addFlower: function(flower){
    this.flowers.push(flower);
  },
  plant: function(flowers){
    for (var i = 0; i < flowers.length; i++){
      this.flowers.push(flowers[i]);
    };
  },
  remove: function(flower){
    for (var i = 0; i < this.flowers.length; i++){
      if (this.flowers[i] === flower){
        this.flowers.splice(i, 1);
      };
    };
  },

}
