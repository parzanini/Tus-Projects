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

let x = document.getElementById("text_box");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

button1.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Introduction to Computer Science</h2>\
<p>During this module, I will learn about the fundamentals of computer science, including programming languages, algorithms, and data structures. I will also gain a solid understanding of computer architecture, which will enable me to understand how computers work and how software interacts with hardware. Additionally, I will learn about operating systems, including how they manage computer resources and how they provide a platform for software to run on. By the end of this module, I will have a strong foundation in computer science that will serve as the basis for my further studies in this field.</p>";
});

button2.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Data Structures and Algorithms</h2>\
    <p> This module will teach me about the fundamental building blocks of computer science - data structures and algorithms.I will learn about different types of data structures, such as arrays, linked lists, trees, and graphs, and how to implement them in code.I will also learn about various algorithms, such as sorting and searching, and how to analyze their performance.By the end of this module, I will have a solid understanding of the importance of data structures and algorithms in computer science and how to apply them in practical problem - solving.</p > ";
});
button3.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Database Systems</h2>\
    <p> In this module, I will learn about the fundamental concepts of database systems, including relational database management systems, SQL, and NoSQL databases.I will gain an understanding of database design and implementation, as well as data warehousing and business intelligence.I will also learn how to use SQL to manipulate and query data in a database.By the end of this module, I will be able to design and implement a database system that can handle large amounts of data efficiently and effectively.</p > ";
});
button4.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Web Development</h2>\
    <p> This module will teach me about the basics of web development, including HTML, CSS, and JavaScript.I will learn how to create interactive web pages and how to style them using CSS.I will also gain an understanding of client - side and server - side web development, as well as web frameworks such as React, Angular, and Vue.I will also learn about API development and integration.By the end of this module, I will be able to create a functional web application from scratch.</p > ";
});
button5.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Mobile Development</h2>\
    <p> In this module, I will learn about the fundamental concepts of mobile app development.I will gain an understanding of the differences between native and hybrid mobile apps, as well as mobile frameworks such as React Native, Ionic, and Flutter.I will also learn about mobile app deployment and distribution.By the end of this module, I will be able to create and deploy a functional mobile app.</p > ";
});
button6.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Software Engineering</h2>\
    <p> This module will teach me about the software development life cycle, including agile methodologies and version control systems such as Git.I will learn about software testing and quality assurance, as well as the importance of user experience in software design.I will also gain an understanding of how to manage software projects effectively.By the end of this module, I will be able to lead a software development project from start to finish.</p > ";
});
button7.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Computer Networks</h2>\
    <p> This module will teach me about the fundamentals of computer networks, including network topologies and protocols.I will learn about different types of networks, such as LAN, WAN, and MAN, and how they operate.I will also gain an understanding of network security and cryptography, as well as cloud computing and virtualization.By the end of this module, I will be able to design and implement a secure and efficient computer network.</p > ";
});
button8.addEventListener("click", function () {
  x.innerHTML =
    "<h2>Artificial Intelligence</h2>\
        <p>This module will cover the basics of artificial intelligence, including machine learning, neural networks, deep learning, natural language processing, and robotics. I'll learn how these technologies are used in various applications, such as image recognition, speech recognition, and autonomous systems. By the end of this module, I'll have a good understanding of the key concepts in AI and the potential of these technologies in solving complex problems.</p>";
});

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
