var responsiveSlider2 = function() {

    var slider2 = document.getElementById("slider2");
    var sliderWidth2 = slider2.offsetWidth;
    var slideList2 = document.getElementById("slideWrap2");
    var count2 = 1;
    var items2 = slideList2.querySelectorAll("li").length;
    var prev2 = document.getElementById("prev2");
    var next2 = document.getElementById("next2");


    window.addEventListener("resize", function() {
        sliderWidth2 = slider2.offsetWidth;
    });

    var prevSlide2 = function() {
        if(count2 > 1) {
            count2 = count2 - 2;
            slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
            count2++;
        }
        else if(count2 = 1) {
            count2 = items2 - 1;
            slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
            count2++;
        }
    };
    
    var nextSlide2 = function() {
        if(count2 < items2) {
            slideList2.style.left = "-" + count2 * sliderWidth2 + "px";
            count2++;
        }
        else if(count2 = items2) {
            slideList2.style.left = "0px"
            count2 = 1;
        }
    };
        next2.addEventListener("click", function() {
            nextSlide2();
        });

        prev2.addEventListener("click", function() {
            prevSlide2();
        });

        setInterval(function() {
            nextSlide2()
        }, 5000);
};

window.onload = function () {
    responsiveSlider2();
}