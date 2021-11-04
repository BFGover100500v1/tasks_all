function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

function checkMatrix( matrixToCheck, values ) {
    let arrayResult = [];
    let columnsLength = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < matrixToCheck.length; i++) {
        columnsLength = (columnsLength > matrixToCheck[i].length)? matrixToCheck[i].length : columnsLength;
    }

    for (let k = 0; k < columnsLength - 2; k++) {
        let arrayPart = [];
        for (let j = 0; j < matrixToCheck.length; j++) {
            for (let x = 0; x < 3; x++) {
                arrayPart.push(matrixToCheck[j][k + x]);
            }
        }
        if (arrayResult[k] === undefined) {
            arrayResult[k] = arrayPart;
        }
    }

    return arrayResult.map(function (array) {
        return isSuperset(new Set(array), new Set(values));
    });
}

let numbers = [1,2,3,4,5,6,7,8,9];
let matrix = [
    [1,2,3,2,7],
    [4,5,6,8,1],
    [7,8,9,4,5],
];

function doTask2(){
    let result = checkMatrix( matrix, numbers );
    console.log(result);
}
