function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addNodeAtHead = function (val) {
  let newNode = new Node(val);

  newNode.next = this.head;
  this.head = newNode;

  console.log("head", this.head, "newNode", newNode);
  this.size++;
};

LinkedList.prototype.addNodeAtTail = function (val) {
  let curr = this.head;

  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    this.size++;
    return;
  }

  while (curr.next !== null) {
    curr = curr.next;
    // console.log(curr);
  }
  curr.next = newNode;

  this.size++;
};

LinkedList.prototype.addNodeAtIndex = function (index, val) {
  if (index < 0 && index > this.size) return -1;

  if (index === 0) {
    this.addNodeAtHead(val);
    return;
  } else if (index > 0) {
    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }

  this.size++;
};

LinkedList.prototype.getNode = function (index) {
  if (index < 0 && index >= this.size) return -1;

  let curr = this.head;

  for (let i = 0; i <= index; i++) {
    curr = curr.next;
    // console.log("curr", curr);
  }

  return { "current node": curr, "current node data :": curr.val };
};

LinkedList.prototype.deleteNode = function (index) {
  if (index < 0 && index >= this.size) return -1;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

LinkedList.prototype.printLinkedList = function () {
  let curr = this.head;
  let result = [];

  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join("->"));
};

LinkedList.prototype.middleNode = function () {
  let slow = this.head;
  let fast = this.head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
};

LinkedList.prototype.removeNode = function (head, val) {
  let sentinel = new Node();
  sentinel.next = head;

  let prev = sentinel;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentinel.next;
};

LinkedList.prototype.removeDuplicates = function (head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

LinkedList.prototype.printingVal = function (head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
};

let obj = new LinkedList();

obj.addNodeAtHead(10);
obj.addNodeAtTail(30);
obj.addNodeAtIndex(1, 20);
obj.addNodeAtIndex(2, 60);
obj.addNodeAtIndex(3, 20);
obj.addNodeAtIndex(4, 10);
obj.addNodeAtIndex(0, 5);
obj.addNodeAtTail(70);

console.log(obj.getNode(1));

obj.deleteNode(3);

obj.printLinkedList();

obj.middleNode();

obj.printingVal(obj.head);

// obj.removeNode(obj.head, 5);
// obj.removeNode(obj.head, 30);

obj.removeDuplicates(obj.head);

obj.printLinkedList();
