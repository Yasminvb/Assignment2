// let name = "Miloud";
// let skill = "Growth Hacking";
// function wallOfFame(name, skill) {
//   return `
//                                     WALL OF FAME
//         _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
//         ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
//         _|___|___|___|___|___|  ${name} : ${skill} |___|___|___|___|___|
//         ___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__
//         _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|
//     `;
// }
// const miloud = wallOfFame();
// console.log(miloud);
// name = "Johan";
// skill = "Fixing Ubuntu";
// const johan = wallOfFame();
// console.log(johan);
// name = "Danny";
// skill = "Product Owning";
// const danny = wallOfFame();
// console.log(danny);

// const teachers = ["David", "Kelley", "Jeroen"];
// function getLastElementOfArray(array) {
//   const saveJeroen = array.length - 1;
//   return array[saveJeroen];
// }
// const lastTeacher = getLastElementOfArray(teachers); // Jeroen
// console.log(teachers);

// const favorite_hobby = "programming";
// const my_hobbies = ["eletricity", "linux", favorite_hobby, "repeating"];
// my_hobbies[0] = "electricity";
// const robot = {
//   hobbies: my_hobbies,
//   model: "Lenovo Thinkpad",
//   processing_speed: 3.2
// };
// my_hobbies[1] = "linux";
// my_hobbies[2] = "running code";
// const second_robot = robot;
// second_robot.model = "Macbook Pro";
// second_robot.hobbies = ["multitouch", "os x"];
// robot.hobbies[0] = "not quitting apps when you want them to";

// function promote(soldier) {
//   switch (soldier.rank) {
//     case "private":
//       // soldier.rank = "private-1st-class";
//       // soldier.salaryUSD = 4250;
//       return { ...soldier, rank: "private-1st-class", salaryUSD: 4250 };
//     case "private-1st-class":
//       soldier.rank = "specialist";
//       // soldier.salaryUSD = 4750;
//       return { ...soldier, salaryUSD: 4750 };
//     case "specialist":
//       // soldier.rank = "corporal";
//       // soldier.salaryUSD = 5100;
//       return { ...soldier, rank: "corporal", salaryUSD: 5100 };
//     case "corporal":
//       // soldier.rank = "sergeant";
//       // soldier.salaryUSD = 5700;
//       return { ...soldier, rank: "Sergeant", salaryUSD: 5700 };
//     default:
//       return soldier;
//   }
// }
// const soldier1 = {
//   firstName: "Biggs",
//   lastName: "Darklighter",
//   rank: "specialist",
//   salaryUSD: 4750
// };
// const promotedSoldier = promote(soldier1);
// console.log(promotedSoldier);
// console.log("same object?", soldier1 === promotedSoldier); // output same object? true
// const soldier2 = {
//   firstName: "Wedge",
//   lastName: "Antilles",
//   rank: "private-1st-class",
//   salaryUSD: 4250
// };
// const promotedSoldier2 = promote(soldier2);
// console.log(promotedSoldier2);
// console.log("same object?", soldier2 === promotedSoldier2); // output same object? true

// const people = [
//   { firstName: "David", lastName: "Stephenson" },
//   { firstName: "Rembert", lastName: "Boom" },
//   { firstName: "Wouter", lastName: "de Vos" }
// ];
// function greet(person) {
//   console.log(`${person.firstName}, ${person.lastName}, What a fine day`);
// }
// function greetings(person) {
//   console.log(`Good day ${person.lastName}`);
// }
// // desired output for 1 person:
// // Hello David Stephenson! What a fine day today!
// people.forEach(greetings);
// people.forEach(greet);

function toAmericanGrade(grade) {
  if (grade >= 9) {
    return "A";
  }
  if (grade >= 9) {
    return "A";
  }
  if (grade >= 1 && grade <= 5.9) {
    return "F";
  }

  if (grade >= 6 && grade <= 6.9) {
    return "D";
  }
  // hint: you can use if ( *conditional* ) return 'A'; etc.
}
// tests
function test(num, should_become) {
  if (toAmericanGrade(num) === should_become) {
    console.log("test passed");
  } else {
    console.log(`toAmericanGrade(${num}) should have been
     ${should_become} but was ${toAmericanGrade(num)}`);
  }
}
test(9, "A");
test(10, "A");
test(1, "F");
test(5.9, "F");
test(6, "D");
test(6.9, "D");

function toAmericanGrades(grades) {
  return ["A", "F", "D", "C"]; // replace this with your answer
}
// test
const grades1 = [9, 5.5, 6, 7.3];
const res = toAmericanGrades(grades1)[3];
console.log(`last is C? ${"C" == res ? "yes" : `no: ${res}`}`);

// function toDutchGrades["A", "B", "C", "D", "F"]
const dutchGrades = ["A", "B", "C", "D", "F]
//     { toDutchGrades: >= 1 && <= 5.9: "F" },
//     { toDutchGrades: >= 6 && <= 6.9: "D" },
//     { toDutchGrades: >= 7 && <= 7.9: "C" },
//     { toDutchGrades: >= 8 && <= 8.9: "B" },
//     { toDutchGrades: >= 9 && <= 10:  "A" },
   
// }
