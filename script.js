// adding  basics
let userName = "Elvis"; 
let isStudent = true;

if (isStudent) {
  document.getElementById("greeting").textContent = "Hello, " + userName + "! Welcome back to class.";
} else {
  document.getElementById("greeting").textContent = "Hello, guest! Please log in.";
}

// adding Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatMessage(name, total) {
  return `${name}, your total is $${total}`;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  let total = calculateTotal(15, 3); 
  document.getElementById("calcResult").textContent = formatMessage(userName, total);
});

// adding Loops
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  document.getElementById("listContainer").appendChild(li);
}

let count = 1;
while (count <= 3) {
  console.log("Count is: " + count);
  count++;
}

// adding DOM Interactions
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";

  document.getElementById("statusMsg").textContent = "Background color changed!";
});
