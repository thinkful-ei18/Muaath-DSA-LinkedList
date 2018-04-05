'use strict';
const LinkedList = require('./linkedlist');
const display = require('./supplemental');

function main() {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAt('Logan', 1);
  SLL.insertBefore('Mo', 'Helo');
  display(SLL);
  //   SLL.insertLast('Husker');
  //   SLL.insertLast('Starbuck');
  //   SLL.insertLast('Tauhida');
  //   SLL.remove('squirrel');

  //   let newList = new LinkedList();

  //   newList.insertFirst('Muaath');
  //   console.log(newList);
  //   newList.insertAfter('Alaraj', 'Muaath');
  //   console.log(newList);
  //   newList.inserBefore('I', 'Muaath');
  //   console.log(newList);
}

main();
