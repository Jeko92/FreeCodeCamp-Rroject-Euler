const specialPythagoreanTriplet = (n) => {
  let sumOfabc = n;
  const pythagoreanTriplets = [];
  for (let i = 0; i < n - 1; i++) {
    let denom = 2 * (n - i);
    let num = 2 * i ** 2 + n ** 2 - 2 * n * i;
    if (denom > 0 && num % denom === 0) {
      let c = Math.floor(num / denom);
      let b = n - i - c;
      if (b > i && ![i, b, c].includes(0)) {
        pythagoreanTriplets.push([i, b, c]);
      }
    }
  }
  console.log(pythagoreanTriplets);
  //console.log(200 ** 2 + 375 ** 2, 425 ** 2);
  console.log(pythagoreanTriplets.map((arr) => arr.reduce((a, b) => a * b, 1)));
  return +pythagoreanTriplets.map((arr) => arr.reduce((a, b) => a * b, 1))[0];
};

specialPythagoreanTriplet(1000);
