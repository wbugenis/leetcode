/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(' ')
    let iter = words.length - 1
    console.log(words)
    while(iter >= 0){
        if(words[iter].length > 0){
            return words[iter].length
        }
        iter -= 1
    }
    return 0
};