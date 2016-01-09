
var header = document.getElementById("header-img");
var title = document.getElementsByTagName("header")[0].childNodes[1].childNodes[1];

header.addEventListener("mouseover", function( event ) { 
    event.preventDefault();
    title.style.color = "#DF7D1D";
})  

header.addEventListener("mouseout", function( event ) { 
    event.preventDefault();
    title.style.color = "#111111";
})  



