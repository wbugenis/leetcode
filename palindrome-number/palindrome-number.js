/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    } else {
        let num = x.toString()
        while( num.length > 1 ){
            console.log(num, typeof num)
            if(num[0] !== num[num.length-1]){
                return false
            } else {
                num = num.slice(1, -1)
            }
        }
        return true
    }
    
};