'use strict';
const _Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
  }

  //inserts node at the front of the linked list
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //if head is null meaning list is empty
    //we will just use insertFirst function
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      //while the temporary node is not pointing to null
      //continue traversing to reach the end.
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;

    //if list is empty there is nothing to traverse.
    //head is null therefore no values exist to find.
    if (!this.head) {
      return null;
    }
    //while the current nodes value is not the item
    //continue looping through the nodes.
    while (currNode.value !== item) {
      //continue looping through the nodes
      //if currNode.next === null we didnt find the item
      //return null
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise continue traversing.
        currNode = currNode.next;
      }
    }
    //outside loop so we found it.
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the item to be deleted is the head
    //simply have head point to next.
    //the next node on the list will be head.
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    //while the current node is not equal to null which is end of list
    //and while its not equal to value of item continue to traverse
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode; //always one step behind
      currNode = currNode.next;
    }
    //if the loop exits with currNode null then item is not found.
    if (currNode === null) {
      console.log('Item not found');
      return;
    } else {
      //Otherwise item was found and set the previous node equal
      //to the currNode next. Not the actual currNode in order to skip it.
      previousNode.next = currNode.next;
    }
  }

  inserBefore(item, value) {
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode.value !== value && currNode !== null) {
      previousNode = currNode; //one step behind
      currNode = currNode.next;
    }
    //currNode is null then item was not found
    if (currNode === null) {
      console.log('Item not found cant insert');
      return;
    } else {
      //otherwise item was found
      //previous Node next will be set to new Node item
      //that new node will be pointing to currNode.
      previousNode.next = new _Node(item, currNode);
    }
  }

  insertAfter(item, value) {
    let currNode = this.head;
    let tempNode = this.head;
    while (currNode.value !== value && currNode !== null) {
      currNode = currNode.next;
      tempNode = currNode.next; //one step ahead
    }
    //currNode is null then item was not found
    if (currNode === null) {
      console.log('Item not found cant insert');
      return;
    } else {
      //otherwise item was found
      //currNode next will be set to new Node item
      //that new node will be pointing to tempNode.
      currNode.next = new _Node(item, tempNode);
    }
  }
  insertAt(item, position) {
    let currNode = this.head;
    let tempNode = this.head;
    let count = 0;
    //Will insert at last postion if linkedlist is not large enough.
    while (currNode !== null) {
      if (position === count) {
        break;
      }
      tempNode = currNode; //one step behind.
      currNode = currNode.next;
      count++;
    }

    tempNode.next = new _Node(item, currNode);
  }
}

module.exports = LinkedList;
