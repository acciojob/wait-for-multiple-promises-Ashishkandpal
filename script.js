//your JS code here. If required.

// have to use promise.all
// All logic related to promise

// Create three promises
const randomNumberGenerator = function () {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
};

const timeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 100));
};

const task = async function () {
  const timer = randomNumberGenerator();
  await timeout(timer);
  return timer;
};
// So we will use settimeout for for delaying the promise

const all = async function () {
  const prom = await Promise.all([task(), task(), task()]);
  return prom;
};

// logic for adding the data to the table

const tableBody = document.querySelector("#output");
const html = function (a, b) {
  return `
    <tr>
        <th>Promise ${a}</th>
        <th>${b} (s)</th>
    </tr>
    `;
};

const add = async function () {
  const data = await all();
  let total = 0;
	tableBody.innerHTML = '';
  data.forEach((val, i, arr) => {
    tableBody.insertAdjacentHTML("beforeend", html(i + 1, val));
    total += val;
  });
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
  <tr>
      <th>Total</th>
      <th>${total} (s)</th>
  </tr>
  `
  );
};

add();
