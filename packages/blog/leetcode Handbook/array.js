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

/**
 * @description LC 15 : 三数之和
 * @param {*} nums 
 * @returns 
 */
 var threeSum = function(nums) {
    let res = []
    const len = nums.length
    if(nums === null || len < 3) {
        return res
    }
    nums.sort((a , b) => a -b)
    for (let i = 0;i < nums.length;i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let L = i + 1
        let R = len - 1
        while( L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if(sum === 0){
                res.push([nums[i] , nums[L] , nums[R]])
                while( L < R && nums[L] === nums[L+1]) L++
                while(L < R && nums[R] === nums[R-1]) R--
                L++
                R--
            }
            else if (sum < 0) L++
            else if(sum > 0) R--
        }
    }

    return res
};