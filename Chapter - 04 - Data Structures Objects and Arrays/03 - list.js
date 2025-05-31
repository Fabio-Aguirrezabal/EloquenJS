/* declaring a auxiliary lists to test the functions */
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

let value1 = {value:0,rest:list}
let value2 = {value:-1,rest:list}

/* Function asked */

// Given an array turn it into a list.
function arrayToList(array){
    
    let newList = null;
   
    array.reverse().forEach((element, index) => {

        do {
            newList = { value: element, rest: newList };
            
        } while ((array.length - index + 1) == 0);
    });
    
    return newList;
} 

// Given a list return an array.
function listToArray(list){
    let p = list;
    let array = new Array;

  //for (let node = list; node; node = node.rest) {} recomenden in the book
    /*
        for (let node = list; node; node = node.rest) {
            to implement
        }
    */

    do{
        array.push(p.value);
        p=p.rest;
    }while(p!=null)

    console.log(array);
    return array;
}

// Given a new element and a list returns a new list with the element at the front of the new list.
function prepend(element, list){
   return { value:element,rest:list };
}

// Given a list and a number, return the element at that position
function nth(list, position=0){
    let p = list;
    let i=0;       

    //for (let node = list; node; node = node.rest) {} recomenden in the book
    /*
        for (let node = list; node; node = node.rest) {
            to implement
        }
    */
    while( i<position || p.rest == null){
        p=p.rest;
        i++;
    }
 
    return p.value;
}

// Given an element of a list, return the position in it.
function recursiveNth(list, element){
    let index = 0;
    let p = list;
      while(element!=p.value || p.rest==null){
        p=p.rest;
        index++;
        }
    return index;
}

/*
console.log("a test for arrayToList: ",arrayToList([10,20])); // → {value: 10, rest: {value: 20, rest: null}}

console.log("a test for listToArray: ",listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]

console.log("a test for prepend: ",prepend(10, prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}

console.log("a test for nth: ", nth(arrayToList([10, 20, 30]), 1)); // → 20 

console.log("a test for inverseNth: ", recursiveNth(arrayToList([10, 20, 30]), 20)); // → 20 
*/