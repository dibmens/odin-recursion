function fibs(n) {
  let a = 0;
  let b = 1;
  let fibArr = [];

  for (i = 0; i < n; i++) {
    let sum = a + b;

    console.log("This was printed iteratively");
    fibArr.push(a);
    a = b;
    b = sum;
  }
  return fibArr;
}

console.log(fibs(8));
