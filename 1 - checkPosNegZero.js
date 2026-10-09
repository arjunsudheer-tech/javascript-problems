const checkPosNegZero = (num) => {
  if(num > 0) {
    return 'Positive';
  } else if(num === 0) {
    return 'Zero';
  } else {
    return 'Negative';
  }
}

console.log(checkPosNegZero(15));
console.log(checkPosNegZero(-8));
console.log(checkPosNegZero(0));