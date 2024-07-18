const findTheOldest = function(people) {
  const peopleAge = {}

  for (let i = 0; i < people.length; i++){  
    if (!people[i].hasOwnProperty('yearOfDeath')) {
      people[i].yearOfDeath = new Date().getFullYear();
    }
    peopleAge[people[i].name] = (people[i].yearOfDeath - people[i].yearOfBirth);
  }
  
  const values = Object.values(peopleAge);
  let maxValue = 0;
  
  values.map((el) => {
    maxValue = Math.max(maxValue, el)
  })

   const oldestPersonIndex = values.indexOf(maxValue)
   return people[oldestPersonIndex]

}; 


// Do not edit below this line
module.exports = findTheOldest;
