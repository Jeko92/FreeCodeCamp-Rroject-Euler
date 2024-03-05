const smallestMult = (n) => {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  let multiple = 1;

  for (let i = 2; i <= n; i++) {
    multiple = lcm(multiple, i);
  }
  console.log(multiple);
  return multiple;
};

//smallestMult(20);
smallestMult(5);
//smallestMult(7);
//smallestMult(13);
