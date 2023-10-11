var slideIndex = 1;
showSlides(slideIndex);

function showSlides(m) {
  let i;
  let slides = document.getElementsByClassName("ss");
  let dots = document.getElementsByClassName("point");
  if (m > slides.length) {slideIndex = 1}
  if (m < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function currentSlide(m) {
  showSlides(slideIndex = m);
}
function plusSlides(m) {
  showSlides(slideIndex += m);
}