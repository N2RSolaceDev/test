// test.js
const fetch = require('node-fetch');

const API_BASE_URL = 'https://unfiltereduk.co.uk'; // 🔥 CHANGE ME
const API_KEY = 'ukapi_c29sYWNlQHVuZmls_b9772b5f769ed5fb695b26aa60d4c52b'; // 🔥 Use a valid key
const TO = 'solace@unfiltereduk.co.uk';

async function test() {
  const res = await fetch(`${API_BASE_URL}/api/automated-send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key: API_KEY,
      to: TO,
      subject: 'API Test',
      body: 'If you see this, the API key system works!'
    })
  });

  const data = await res.json();
  console.log(res.status, data);
}

test();
