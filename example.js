function age(human) {
  // reassign the age property of the human
  //   human.age = human.age + 1;
  // return the human from the function
  return { ...human, age: human.age + 1 };
}
const youngRein = { name: "Rein", age: 31 };
const improvedRein = age(youngRein);
console.log(youngRein); // { name: 'Rein', age: 32 }
console.log(improvedRein); // { name: 'Rein', age: 32 }
// Oh no, we mutated the original object!
// Actually since an object is a reference type
// both youngRein and improvedRein refer to the same object
console.log(youngRein === improvedRein); // true
const array = ["Rein", "David", "Jeroen"];
const newArray = ["Danny", ...array, "Miloud"];
newArray[1] = "Irene";
console.log(array);
console.log(newArray);
