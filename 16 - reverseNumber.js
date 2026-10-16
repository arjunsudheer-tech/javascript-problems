const reverseNumber = (num) => {
  const sign = num < 0 ? -1 : 1;
  num = Math.abs(num);
  let rev = 0;
  while(num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return rev * sign;
};

console.log(reverseNumber(12345));
console.log(reverseNumber(987));
console.log(reverseNumber(1200));
console.log(reverseNumber(1));
console.log(reverseNumber(0));
console.log(reverseNumber(1001));
console.log(reverseNumber(-1234));
console.log(reverseNumber(-500));
console.log(reverseNumber(10));
console.log(reverseNumber(100000));