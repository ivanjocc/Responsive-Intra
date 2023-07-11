// var menuButton = document.querySelector(".menu");

// var navList = document.querySelector(".nav-list");

// menuButton.addEventListener("click", function () {
//   navList.classList.toggle("active");
// });

var menuButton = document.querySelector(".menu");
var navList = document.querySelector(".nav-list");

menuButton.addEventListener("click", function () {
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
});
