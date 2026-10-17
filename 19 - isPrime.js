const isPrime = (num) => {
  if(num <= 1) {
    return false;
  }

  let count = 0;

  for(let i = 1 ; i <= num ; i++) {
    if(num % i === 0) {
      count++;
    }
  }
  return count === 2;
};

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(0));