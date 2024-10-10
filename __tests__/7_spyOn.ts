const myLogger = () => {
  console.log('Logging some information');
};

test('should spy on console.log', () => {
  const spy = jest.spyOn(console, 'log');
  
  myLogger();
  
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith('Logging some information');
  
  // restore the original function
  spy.mockRestore();
});