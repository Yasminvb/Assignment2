function groupAdultsByAgeRange(persons) {
  const over18 = persons.filter(function(person) {
    return person.age >= 18;
  });

  const groups = over18.reduce(function(adultAge, person) {
    if (person.age <= 20) {
      if (adultAge["20 and younger"] === undefined) {
        adultAge["20 and younger"] = [person];
      } else {
        adultAge["20 and younger"].push(person);
      }
    }

    if (person.age >= 21 && person.age <= 30) {
      if (adultAge["21-30"] === undefined) {
        adultAge["21-30"] = [person];
      } else {
        adultAge["21-30"].push(person);
      }
    }

    if (person.age >= 31 && person.age <= 40) {
      if (adultAge["31-40"] === undefined) {
        adultAge["31-40"] = [person];
      } else {
        adultAge["31-40"].push(person);
      }
    }

    if (person.age >= 41 && person.age <= 50) {
      if (adultAge["41-50"] === undefined) {
        adultAge["41-50"] = [person];
      } else {
        adultAge["41-50"].push(person);
      }
    }

    if (person.age >= 51) {
      if (adultAge["51 and older"] === undefined) {
        adultAge["51 and older"] = [person];
      } else {
        adultAge["51 and older"].push(person);
      }
    }

    return adultAge;
  }, {});
  //console.log(groups);
  return groups;
}

module.exports = {
  groupAdultsByAgeRange
};
