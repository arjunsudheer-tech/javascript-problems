const fibonacci = (num) => {
  if(num <= 0) {
    return;
  }

  let a = 0 , b = 1;
  console.log(a);

  if(num === 1) {
    return;
  }

  console.log(b);

  for(let i = 3 ; i <= num ; i++) {
    let c = a + b;
    a = b ;
    b = c;
    console.log(c);
  }
}

fibonacci(10);
fibonacci(1);
fibonacci(2);
fibonacci(0);