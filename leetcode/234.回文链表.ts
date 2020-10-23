/*
 * @lc app=leetcode.cn id=234 lang=typescript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (41.79%)
 * Likes:    693
 * Dislikes: 0
 * Total Accepted:    142.1K
 * Total Submissions: 323.6K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
         val: number
         next: ListNode | null
         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
}

function isPalindromeHelper(arr:Array<ListNode>, left:number, right:number) : boolean {
     while(arr[left] && arr[right] && arr[left].val === arr[right].val){
            left -= 1;
            right += 1;
     }
     left  += 1;
     right  -= 1;
     if(right - left + 1  == arr.length){
        return true;
     }
     return false;
}
function isPalindrome(head: ListNode | null): boolean {
    const arr:Array<ListNode> = [];
    while(head) {
        const temp: ListNode | null = head.next;
        head.next = null;
        arr.push(head);
        head = temp;
    }
    if(!arr.length || arr.length === 1) {
        return true;
    }
    // 长度是否为偶数
    const isEven:boolean = arr.length % 2 === 0;
    if(isEven && arr[arr.length /2 -1].val !==  arr[arr.length /2].val) {
        return false;
    }
    return isEven ?  isPalindromeHelper(arr, arr.length /2 -2, arr.length /2 + 1 ) : isPalindromeHelper(arr, Math.floor(arr.length /2) -1, Math.ceil(arr.length /2));
};
// @lc code=end

