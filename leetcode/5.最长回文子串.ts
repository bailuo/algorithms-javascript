/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (29.71%)
 * Likes:    2825
 * Dislikes: 0
 * Total Accepted:    403K
 * Total Submissions: 1.3M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
type IndexRange = {
    left: number;
    right: number;
}
function longestPalindrome(s: string): string {
    if(s.length === 1 || (s.length === 2 && s[0] === s[1])) {
        return s;
    }
    const getMaxRange = function(str: string, left: number, right: number): IndexRange{
        while(str[left] && str[right] && str[left] === str[right]){
            left -= 1;
            right += 1;
        }
         left  += 1;
         right  -= 1;
        return {
            left:left,
            right:right 
        }
    }

    let longested:IndexRange = {left: 0, right:0};
    for(let i:number =0; i <s.length; i ++) { 
        const _mode1:IndexRange = getMaxRange(s, i, i);
        const _mode2:IndexRange = getMaxRange(s, i ,i +1);
        let longer:IndexRange = _mode1;
        if(_mode2.right - _mode2.left >= _mode1.right - _mode1.left) {
            longer = _mode2;
        }
         if(!longested || (longer.right - longer.left >= longested.right - longested.left)){
            longested = longer;
        }
    }      
    return s.substring(longested.left, longested.right + 1) || '';
};
// @lc code=end

