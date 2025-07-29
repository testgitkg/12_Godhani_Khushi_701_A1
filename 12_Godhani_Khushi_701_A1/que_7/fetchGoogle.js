const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text();
    console.log("Fetched data from Google's homepage:\n");
    console.log(data.substring(0, 1000));
  } catch (error) {
    console.error("Error fetching Google page:", error.message);
  }
}

fetchGoogleHomePage();
