function range(start, end, step = 1) {
    let a = new Array;
    let condition = "n<=end"

    if (step < 0) {
        condition = "n>=end"
    }

    for (n = start; eval(condition); n = n + step) {
        a.push(n);
    }

    return a;
}


function sum(inputs) {
    let output = 0;
    inputs.forEach(element => {
        output += element;
    });
    console.log(output)
}

console.log("sum of range");

console.log(range(5, 2, -1));

console.log(range(1, 10, 2));