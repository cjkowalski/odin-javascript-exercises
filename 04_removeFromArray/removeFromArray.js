const removeFromArray = function(givenArray, toBeRemoveArray) {
  toBeRemovedArray.forEach(element => {
    const index = givenArray.indexOf(toBeRemoved);
    if (index > -1) {
     givenArray.splice(index, 1);
    }
  });
  return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
