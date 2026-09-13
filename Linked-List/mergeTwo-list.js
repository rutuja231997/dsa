// 1 pointer approach
// time complexity = O(n)
// space complexity = O(1)

function mergeList(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = null;
  if (l1.val < l2.val) {
    curr = l1;
    l1 = l1.next;
  } else {
    curr = l2;
    l2 = l2.next;
  }

  let start = curr;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  }
  if (!l2) {
    curr.next = l1;
  }

  return start;
}

// dummy node approach
// time complexity = O(n)
// space complexity = O(1)

function mergeLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  }

  if (!l2) {
    curr.next = l1;
  }

  return dummy.next;
}
