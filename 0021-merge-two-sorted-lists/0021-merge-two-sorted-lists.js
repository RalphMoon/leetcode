/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  
  const vals = [];
  let firstList = list1;
  let secondList = list2;
  
  while (firstList !== null) {
    vals.push(firstList.val);
    firstList = firstList.next;
  }
  while (secondList !== null) {
    vals.push(secondList.val);
    secondList = secondList.next;
  }
  
  vals.sort((a, b) => a - b);
  
  let temp = new ListNode(vals[0]);
  const result = temp;
  
  for (let i = 1; i < vals.length; i++) {
    temp.next = new ListNode(vals[i]);
    temp = temp.next;
  }

  return result;
};