/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (48.45%)
 * Likes:    8263
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const pointers:Map<number, any> = new Map<number, number>();
      for(let i: number = 0; i < nums.length; i++){
          const num: number = nums[i];
          if(pointers.get(num) !== undefined) {
              return [pointers.get(num), i];
          }
          const remain = target - num;
          pointers.set(remain, i);
      }
      return [];
};
// @lc code=end

