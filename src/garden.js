/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
  name: "Kula Botanical Garden",
  location: "Makawao",
  flowers: [],
  addFlower: function(flower) {
    garden.flowers.push(flower);
  },
  plant: function(flowers){
    flowers.forEach(garden.addFlower);
  },
    // for (var flower in flowers) {
    //   garden.flowers.push(flowers[flower])
  // };

  remove: function(flower) {
    index = garden.flowers.indexOf(flower)
    garden.flowers.splice(index, 1);
  },

  // flowersByColor: function(color){
  //   garden.flowers.forEach(flower.find(color))
  //   .find(color);
  //   return coloredFlowers;
  // }
  flowersByColor: function(searchColor){
    var matches = garden.flowers.filter(function(flower) {
      return flower.color === searchColor;
    });
    return matches;
  },

  flowersByName: function(searchName){
    var matches = garden.flowers.filter(function(flower) {
      return flower.name === searchName;
    });
    return matches;
  }

}
