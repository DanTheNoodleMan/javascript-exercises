const leapYears = function(year) {
    //divisible by four
    //divisible by 100 NO - unless divisble by 400 YES
    if(year%4 == 0 && year%100!=0 || year%400==0){
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = leapYears;
