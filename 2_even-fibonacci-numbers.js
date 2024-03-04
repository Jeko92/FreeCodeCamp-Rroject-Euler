const fiboEvenSum = (n) => {
  let sequence = [0, 1],
    accumulator = 0,
    i = 0,
    total = 0;

  while (accumulator <= n) {
    sequence.push(sequence[i] + sequence[i + 1]);
    accumulator = sequence[i] + sequence[i + 1];
    if (accumulator % 2 === 0 && accumulator <= n) {
      total += accumulator;
    }
    i++;
  }
  return total;
};

fiboEvenSum(4000000);
