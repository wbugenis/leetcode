/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g, '').replace('_', '')
    let j = s.length-1
    for(let i = 0; i < s.length/2; i++){
        if(s[i].toLowerCase() !== s[j].toLowerCase()){
            return false
        }
        j--
    }
    return true
};