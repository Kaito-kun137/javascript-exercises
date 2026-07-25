const findTheOldest = function(people) {
  return people.reduce((oldestPerson, person) => {
    const oldestAge = (oldestPerson.yearOfDeath || new Date().getFullYear()) - oldestPerson.yearOfBirth;
    const personAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;

    return personAge > oldestAge ? person : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
