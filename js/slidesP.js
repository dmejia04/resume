var slideIndexP = 1;
showSlidesP(slideIndexP);

function plusSlidesP(n) {
  showSlidesP(slideIndexP += n);
}

function currentSlideP(n) {
  showSlidesP(slideIndexP = n);
}

function showSlidesP(n) {
 var i;
	 var slidesP = document.getElementsByClassName("mySlidesP");
	 if (n > slidesP.length) {slideIndexP = 1}
	 if (n < 1) {slideIndexP = slidesP.length}
	 for (i = 0; i < slidesP.length; i++) {
	     slidesP[i].style.display = "none";
	 }
	 slidesP[slideIndexP-1].style.display = "block";
}
