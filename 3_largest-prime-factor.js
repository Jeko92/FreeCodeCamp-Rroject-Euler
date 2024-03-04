const largestPrimeFactor = (number) => {
  let divisor = 2;
  while (number > 1) {
    if (number % divisor === 0) {
      number /= divisor;
    } else {
      divisor++;
    }
  }
  console.log(divisor);
  return divisor;
};

largestPrimeFactor(600851475143);
