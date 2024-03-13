const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const primeSummation = (n) => {
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      //console.log(i);
      primes.push(i);
    }
  }
  console.log(primes.reduce((a, b) => a + b, 0));
  return primes.reduce((a, b) => a + b, 0);
};

primeSummation(10);
primeSummation(17);
//primeSummation(10);
primeSummation(2000000);
