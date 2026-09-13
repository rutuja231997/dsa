// slow and fast pointer approach and using module operator avoid list no. of times rotate list.
// time complexity = O(n)
// space complexity = O(1)

function rotateList(head, k) {
  //handle corner case of empty array
  if (!head || !head.next) return head;

  //calculate length of linked list
  let curr = head;
  let length = 0;
  while (curr) {
    curr = curr.next;
    length++;
  }

  let s = head;
  let f = head;

  k = k % length;
  //moves f pointer  k step ahead
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  //moves both pointer
  while (f.next !== null && f) {
    s = s.next;
    f = f.next;
  }

  //shift both nodes and point them to previous head
  f.next = head;
  let newHead = s.next;

  s.next = null;
  return newHead;
}
