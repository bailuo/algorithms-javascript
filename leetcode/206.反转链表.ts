/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (68.99%)
 * Likes:    1296
 * Dislikes: 0
 * Total Accepted:    357.4K
 * Total Submissions: 504.8K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null){
        return null;
    }
    // 正向的head
    let forwardHead: ListNode | null = head;
    let reverseHead: ListNode;
    function reverse(h: ListNode): ListNode {
        // 下一个节点是null，因此这个节点就是正向的最好一个节点，逆向的首个节点
        if(h.next === null){
            reverseHead = h;
            return h;
        }
        // 递归,下一个点翻转
        const node: ListNode = reverse(h.next);
        // 节点翻转后，现在的上游节点变成下游节点
        node.next = h;
        // 如果正向的head和当前的h重合，说明翻转已经完成，也到头了
        if(forwardHead === h) {
            h.next = null;
            return reverseHead;
        }
        return h;
    }
    return reverse(head);
};
// @lc code=end

