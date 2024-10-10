const myFunction = (callback: (str: string) => void) => {
  callback('called');
};

test('should call the callback with correct argument', () => {
  const mockCallback = jest.fn();
  
  myFunction(mockCallback);
  
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledWith('called');
});