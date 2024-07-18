const palindromes = function (input) {
  
  const stripped = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  if (stripped.split('').reverse().join('') === stripped) {
    return true;
  } else {
    return false;
  }


};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
