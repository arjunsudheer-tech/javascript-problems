const divisibilityCheck = (num) => {
  if(num % 5 === 0 && num % 11 === 0) {
    return 'Divisible by both 5 and 11';
  } else if(num % 5 === 0) {
    return 'Divisible by 5 only';
  } else if(num % 11 === 0) {
    return 'Divisible by 11 only';
  } else {
    return 'Not divisible by 5 or 11';
  }
};

console.log(divisibilityCheck(55));
console.log(divisibilityCheck(25));
console.log(divisibilityCheck(22));
console.log(divisibilityCheck(17));
console.log(divisibilityCheck(110));
console.log(divisibilityCheck(100));
console.log(divisibilityCheck(121));
console.log(divisibilityCheck(0));
console.log(divisibilityCheck(-55));
console.log(divisibilityCheck(-7));