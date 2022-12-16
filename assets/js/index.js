const sideMenu = document.querySelector("#aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
    sideMenu.style.animation = "showMenu 400ms ease forwards";
});

// close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.animation = "hideMenu 400ms ease reverse";
});

// change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeToggler.querySelectorAll("span").forEach((item) => {
        item.classList.toggle("active");
    });
});
