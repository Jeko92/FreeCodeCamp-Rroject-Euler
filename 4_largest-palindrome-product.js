const largestPalindromeProduct = (n) => {
  const products = [];
  let smallest = Math.pow(10, n - 1);
  let largest = Math.pow(10, n) - 1;

  for (let i = smallest; i <= largest; i++) {
    for (let j = smallest; j <= largest; j++) {
      let product = i * j;
      if (
        product.toString() === product.toString().split("").reverse().join("")
      ) {
        products.push(i * j);
      }
    }
  }
  //console.log(Math.max(...products));
  return Math.max(...products);
};

largestPalindromeProduct(2);
//largestPalindromeProduct(3);
