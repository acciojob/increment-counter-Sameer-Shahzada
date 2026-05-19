let count = 0;

const counter = document.getElementById("counter");
const button = document.getElementById("incrementBtn");

button.addEventListener("click", function () {

  // Alert un-incremented value
  alert(count);

  // Increment value
  count++;

  // Update counter
  counter.textContent = count;
});