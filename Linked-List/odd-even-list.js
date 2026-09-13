// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// time complexity = O(n)
// space complexity = O(1)

function oddEvenList(head) {
  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
}
