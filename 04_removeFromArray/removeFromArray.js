const removeFromArray = (givenArray, ... toBeRemoved) => {

  for (let i = 0; i < toBeRemoved.length; i++)
    if (givenArray.includes(toBeRemoved[i])) {
      const index = givenArray.indexOf(toBeRemoved[i])
      givenArray.splice(index, 1)
    }
    return givenArray
};

// Do not edit below this line
module.exports = removeFromArray([1, 2, 3, 4], 3, 2);
