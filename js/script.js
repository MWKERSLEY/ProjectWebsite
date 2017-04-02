/* JS file*/

// The code below is for Parallax scrolling of background images

(function () {
    
    var myParallax = document.querySelectorAll("#home"), speed = 0.5;
    
    window.onscroll = function() {
        myParallax.forEach(function(elP) {
            var windowYOffset = - window.pageYOffset, elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";

            elP.style.backgroundPosition = elPBackgroundPos;
        })
    }
}) ();
