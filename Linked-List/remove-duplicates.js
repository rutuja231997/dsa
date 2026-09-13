//remove duplicates from sorted linked list
//time complexity is O(n) and space complexity is O(1)

function removeDuplicates(head) {
  let curr = head;

  while (curr !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
  }
  return head;
}
