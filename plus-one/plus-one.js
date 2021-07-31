/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let iterator = digits.length-1
    digits[iterator] += 1
    
    while(digits[iterator] > 9){
        digits[iterator] = 0
        if(iterator === 0){
            digits.unshift(1)
        } else {
            digits[iterator-1]+=1
        }
        iterator -= 1
    }
    return digits
};