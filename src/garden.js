/*

Use object literal syntax to create a garden object with
the attributes and behaviors described in spec/garden_spec.js.

*/

var garden = {
	name: "Kula Botanical Garden",
	location: "Makawao",
	flowers: [],
	addFlower: function(flower){
		garden.flowers.push(flower);
	},
	plant: function(flowersToPlant){
		flowersToPlant.forEach(garden.addFlower);
	},
	remove: function(flower){
		flower_index = garden.flowers.indexOf(flower);
		garden.flowers.splice(flower_index, 1);
	},
	flowersByColor: function(filterColor){
		return garden.flowers.filter(function(flower){
			return flower.color == filterColor;
		});
	},
	flowersByName: function(flowerName){
		return garden.flowers.filter(function(flower){
			return flower.name == flowerName;
		});
	}

};
