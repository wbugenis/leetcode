/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = ""
    let shortest = 0
    let fail = false
    for(let i = 0; i< strs.length; i++){
        if(strs[i].length < strs[shortest]){
            shortest = i
        }
    }
    
    for(let i = 0; i < strs[shortest].length; i++){
        for(let j = 0; j < strs.length; j++){
            if(j === shortest) {
                continue
            }
            if(strs[shortest][i] !== strs[j][i]){
                return pref
            }
        } 
        pref += strs[0][i]
    }
    return pref
};