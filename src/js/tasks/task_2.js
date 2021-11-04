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
    let rowsCount = matrixToCheck.length;
    let columnsLength = matrixToCheck[0].length;
    let setValues = new Set(values);

    for (let k = 0; k < columnsLength; k++) {
        if (k === columnsLength - 2) { break; }
        let setTmp = new Set();
        for (let j = 0; j < rowsCount; j++) {
            setTmp.add(matrixToCheck[j][k]);
            setTmp.add(matrixToCheck[j][k + 1]);
            setTmp.add(matrixToCheck[j][k + 2]);
        }
        let is_true = isSuperset(setTmp, setValues);
        arrayResult.push(is_true);
    }

    return arrayResult;
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
