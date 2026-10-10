const eligiblityVote = (age) => {
  if(age >= 18) {
    return 'Eligible';
  } else if(age < 0) {
    return 'Invalid age';
  } else {
    return 'Not eligible to vote';
  }
};

console.log(eligiblityVote(25));
console.log(eligiblityVote(16));
console.log(eligiblityVote(-5));