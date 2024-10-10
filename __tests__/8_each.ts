function sum(a: number, b: number) {
  return a + b;
}

describe('sum function', () => {
  test.each([
    [1, 2, 3],
    [2, 3, 5],
    [3, 4, 7]
  ])('should add %i and %i to equal %i', (a: number, b: number, expected: number) => {
    expect(sum(a, b)).toBe(expected);
  });
});