"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return true;
//     }
//   }
//   return false;
module.exports = binarySearch;
