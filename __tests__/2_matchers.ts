test('basic matchers', () => {
  expect(1 + 1).toBe(2); // toBe checks for strict equality
  expect({ a: 1 }).toEqual({ a: 1 }); // toEqual checks for deep equality
  expect(true).toBeTruthy(); // toBeTruthy checks if a value is true in a boolean context
  expect(null).toBeNull(); // toBeNull checks if a value is null
  expect(undefined).toBeUndefined(); // toBeUndefined checks if a value is undefined
  expect([1, 2, 3]).toContain(2); // toContain checks if an array contains a certain element
});