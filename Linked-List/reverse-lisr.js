// time complexity : o(n)
// space complexity : o(1) -> using temp variable.

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}
