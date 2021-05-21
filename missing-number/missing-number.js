/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        arr[nums[i]]=nums[i]
    }
    console.log(arr)
    
    for(let i = 0; i < nums.length+1; i++){
        console.log(i)
        if(arr[i] === undefined){
            return i
        }
    }
};