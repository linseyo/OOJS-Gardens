/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  addFlower: function(flower) {
    return garden.flowers.push(flower);
  },
  plant: function(multipleFlowers) {
    multipleFlowers.forEach(function(flower) {
      return garden.addFlower(flower);
    })
  },
  remove: function(discard) {
    garden.flowers.forEach(function(flower, index){
      if (flower === discard) {
        garden.flowers.splice(index, 1);
      }
    })
  },
  flowersByColor: function(query) {
    var filter = [];
    garden.flowers.forEach(function(flower) {
      if ( flower.color.includes(query) ) {
        filter.push(flower);
      }
    })
      return filter;
  },

  flowersByName: function(query) {
    var filter = [];
    garden.flowers.forEach(function(flower){
      if (flower.name.includes(query)){
        filter.push(flower);
      }
    })
    return filter;
  }
}

