const leapYear = (year) => {
  if(year % 400 === 0) {
    return 'Leap year';
  } else if(year % 100 === 0 && year % 400 !== 0) {
    return 'Not a leap year';
  } else if(year % 4 === 0 && year % 100 !== 0) {
    return 'Leap year';
  } else {
    return 'Not a leap year';
  }
}

console.log(leapYear(2024));
console.log(leapYear(1900));
console.log(leapYear(2000));
console.log(leapYear(2025));