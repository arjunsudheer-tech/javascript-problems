const checkOddEven = (num) => {
  if(num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(checkOddEven(12));
console.log(checkOddEven(7));