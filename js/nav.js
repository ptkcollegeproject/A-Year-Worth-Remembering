function nav_slide(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const nav_links = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', function(){
        // Toggle Nav
        nav.classList.toggle('nav_active');

        // Animate Links
        nav_links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = null;
            }
            else {
                link.style.animation = `nav_link_fade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

nav_slide();