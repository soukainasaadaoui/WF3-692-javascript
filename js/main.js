window.onload = function(){
    // Boucle for fonctionnement 
    for(var i = 0; i <= 10; i = i + 1){
        console.log("boucle for: ",i)
    }

    // Boucle While
    var j = 0;
    while(j <= 10){
        console.log("boucle while: ", j);
        j = j + 1;
    }

    // Les tableaux
    var tableau = ["Hello", "World !"];
    console.log("value tableau 0",tableau[0]);
    console.log("value tableau 1",tableau[1]);
    // mise en pratique tableau + boucle pour parcourir notre tableau
    for(k = 0; k < 2; k = k + 1){
        console.log('boucle + tableau :', 'indice: ', k, "valeur: ", tableau[k]);
    }
}