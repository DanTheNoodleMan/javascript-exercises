const reverseString = function(word) {
    let charArray = new Array(word.length);
    let result = '';

    for(let i = 0; i<word.length; i++){
        charArray[i] = word.charAt(i);
    }

    for (let j = charArray.length -1; j>=0; j--){
        result = result + charArray[j];
    }
    return result;
};


// Do not edit below this line
module.exports = reverseString;
