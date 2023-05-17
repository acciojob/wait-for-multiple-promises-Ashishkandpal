//your JS code here. If required.

// have to use promise.all
// All logic related to promise

// Create three promises
const randomNumberGenerator = function () {
  return (Math.random() * (3 - 1 + 1) + 1).toFixed(4);
};

const timeout = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000));
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
        <td>Promise ${a}</td>
        <td>${b} (s)</td>
    </tr>
    `;
};

const add = async function () {
  const data = await all();
  let total = 0;
  tableBody.innerHTML = '';
  data.forEach((val, i, arr) => {
    tableBody.insertAdjacentHTML("beforeend", html(i + 1, val));
    total = Math.max(total, val);
  });
	await timeout(total);
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
  <tr>
      <td>Total</td>
      <td>${total} (s)</td>
  </tr>
  `
  );
};

add();
