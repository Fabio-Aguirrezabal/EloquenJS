function reverseArray(originalArray) {

    let newArray = new Array;
    for (n = originalArray.length - 1; n >= 0; n = n - 1) {

        newArray.push(originalArray[n]);
    }


    return newArray;
}

function reverseArrayInPlace(originalArray) {
    let aux = 0;

    let length = ((originalArray.length - 1) / 2)

    for (n = 0; n < length; n = n + 1) {
        aux = originalArray[n];

        originalArray[n] = originalArray[originalArray.length - (1 + n)];

        originalArray[originalArray.length - (1 + n)] = aux;

    }

    return originalArray;
}


let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.debug("reverse array");
console.log(test);
console.log(reverseArray(test));
console.log("\n");
console.debug("reverse array in place");
console.log(test);
console.log(reverseArrayInPlace(test));