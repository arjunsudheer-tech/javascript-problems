const checkLargestThreeNos = (num1,num2,num3) => {
  if(num1 >= num2) {
    if(num1 >= num3) {
      return `${num1} is larger`;
    } else {
      return `${num3} is larger`;
    }
  } else if(num2 >= num3) {
    if(num2 >= num1) {
      return `${num2} is larger`;
    } else {
      return `${num1} is larger`;
    }
  } else {
    return `${num3} is larger`;
  }
}

console.log(checkLargestThreeNos(10, 10, 10));
console.log(checkLargestThreeNos(10, 20, 20));
console.log(checkLargestThreeNos(30, 30, 20));
console.log(checkLargestThreeNos(-5, -2, -10));