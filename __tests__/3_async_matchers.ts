test('async matchers', async () => {
  const fetchData = () => Promise.resolve('data');
  
  await expect(fetchData()).resolves.toBe('data'); // resolves for promises
  await expect(Promise.reject('error')).rejects.toBe('error'); // rejects for promises
  
  const data = await fetchData(); // using async/await
  
  expect(data).toBe('data');
});