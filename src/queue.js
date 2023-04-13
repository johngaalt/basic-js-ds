const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    class ListNode {
      constructor(value, next = null) {
        this.value = value;
        this.next = next;
      }
    }

    this.head = null;
    this.tail = null;

    this.enqueue = (value) => {
      const newNode = new ListNode(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    };

    this.dequeue = () => {
      if (!this.head) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return value;
    };

    this.getUnderlyingList = () => {
      return this.head;
    };
  }
}

module.exports = {
  Queue,
};
