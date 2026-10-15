const countDigits = (num) => {

  num = Math.abs(num);

  let count = 0;

  if(num === 0) return 1;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
};

console.log(countDigits(12345));
console.log(countDigits(789));
console.log(countDigits(1));