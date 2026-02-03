const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const left = document.getElementById("left").value;
  const right = document.getElementById("right").value;
  const operator = document.getElementById("operator").value;

  const a = Number(left);
  const b = Number(right);

  // validate input
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    alert("Error :(");
    return;
  }

  // division or modulo by zero
  if ((operator === "/" || operator === "%") && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
  }

  alert(result);
  console.log(result);
});

// alert every 30 seconds
setInterval(() => {
  alert("Please, use me...");
}, 30000);
