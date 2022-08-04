const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const oldestPerson = people.reduce((lastPerson, nextPerson) => {
    const { yearOfBirth: lastBirth, yearOfDeath: lastDeath = currentYear } =
      lastPerson;
    const { yearOfBirth: nextBirth, yearOfDeath: nextDeath = currentYear } =
      nextPerson;

    const [lastAge, nextAge] = [lastDeath - lastBirth, nextDeath - nextBirth];
    return lastAge > nextAge ? lastPerson : nextPerson;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
