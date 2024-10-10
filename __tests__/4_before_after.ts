let data: string[];

beforeAll(() => {
  data = [];
  console.log('Setting up before all tests', data);
});
beforeEach(() => {
  data.push('test');
  console.log('Setting up before each test', data);
});
afterEach(() => {
  data.pop();
  console.log('Cleaning up after each test', data);
});
afterAll(() => {
  data = [];
  console.log('Cleaning up after all tests', data);
});

describe('Array operations', () => {
  it('should add an element to the array', () => {
    expect(data.length).toBe(1);
  }) ;
  
  it('should have the correct element', () => {
    expect (data[0]).toBe('test');
  }) ;
}) ;