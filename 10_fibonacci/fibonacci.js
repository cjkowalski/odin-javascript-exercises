const fibonacci = function(num) {

  if (Number(num) < 0) {
    return "OOPS"
  }

  let first = 1;
  let second = 1;

  let total = [0, first, second]
  
  for (i = 0; i < num; i++) {
    let temp = first + second
    total.push(temp);
    first = second;
    second = temp;
  } return total[num]
};




// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....

// Do not edit below this line
module.exports = fibonacci;
