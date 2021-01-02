function image_resize(){
    document.addEventListener('DOMContentLoaded', function(){
        var width = window.innerWidth;
        document.querySelectorAll('.text_logo').forEach(function(element){
            element.style.width = `${width / 2}px`;
        })
    })

    window.addEventListener('resize', function(){
        var width = window.innerWidth;
        document.querySelectorAll('.text_logo').forEach(function(element){
            element.style.width = `${width / 2}px`;
        });
    });
}

image_resize();
