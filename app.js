//DOM - document object model
// access elements on the page, change content, add or remove elements dynamically
// respond to users interaction

// access ? GET ELEMENTS ON THE PAGE
// getelementbyid, getbytagName(h1, p), getelementbyClassnames
//console.log(heading);

// const heading = document.getElementById("hello");
// console.log(heading);
const paragraphs = document.getElementsByClassName("para1");

console.log(paragraphs);
console.log(paragraphs[0]);

//querySelector(first element), querySelectorAll (all elements that fits its selection)
// uses css selections .classname #idName div .error
// const para = document.querySelector("para1");
// const paras = document.querySelectorAll("para1");

// CHANGING CONTENT WITH JS

const heading = document.querySelector("#hello");
// heading.textcontent += ", js is fun";

const par = document.querySelector(".para1");
par.innerText = "hello don practice";

const myDiv = document.querySelector("div");
//  mydiv.innerHTML += "<p>p from js</p>";
const username = "John";
myDiv.innerHTML = `<h1>welcome ${username}</h1>`;

//change attributes
const beginPara = document.querySelector(".begin");

beginPara.id = "okay";
beginPara.className = "good";
beginPara.style.color = "green";
beginPara.style.backgroundColor = "purple";

// interact with styles (classnames)
const msgHeading = document.querySelector(".msg");
// classname (totally overide)
//msgHeading.className = "success";
// classList (add remove contain)
msgHeading.classList.add("success");
// msgHeading.classList.remove("msg");
console.log(msgHeading.classList.contains("msg"));

// create dom elements
const section = document.createElement("section");
section.innerHTML = "<h1>Created from JS</h1> <p>hello here</p>";

const body = document.querySelector("body");
body.appendChild(section);

// create a form and let it have two input filed of username password
// append the form to the body
const myform = document.createElement("form");
myform.innerHTML = `<input placeholder='username' type='text'>
                <input placeholder='password' type='password' >
                <button>Login</button>`;
body.appendChild(myform);
const link = document.createElement("a");
link.textContent = "Visit Facebook";
link.href = "https://facebook.com";

const nav = document.querySelector("nav");
nav.appendChild(link);

//responding to users interaction (click, submit, typing)
// event - (event listener) event handler

const btn = document.querySelector("button");

// log user clicked
btn.addEventListener("click", () => {
  console.log("user clicked");
  body.style.backgroundColor = "blue";
});
const body1 = document.querySelector(".textbtn");
const desc = document.querySelector(".desc");
body1.addEventListener("click", () => {
  console.log("user clicked");
  desc.style.display = "none";
});
// form handling -> submit (do sth)
// 1. prevent the default bahaviour of the form
// get the users input (.value)
const form = document.querySelector("form");
const usernameInput = document.querySelector("input");
const smallError = document.querySelector("small");

usernameInput.addEventListener("input", () => {
  const usernameValue = usernameInput.value;
  if (usernameValue.trim().length < 5) {
    smallError.textContent = "The min username length is 5";
    // usernameInput.style.border = "2px solid red";
    usernameInput.className = "error";
  } else {
    smallError.textContent = "";
    usernameInput.className = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = usernameInput.value;
  if (!usernameValue.trim()) {
    smallError.textContent = "please provide a username";
    usernameInput.className = "error";
  } else {
    console.log("form submitted", usernameValue);
    smallError.textContent = "";
    usernameInput.className = "";
  }
});
