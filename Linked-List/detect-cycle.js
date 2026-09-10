//1st approach
//time complexity : o(n)
// space complexity : o(n)

function detectCycle(head) {
  let curr = head;
  let seenNode = new Set();

  while (curr !== null) {
    if (seenNode.has(curr)) {
      return true;
    }
    seenNode.add(curr);
    curr = curr.next;
  }

  return false;
}
