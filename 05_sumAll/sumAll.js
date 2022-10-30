const sumAll = function(num1, num2) {
    if((typeof num1 != 'number' || typeof num2 != 'number') || (num1 < 0 || num2 < 0)){
        return 'ERROR';
    }

    let sum = 0;
    if(num1 < num2){
        for (let i = num1; i<=num2; i++){
            sum = sum + i;
        }
    } else if(num1 > num2){
        for (let j = num1; j>=num2; j--){
            sum = sum + j;
        }
    } else{
        return sum = num1 + num2;
    }

    return sum;
    

};

// Do not edit below this line
module.exports = sumAll;
