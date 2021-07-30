/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1
    let current = nums[0]
    for(let i = 1; i< nums.length; i++){
        if(nums[i] !== current){
            nums[k]=nums[i]
            k+=1
            current = nums[i]
        }
    }
    nums.length = k
};