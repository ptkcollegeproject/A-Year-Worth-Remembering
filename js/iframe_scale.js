function setAspectRatio(){
    document.addEventListener('DOMContentLoaded', function(){
        if (window.innerWidth > 1460){
            var width = window.innerWidth * 0.5;
        }
        else if (window.innerWidth <= 1460 && window.innerWidth > 1000){
            var width = window.innerWidth * 0.6;
        }
        else if (window.innerWidth <= 1000 && window.innerWidth > 768){
            var width = window.innerWidth * 0.7;
        }
        else if (window.innerWidth <= 768 && window.innerWidth > 502){
            var width = window.innerWidth * 0.8;
        }
        else {
            var width = window.innerWidth * 0.9;
        }
        var height = (1080 / 1920) * width;

        document.getElementById('iframe_scale').width = `${width}`;
        document.getElementById('iframe_scale').height = `${height}`;
    })
    window.addEventListener('resize', function(){
        if (window.innerWidth > 1460){
            var width = window.innerWidth * 0.5;
        }
        else if (window.innerWidth <= 1460 && window.innerWidth > 1000){
            var width = window.innerWidth * 0.6;
        }
        else if (window.innerWidth <= 1000 && window.innerWidth > 768){
            var width = window.innerWidth * 0.7;
        }
        else if (window.innerWidth <= 768 && window.innerWidth > 502){
            var width = window.innerWidth * 0.8;
        }
        else {
            var width = window.innerWidth * 0.9;
        }
        var height = (1080 / 1920) * width;

        document.getElementById('iframe_scale').width = `${width}`;
        document.getElementById('iframe_scale').height = `${height}`;
    })
}

setAspectRatio();