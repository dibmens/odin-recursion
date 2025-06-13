function fibsRec(n) {
  let fibsArray = [];
  let pushFibs = (steps, a = 0, b = 1) => {
    if (steps < 1) return;
    console.log("This was printed recursively");
    fibsArray.push(a);
    pushFibs(steps - 1, b, a + b);
  };

  pushFibs(n);
  return fibsArray;
}

console.log(fibsRec(8));
