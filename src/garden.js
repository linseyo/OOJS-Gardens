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
    console.log('newFlower is ',newFlower)
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


