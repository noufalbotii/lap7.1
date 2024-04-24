document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var color = document.getElementById("colorInput").value;
    document.getElementById("header").style.color = color;
});