window.onload = function(){
    // Les types de valeurs que peut prendre une variable en javascript
    var a = 1;
    var b = "";
    var c = [1, "", {}, function(){}, false, true];
    var d = {
        color: "red",
        number: 1,
        tableau: [],
        obj: {},
        func: function(){},
        bool1: true,
        bool2: false
    };

    console.log("type property", typeof d.color,"property color: ", d.color);
    console.log("type property", typeof d.number,"property number: ", d.number);
    console.log("type property", typeof d.tableau,"property tableau: ", d.tableau);
    console.log("type property", typeof d.obj,"property obj: ", d.obj);
    console.log("type property", typeof d.func,"property func: ", d.func);
    console.log("type property", typeof d.bool1,"property bool1", d.bool1);
    console.log("type property", typeof d.bool2, "property bool2", d.bool2);

    var e = function(){};
    var f = true || false;
}