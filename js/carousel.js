function calculate_width(){
    let width = window.innerWidth
    let carousel_width = 0;

        if (width > 1460) {
            carousel_width = width * 0.6;
        }
        else if (width <= 1460 && width > 1000){
            carousel_width = width * 0.7;
        }
        else if (width <= 1000 && width > 768){
            carousel_width = width * 0.8;
        }
        else if (width <= 768 && width > 502){
            carousel_width = width * 0.85;
        }
        else{
            carousel_width = width * 0.9;
        }
    return carousel_width;
}

function calculate_height(carousel_width){
    let carousel_height = (1080 / 1920) * carousel_width;

    return carousel_height;
}

function carousel_scale(){
    const carousel_slide = document.querySelector(".carousel-slide");
    const carousel_images = document.querySelectorAll(".carousel-slide img");
    
    window.addEventListener('DOMContentLoaded', function(){
        let carousel_width = calculate_width();
        let carousel_height = calculate_height(carousel_width);

        carousel_slide.style.height = `${carousel_height}px`;

        for (let i = 0; i < carousel_images.length; i++){
            carousel_images[i].width = `${carousel_width}`;
        }
    })

    window.addEventListener('resize', function(){
        let carousel_width = calculate_width();
        let carousel_height = calculate_height(carousel_width);

        carousel_slide.style.height = `${carousel_height}px`;

        for (let i = 0; i < carousel_images.length; i++){
            carousel_images[i].width = `${carousel_width}`;
        }

        // FIXME - Fix scaling, positioning, and scrolling when scaling window.
        
    })
}

function carousel(){
    const carousel_slide = document.querySelector(".carousel-slide");
    const carousel_images = document.querySelectorAll(".carousel-slide img");

    const prev_btn = document.querySelector("#prev_btn");
    const next_btn = document.querySelector("#next_btn");

    let counter = 1;
    carousel_slide.style.transition = "none";

    carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';

    next_btn.addEventListener('click', function(){
        if (counter >= carousel_images.length - 1) return;
        carousel_slide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';
    });

    prev_btn.addEventListener('click', function(){
        if (counter <= 0) return;
        carousel_slide.style.transition = "transform 0.4s ease-in-out";
        counter--;

        carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';
    });

    carousel_slide.addEventListener('transitionend', function(){
        if (carousel_images[counter].id === 'last_clone'){
            carousel_slide.style.transition = "none";
            counter = carousel_images.length - 2;

            carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';
        }
        if (carousel_images[counter].id === 'first_clone'){
            carousel_slide.style.transition = "none";
            counter = carousel_images.length - counter;
            carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';
        }
    });

    window.addEventListener('resize', function(){
        carousel_slide.style.transition = "none";
        carousel_slide.style.transform = 'translateX(' + (-calculate_width() * counter) + 'px)';
    })
}

carousel_scale();
carousel();