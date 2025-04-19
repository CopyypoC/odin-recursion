function mergeSort(arr) {
  // Split into halves
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  const sorted = [];

  // Base case of single item
  // slice takes (start, end) not including end so left is empty
  if (arr.length === 1) {
    return right;
  }

  // Recurse here to split and sort all the way down to 1 item
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  let i = 0;
  let j = 0;
  // Sort and merge each item from the left and right halves
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      sorted.push(sortedLeft[i]);
      i++;
    } else {
      sorted.push(sortedRight[j]);
      j++;
    }
  }

  // Merge leftover items
  while (i < sortedLeft.length) {
    sorted.push(sortedLeft[i]);
    i++;
  }

  while (j < sortedRight.length) {
    sorted.push(sortedRight[j]);
    j++;
  }

  // Sorted array will build from the base case up to the final
  // 2 halves because of the recursive calls
  // i.e. sortedLeft and sortedRight start as single items
  // and chain into the upper level sortedLeft and sortedRight
  // until the entire recursive call chain is complete
  return sorted;
}
