const palindromes = function (string) {
    let rgx = /[\W_]/g;
    let rgxStr = string.toLowerCase().replace(rgx, '');
    let reverseStr = rgxStr.split('').reverse().join('');
    return rgxStr == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
