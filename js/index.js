var topSlider = modal = new Modal(),
    myForm = new Form(),
    comments = new Comments(),
    timer = new TimeCounter();

(function () {
    timer.timer();
})();

window.onload = function () {
    $('.comments').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    });
};

document.addEventListener("DOMContentLoaded", function() {
 var hvost = window.location.search.substring(1);
 
 var elements = document.getElementsByTagName('a');

 for (var i = 0; i < elements.length; i++) {
  var newHref = elements[i].href;
  if (newHref.indexOf("#")!=-1) continue;
  if (newHref.indexOf("?")==-1) newHref += "?";
  else newHref += "&#038;";
  if (hvost!="") elements[i].href = newHref + hvost;
 }
});