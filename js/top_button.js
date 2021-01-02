mybutton = document.getElementById("top_btn");

window.onscroll = function() {scroll_function()};

function scroll_function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function top_function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}