const reversePyramid = (num) => {
  for(let i = 1 ; i <= num ; i++) {
    let row = '';

    for(let j = num ; j > i ; j--) {
      row += '  ';
    }

    for(let k = 1 ; k <= i ; k++) {
      row += '* ';
    }

    console.log(row);
  }
}

reversePyramid(5);