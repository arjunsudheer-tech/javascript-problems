const gradeCalculator = (mark) => {
  if(mark < 0 || mark > 100) {
    return 'Invalid marks';
  } else if(mark >= 90) {
    return 'A';
  } else if(mark >= 80 && mark <= 89) {
    return 'B';
  } else if(mark >= 70 && mark <= 79) {
    return 'C';
  } else if(mark >= 60 && mark <= 69) {
    return 'D';
  } else if(mark >= 40 && mark <= 59) {
    return 'E';
  } else if(mark < 40) {
    return 'Fail';
  }
};

console.log(gradeCalculator(95));  
console.log(gradeCalculator(85));  
console.log(gradeCalculator(72));
console.log(gradeCalculator(55));  
console.log(gradeCalculator(30)); 
console.log(gradeCalculator(110)); 