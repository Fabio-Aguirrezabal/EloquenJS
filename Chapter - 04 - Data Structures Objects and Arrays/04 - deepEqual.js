
function deepEqual(obj_1, obj_2) {
    
    if (typeof (obj_1) == "object" && obj_1 != null &&
        typeof (obj_2) == "object" && obj_2 != null) {

        var matches = 0;
 
        if (Object.keys(obj_1).length === Object.keys(obj_2).length) {
            Object.keys(obj_1).forEach(key => {
              
                if(obj_1[key]==obj_2[key]){               
                    matches++;
                    console.log(obj_1[key], ", is: ", obj_2[key]);
                }
            });
            return matches == Object.keys(obj_1).length;
        }
    return false;

    }
}



let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false


console.log(deepEqual({ here: { is: "an" }, object: 2 }, { here: { is: "an" }, object: 2 })); // → true
