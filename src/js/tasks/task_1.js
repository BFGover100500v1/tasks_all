function compareNumbers(a, b, c) {
    return Number((a > b && b < c) || (a < b && b > c));
}

function checkArray( array ) {
    if (array.length < 3) throw "Array length must be 3 or more";
    
    let resultArray = [];

    for (let i = 0; i < array.length - 2; i++) {
        resultArray.push(compareNumbers(
            array[i], array[i + 1], array[i + 2]
        ))
    }
    return resultArray;
}

function doTask1() {
    let numbers = [1, 3, 5, 4, 5, 7];
    let result = checkArray(numbers);
    console.log(result);
}