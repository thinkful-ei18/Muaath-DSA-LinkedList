'use strict';
const LinkedList = require('./linkedlist');

module.exports = function display(list) {
  let currNode = list.head;
  if (currNode === null) {
    console.log('List is empty');
  }
  let count = 0;
  while (currNode !== null) {
    console.log(`Index ${count}: ${currNode.value}`);
    currNode = currNode.next;
    count++;
  }
};
