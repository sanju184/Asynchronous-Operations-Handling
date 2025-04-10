const fetch = require('node-fetch');

// Fetch data using Promise
function fetchDataPromise() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(err => {
      throw err;
    });
}

// Call the function
fetchDataPromise()
  .then(data => {
    console.log("Data:", data);
  })
  .catch(err => {
    console.error("Error:", err);
  });


  const fetch = require('node-fetch');

// Fetch data using async/await
async function fetchDataAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchDataAsync();