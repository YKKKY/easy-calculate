function calculate_median(Array) {

    var newArray = [];
    var number;
    newArray = buildEvenNumber(Array);
    number = buildMiddle(newArray);
    return number;
}

function buildEvenNumber(Array) {
    var newArray = [];

    for (var i = 0; i < Array.length; i++) {
        if (i % 2 != 0) {

            newArray.push(Array[i]);
        }
    }

    return newArray;
}

function buildMiddle(newArray) {
    var number;

    if (newArray.length % 2 == 0) {

        number = (newArray[newArray.length / 2 - 1] + newArray[newArray.length / 2]) / 2;
    } else {

        number = newArray[parseInt(newArray.length / 2)];
    }

    return number;
}

module.exports = calculate_median;
