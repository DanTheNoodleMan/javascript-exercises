const repeatString = function(word, num) {
    let repeated = '';
    if(num < 0) return "ERROR";

    for (let i = 0; i<num;i++){
        repeated = repeated + word;
    }
    return repeated;
    

};

// Do not edit below this line
module.exports = repeatString;
