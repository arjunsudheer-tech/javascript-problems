const invertedStar = (num) => {
  for(let i = 1 ; i <= num ; i++) {
    let row = '';

    for(let j = num ; j >= i ; j--) {
      row += '* ';
    }

    console.log(row);
  }
}

invertedStar(5);