function open(pageName) {
    window.location.href = pageName;
}
document.getElementById("bajnokok").addEventListener("click", function() {
    open("bajnokok.html"); 
});

document.getElementById("webshop").addEventListener("click", function() {
    open("webshop.html");
});
document.getElementById("eventkereso").addEventListener("click", function() {
    open("eventkereso.html"); 
});