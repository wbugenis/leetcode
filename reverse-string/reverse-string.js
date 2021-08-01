/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let c = ""
    let l = s.length -1
    for(let i = 0; i < s.length/2; i++){
        c = s[l-i]
        s[l-i]=s[i]
        s[i]=c
    }
};