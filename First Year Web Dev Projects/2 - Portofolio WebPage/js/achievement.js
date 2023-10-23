const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
localStorage.removeItem("email");

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  localStorage.setItem("email", email);
  window.location.href = "contact.html";
});

// typewiter effect
var i = 0;
var txt1 =
  "1 - Completed a programming project using a new programming language.* 2 - Achieved an A in a challenging computer science course.* 3 - Presented a research paper on the impact of technology on society at a national conference.* 4 - Participated in a hackathon and placed in the top 3 teams.* 5 - Contributed to an open-source project on GitHub.";
var speed = 30;

var x = 0;
var txt2 =
  "6 - Completed a coding internship and gained real-world experience.* 7 - Received positive feedback from peers and professors on coding skills and teamwork.* 8 - Published a blog post about a programming topic and received positive feedback.* 9 - Became a member of a computer science club or organization and actively participated.* 10- Collaborated with classmates on a programming project and delivered a high-quality final product.";

function typeWriter() {
  if (txt1.charAt(i) === "*") {
    document.getElementById("demo").innerHTML += "<br/>";
    console.log("we were at the line break section");
    i++;
    setTimeout(typeWriter, speed);
  } else if (i < txt1.length) {
    document.getElementById("demo").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    if (txt2.charAt(x) === "*") {
      document.getElementById("demo1").innerHTML += "<br/>";
      console.log("we were at the line break section");
      x++;
      setTimeout(typeWriter, speed);
    } else if (x < txt2.length) {
      document.getElementById("demo1").innerHTML += txt2.charAt(x);
      x++;
      setTimeout(typeWriter, speed);
    }
  }
}

setTimeout(function () {
  typeWriter();
}, 1500);

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
