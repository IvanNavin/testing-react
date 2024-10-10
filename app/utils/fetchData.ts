export const fetchData = () => {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
};