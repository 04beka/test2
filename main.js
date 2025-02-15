document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("search-button");
    var searchBox = document.getElementById("search-box");

    searchButton.addEventListener("click", function () {
        searchBox.classList.toggle("active"); // კლასი active ამატებს ან შლის
    });
});

// ბურგერ მენიუ


document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".hamburger-menu");
    var navMenu = document.querySelector(".nav-content");
    var searchButton = document.querySelector(".nav-actions"); 

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // თუ მენიუ გაიხსნა, Contact Us და სერჩი უნდა დაიმალოს
        if (navMenu.classList.contains("active")) {
            searchButton.style.display = "none";
        } else {
            searchButton.style.display = "flex";
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) {
            navMenu.classList.remove("active");
            searchButton.style.display = "flex";
        }
    });
});
