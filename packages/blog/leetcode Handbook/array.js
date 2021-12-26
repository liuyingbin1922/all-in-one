/**
 * @description 二分查找 ； LC 704
 */

 var search = function(nums, target) {
    // binary search 
    let left = 0 , right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >> 1;
        if(nums[mid] === target) {
            return mid
        }else if(nums[mid] < target) {
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return -1
};