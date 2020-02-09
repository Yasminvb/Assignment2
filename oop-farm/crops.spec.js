const { Wheat, Crop, Sugarcane } = require("./crops");
test("The Wheat class can calculate a yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeDefined();
});
test("The Wheat class calculates the proper yield", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInKg()).toBeCloseTo(674.4, 2);
});
test("A crop can store its area size", () => {
  const crop = new Crop(12345);
  expect(crop.acres).toBe(12345);
});
test("Wheat class calculates the proper yield value", () => {
  const wheat = new Wheat(100);
  expect(wheat.getYieldInEuros()).toBeCloseTo(1011.6, 1);
});
test("Sugarcane class calculates the proper yield value", () => {
  const sugarcane = new Sugarcane(200);
  expect(sugarcane.getYieldInEuros()).toBeCloseTo(1943.7, 1);
});
test("Sugarcane class calculates the proper yield value", () => {
  const sugarcane = new Sugarcane(0);
  expect(sugarcane.getYieldInEuros()).toBe(0);
});
