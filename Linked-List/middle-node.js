// time complexity is o(n)
// space complexity is o(1)
function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
