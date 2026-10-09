const checkLargest = (num1 , num2) => {
  if(num1 === num2) {
    return 'Both numbers are equal'
  } else if(num1 > num2) {
    return `${num1} is larger`;
  } else {
    return `${num2} is larger`;
  }
} 

console.log(checkLargest(25,40));
console.log(checkLargest(80,30));
console.log(checkLargest(15,15));