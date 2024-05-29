const countDivisors = (num) => {
  let count = 0;
  const sqrtNum = Math.floor(Math.sqrt(num));
  for (let i = 1; i <= sqrtNum; i++) {
      if (num % i === 0) {
          count += 2; // i and num / i
      }
  }
  if (sqrtNum * sqrtNum === num) {
      count--; // Correct if num is a perfect square
  }
  return count;
};

const divisibleTriangleNumber = (n) => {
  let k = 1;
  while (true) {
      const triangleNumber = (k * (k + 1)) / 2;
      const numDivisors = countDivisors(triangleNumber);
      if (numDivisors > n) {
          return triangleNumber;
      }
      k++;
  }
};

const n = 5;
const result = divisibleTriangleNumber(n);
console.log(`The first triangle number with more than ${n} divisors is ${result}`);


divisibleTriangleNumber(500);