// DOM Document Object Model
// - The HTML elements as objects
// - The properties of all HTML elements
// - The methods to access all HTML elements
// - The events for all HTML elements

// DOM Manipulation
// https://www.youtube.com/watch?v=y17RuWkWdn8

// Benefit of JS DOM HTML
// 1) Javascript can change all HTML Element is the page

// 1.1 Adding Elements
// const body = document.body;
// body.appendChild("Hello world", "Bye");
// error "Hello world", "Bye" is not node

// body.append("Hello world", "Bye");

// 1.2 Creating Elements
// const body = document.body;
// const div = document.createElement("div");
// // div.innerText = "Hello world";
// div.textContent = "Hello world";
// body.append(div);

//1.3 Modiifying Element Text
// const body = document.body;
// const p = document.createElement("p");
// p.innerText = "Welcome message";
// p.textContent = "Whoooooo";
// body.appendChild(p);

// 1.4 What's diffence between innerTExt & textContent
// Select HTML element
// const selectDiv = document.querySelector("div");
// console.log(selectDiv.textContent); all content
// console.log(selectDiv.innerText); visible content

//1.5 Modiifying Element HTML
// const body = document.body;
// const div = document.createElement("div");
// div.innerHTML = "<strong>Bold text</strong>";
// body.append(div);

// const strong = document.createElement("strong");
// strong.innerText = "Bold text again";
// body.append(strong);

//1.6 Remove existing HTML element or attributes
// const example = document.getElementById("example");
// const example = document.querySelector("#example");
// const child = document.querySelector("#child");
// example.remove();
// example.removeChild(child);

//1.7 Modify Element Attribute
const example = document.querySelector("#example");
const child = document.querySelector("#child");

console.log(child.getAttribute("class"));
child.setAttribute("class", "red");
child.removeAttribute("class");

//1.8 Modify data attribute
const data = document.querySelector("#data");
console.log("data.dataset", data.dataset);
console.log("data.dataset.lineColor", data.dataset.lineColor);

//1.9 Modify Element Classes
const editClass = document.querySelector("#edit-class");
// editClass.classList.add("new-class");
// editClass.classList.remove("h1");

//1.10 Modify Element style
const p = document.querySelector("#custom-style");
p.style.color = "red";
p.style.fontSize = "40px";

//2 HTML Event!
// 2.1 DOM Event
function onClick() {
  const message = document.querySelector("#message");
  message.innerHTML = "Success!";
}

function changeText(value) {
  const displayValue = document.querySelector("#display-value");
  displayValue.innerHTML = value;
}

//2.2 JavaScript HTML DOM EventListener
// loadPage();
function loadPage() {
  const showMoneyButton = document.querySelector("#showMoney");
  showMoneyButton.addEventListener("click", () => alert("Money come on!"));
}
