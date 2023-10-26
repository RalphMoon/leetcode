/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const array = [];
  let current = head;
  
  while (current?.next) {
    if (array.includes(current)) return true;
    
    array.push(current);
    current = current.next;
  }
  
  return false;
};