"use strict";

//Complete this algo
const isLoop = (linkedlist, memo = {}) => {
  let currentNode = linkedlist.head;
  while (currentNode != linkedlist.tail) {
    currentNode = currentNode.next;
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
