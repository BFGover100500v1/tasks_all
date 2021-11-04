let maxStringLength = 16;
let arrayWords =
    [
        ["Hello", "world"],
        ["Brad", "came", "to", "dinner", "with", "us"],
        ["He", "loves", "tacos"]
    ];

let arrayFormat = ["LEFT", "RIGHT", "LEFT"];

function formatPadding(pad, str, padding) {
    if (typeof str === 'undefined')
        return pad;

    let string = "";

    switch (padding) {
        case 'RIGHT':
            string = (pad + str).slice(-pad.length);
            break;

        case 'LEFT':
            string = (str + pad).substring(0, pad.length);
            break;
    }
    return string;
}

function splitWords( array ) {
    let result = [];
    let spaces = Array(maxStringLength + 1).join(' ');
    let cutString = Array(maxStringLength+2).fill('*').join('');
    result.push(cutString);

    for (let k = 0; k < array.length; k++) {
        let str = arrayWords[k].join(' ');
        let matches = str.match(/.{1,16}(?: |$)/g);
        for (j = 0; j < matches.length; j++) {
            let string = formatPadding(spaces, matches[j], arrayFormat[k]);
            result.push("*".concat(string, '*'));
        }
    }
    result.push(cutString);
    return result;
}

function doTask3() {
    let final = splitWords(arrayWords);
    console.log(final);
}