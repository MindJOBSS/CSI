const spanList = document.querySelectorAll("span");

window.addEventListener("load" , function() {
    spanList.forEach(function(span , index) {
        setTimeout(function(){
            span.classList.add("appear");
        },250 * (index + 1));
    });
});