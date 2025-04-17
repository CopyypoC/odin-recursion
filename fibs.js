function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) arr.push(0);
    if (i === 1) arr.push(1);
    if (i > 1) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}
// const test1 = fibs(10);
// console.log("Fibs Iterative:");
// console.log(test1);

function fibsRec(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const arr = fibsRec(n - 1);
  const next = arr[arr.length - 1] + arr[arr.length - 2];
  return [...arr, next];
}
const test2 = fibsRec(8);
console.log("Fibs Recursive:");
console.log(test2);
