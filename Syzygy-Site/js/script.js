const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function initComparisons() {
    var x, i;
    
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
     
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      
      w = img.offsetWidth;
      h = img.offsetHeight;
      /*set the width of the img element to 50%:*/
      img.style.width = (w / 2) + "px";
   
      window.addEventListener("mousemove", slideMove);
      /*or touched (for touch screens:*/
  
      function slideMove(e) {
        var pos;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        /*get the x positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        /*resize the image:*/
        img.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  
  initComparisons();

  