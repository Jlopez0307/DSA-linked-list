/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    //creates new node with value of val
    const newNode = new Node(val);

    if(!this.head){

      this.head = newNode;
      this.tail = newNode;

    }

    this.tail.next = newNode;
    this.tail = newNode;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.head = newNode;
    this.push(newNode);
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let newTail = currentNode;

    if(!this.head) return null;

    while(currentNode.next){

      newTail = currentNode;
      current = current.next;

    }

    this.tail = newTail;
    this.tail.next = null;
    this.length = this.length - 1;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return current;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;

    let temp = this.head;

    this.head = this.head.next;
    this.length = this.length - 1;
    if(this.length === 0){
      this.tail = null;
    }
    return temp
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let count = 0;

    while(currentNode){

      if(count === idx){
        return currentNode.val;
      }

      count++;
      currentNode = currentNode.next;
    }
    return -1

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let count = 0;

    while(currentNode){
      if(count === idx){
        currentNode.val = val;
      }

      count++;
      currentNode = currentNode.next;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val)
    let currentNode = this.head;
    let count = 0;

    while(currentNode){
      if(count === idx){
        currentNode = newNode
      }

      count++;
      currentNode = currentNode.next;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(!this.head){
      return
    }

    if(idx === 0){
      this.head = this.head.next;
      return
    }

    const previous = this.getAt(idx - 1);
    if(!previous || !previous.next){
      return 
    }
    previous.next = previous.next.next
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let count = 0;
    let sum = 0;
    let average = 0.0;

    while(currentNode){
      count++
      sum += current.data;
      current = current.next
    }

    average = sum /count;
    
    return average
  }
}

module.exports = LinkedList;
