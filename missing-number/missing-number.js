/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = 0
    let sum = 0
    
    for(let i=0; i < nums.length+1; i++){
        max+=i
        if(nums[i]!==undefined){
            sum+=nums[i]
        }
    }
    return max-sum
};