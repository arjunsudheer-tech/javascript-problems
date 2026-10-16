const isPalindrome = (num) => {
  let temp = num;
  let rev = 0;
  while(num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  return temp === rev;
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(1221));
console.log(isPalindrome(12321));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
console.log(isPalindrome(-121));