var fruitsLegumes = ['Pomme','Banane','Kiwi'];
var panier = [];
panier[0] = "Pomme";
panier[1] = "Banane";
panier[2] = "kiwi";
panier[3] = "carotte";
panier[4] = "concombre";
panier[5] = "tomate";
panier[6] = "oignons";
panier[7] = "pomme de terre";
panier[8] = "orange";
panier[9] = "fraise";
panier[10] = "ananas";
panier[11] = "mangue";
// console.log(fruitsLegumes.length)
// for(var i = fruitsLegumes.length; i > 0; i--){
//     var fruitRemoved = fruitsLegumes.shift();
//     panier.push(fruitRemoved);
//     console.log(i);


console.log("panier: ",panier);
var elementsSupprimes = fruitsLegumes.splice();
console.log("Fruitslegumes:" ,elementsSupprimes);