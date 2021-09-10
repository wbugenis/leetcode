/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    
    for(let i in nums){
        if(nums[i] === val){
            continue;
        } else if(i !== k){
            nums[k] = nums[i];
            k += 1;
        }
    }
    
    return k;
};