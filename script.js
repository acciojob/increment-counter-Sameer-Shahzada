//your JS code here. If required.
<!DOCTYPE html>
<html>
<head>
  <title>Increment Counter</title>
</head>
<body>

  <!-- Counter -->
  <p id="counter">0</p>

  <!-- Increment Button -->
  <button id="incrementBtn">Increment</button>

  <script>
    let count = 0;

    const counter = document.getElementById("counter");
    const button = document.getElementById("incrementBtn");

    button.addEventListener("click", function () {

      // Alert un-incremented value
      alert(count);

      // Increment count
      count++;

      // Update UI
      counter.textContent = count;
    });
  </script>

</body>
</html>