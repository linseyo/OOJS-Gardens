/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  flowerPopulation: function(){
    return this.flowers.length;
  },
  addFlower: function(flower){
    this.flowers.push(flower);
  },
  plant: function(flowers){
    for(var i = 0; i < flowers.length; i++){
      this.addFlower(flowers[i]);
    }
  },
  remove: function(flower){
    var deleteIndex = this.flowers.indexOf(flower);
    this.flowers.splice(deleteIndex);
  },
  flowersByColor: function(soughtColor){
    var result = [];
    for(var i = 0; i < this.flowers.length; i++){
      if(this.flowers[i].color === soughtColor){
        result.push(this.flowers[i]);
      }
    }
    return result;
  },
  flowersByName: function(soughtName){
    var result = [];
    for(var i = 0; i < this.flowers.length; i++){
      if(this.flowers[i].name === soughtName){
        result.push(this.flowers[i]);
      }
    }
    return result;
  },
}
