
function deepEqual(obj_1, obj_2) {

    if (obj_1 === obj_2) return true; // If there are simple objects and equalm, returns true

    // If they have same length but have are complex objects.
    if (typeof obj_1 === "object" && obj_1 != null &&
        typeof obj_2 === "object" && obj_2 != null) {

        let keys_1 = Object.keys(obj_1); // put all the keys in an array for easier iteration.
        
        if (keys_1.length !== Object.keys(obj_2).length) return false;

        for (let key of keys_1) {
            // if KEY is not in OBJ_2 or if DEEPEQUAL(curren node, curren node) returns false [ if (obj_1 === obj_2) return true; ] its because the element is not in there NODE has not orders like array. 
            if (!key in obj_2 || !deepEqual(obj_1[key], obj_2[key])) return false;

            return true;

        }
    }
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, { here: 1, object: 2 })); // → false
// all has been figured out, just needed a nap
console.log(deepEqual(obj, { object: 2, here: { is: "an" } })); // → true
