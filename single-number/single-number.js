/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {}
    for(let i of nums){
        counter[i] = ++counter[i] || 1
    }
    
    return Object.keys(counter).filter(key => counter[key] === 1)[0]
};