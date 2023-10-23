const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const email = localStorage.getItem("email");
document.getElementById("email1").value = email;

// document.querySelector() is used to select an element from the document using its ID
let captchaText = document.querySelector("#captcha");
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.querySelector("#textBox");
let submitButton = document.querySelector("#submitButton");
let output = document.querySelector("#output");
let refreshButton = document.querySelector("#refreshButton");

// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let emptyArr = [];

// This loop generates a random string of 6 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 6; i++) {
  emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join("");
ctx.fillText(emptyArr.join(""), captchaText.width / 4, captchaText.height / 2);

// This event listener is stimulated whenever the user press the "Refresh" button
// A new random CAPTCHA is generated and displayed after the user clicks the "Refresh" button
refreshButton.addEventListener("click", function () {
  userText.value = "";
  let refreshArr = [];
  for (let j = 1; j <= 6; j++) {
    refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
  c = refreshArr.join("");
  ctx.fillText(
    refreshArr.join(""),
    captchaText.width / 4,
    captchaText.height / 2
  );
  output.innerHTML = "";
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting by default
  if (validateForm()) {
    event.target.submit(); // submit the form if it is valid
  }
});

//Form Validation
function validateForm() {
  const errors = document.getElementsByClassName("errors");
  for (let i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
  let name_val = document.getElementById("name").value;
  if (name_val == "" || name_val == null) {
    document.getElementById("error1").innerHTML = "Please enter your name";
    return false;
  } else if (name_val.length > 30) {
    document.getElementById("error1").innerHTML =
      "Please enter your name with less than 30 characters";
    return false;
  }
  let company_val = document.getElementById("website").value;
  if (company_val != "" && company_val != null && !validateURL(company_val)) {
    document.getElementById("error6").innerHTML = "Please enter a valid url";
    return false;
  } else if (company_val.length > 70) {
    document.getElementById("error6").innerHTML =
      "Please enter your website with less than 70 characters";
    return false;
  }

  let email1_val = document.getElementById("email1").value;
  let email2_val = document.getElementById("email2").value;
  if (email1_val == "" || email1_val == null) {
    document.getElementById("error2").innerHTML =
      "Please enter an email address";
    return false;
  } else if (!validateEmail(email1_val)) {
    document.getElementById("error2").innerHTML =
      "Please enter a valid email address";
    return false;
  } else if (email1_val !== email2_val) {
    document.getElementById("error3").innerHTML =
      "Email addresses do not match";
    return false;
  }

  let query_val = document.getElementById("query").value;
  if (query_val == "" || query_val == null) {
    document.getElementById("error4").innerHTML = "Please enter your query";
    return false;
  } else if (query_val.length > 300) {
    document.getElementById("error4").innerHTML =
      "Exceed maximum characters = 300";
    return false;
  }

  let captcha_val = document.getElementById("textBox").value;
  if (captcha_val == "" || captcha_val == null) {
    document.getElementById("error5").innerHTML = "Please enter the captcha";
    return false;
  } else if (captcha_val != c) {
    document.getElementById("error5").innerHTML =
      "Captcha Incorrect, please try again";
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
function validateURL(url) {
  const urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
  return urlRegex.test(url);
}

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);
