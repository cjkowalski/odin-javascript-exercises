const sumAll = function(first, last) {

  if (typeof first !== 'number' || typeof last !== 'number' || first < 0 || last < 0) {
    return "ERROR"
  }

  // if the first number is larger
  if (first > last) {
    let temp = first;
    first = last;
    last = temp;
  }

  let sum = 0;

  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;

};

console.log(sumAll(10, [90, 10])) //0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123

// Do not edit below this line
module.exports = sumAll;
