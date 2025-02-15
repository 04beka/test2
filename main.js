document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("search-button");
    var searchBox = document.getElementById("search-box");

    searchButton.addEventListener("click", function () {
        searchBox.classList.toggle("active"); // კლასი active ამატებს ან შლის
    });
});
