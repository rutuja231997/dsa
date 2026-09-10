//remove nth node from Linked List from end.

//2 passed solution
// time complexity = o(n)
// space complexity = o(1)

function removeNode(head, n) {
  //create a sentinel node
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;

  for (let i = 0; i < prevPos; i++) {
    prev = prev.nexr;
  }

  prev.next = prev.next.next;
  return sentinel.next;
}

//1 passed solution using 2 pointers
//time complexity= o(n);
//space complexity  = o(1);

function remove(head, n) {
  let sentinel = new ListNode();
  sentinel.nexr = head;

  let first = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinel;

  while (first !== null && first.next !== null) {
    second = second.next;
    first = first.next;
  }

  //deleting a node nth node
  second.next = second.next.next;
  return sentinel.next;
}
