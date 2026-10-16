const sumDigits = (num) => {
  num = Math.abs(num);
  let sum = 0;
  while(num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }

  return sum;
};

console.log(sumDigits(12345));
console.log(sumDigits(987));
console.log(sumDigits(505));
console.log(sumDigits(123));
console.log(sumDigits(1000));
console.log(sumDigits(0));
console.log(sumDigits(-123));