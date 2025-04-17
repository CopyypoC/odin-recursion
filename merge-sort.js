function mergeSort(arr) {
  console.log(`mergeSort([${arr}])`);
  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));
  const sorted = [];

  if (arr.length === 1) {
    console.log(`return right: [${right}]`);
    return right;
  }

  console.log(`sortedLeft = mergeSort([${left}])`);
  const sortedLeft = mergeSort(left);
  console.log(`sortedRight = mergeSort([${right}])`);
  const sortedRight = mergeSort(right);

  let i = 0;
  let j = 0;
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      sorted.push(sortedLeft[i]);
      i++;
    } else {
      sorted.push(sortedRight[j]);
      j++;
    }
  }

  while (i < sortedLeft.length) {
    sorted.push(sortedLeft[i]);
    i++;
  }

  while (j < sortedRight.length) {
    sorted.push(sortedRight[j]);
    j++;
  }

  console.log(`return sorted: [${sorted}]`);
  return sorted;
}

const arr = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(arr));

// mergeSort([2, 1, 4])
//  sortedLeft = mergeSort([2])
//    return [2]
//  sortedRight = mergeSort([1,4])
//    sortedLeft = mergeSort([1])
//      return [1]
//    sortedRight = mergeSort([4])
//      return [4]
