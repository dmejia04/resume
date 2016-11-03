var slideIndexF = 1;
showSlidesF(slideIndexF);

function plusSlidesF(n) {
  showSlidesF(slideIndexF += n);
}

function currentSlideF(n) {
  showSlidesF(slideIndexF = n);
}

function showSlidesF(n) {
 var i;
	 var slidesF = document.getElementsByClassName("mySlidesF");
	 if (n > slidesF.length) {slideIndexF = 1}
	 if (n < 1) {slideIndexF = slidesF.length}
	 for (i = 0; i < slidesF.length; i++) {
	     slidesF[i].style.display = "none";
	 }
	 slidesF[slideIndexF-1].style.display = "block";
}
