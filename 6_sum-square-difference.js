const sumSquareDifference = (n) => {
  const numsArr = Array.from(Array(n), (_, x) => x + 1);
  const squaresSum = numsArr
    .map((el) => Math.pow(el, 2))
    .reduce((a, b) => a + b, 0);
  const sumSquared = Math.pow(
    numsArr.reduce((a, b) => a + b, 0),
    2
  );
  //console.log(numsArr);
  console.log(squaresSum);
  console.log(sumSquared);
  console.log(Math.abs(squaresSum - sumSquared));
  return Math.abs(squaresSum - sumSquared);
};

sumSquareDifference(100);
