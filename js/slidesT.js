var slideIndexT = 1;
showSlidesT(slideIndexT);

function plusSlidesT(n) {
  showSlidesT(slideIndexT += n);
}

function currentSlideT(n) {
  showSlidesT(slideIndexT = n);
}

function showSlidesT(n) {
 var i;
	 var slidesT = document.getElementsByClassName("mySlidesT");
	 if (n > slidesT.length) {slideIndexT = 1}
	 if (n < 1) {slideIndexT = slidesT.length}
	 for (i = 0; i < slidesT.length; i++) {
	     slidesT[i].style.display = "none";
	 }
	 slidesT[slideIndexT-1].style.display = "block";
}
