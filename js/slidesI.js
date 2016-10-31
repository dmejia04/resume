var slideIndexI = 1;
showSlidesI(slideIndexI);


function plusSlidesI(n) {
  showSlidesI(slideIndexI += n);
}

function currentSlideI(n) {
  showSlidesI(slideIndexI = n);
}

function showSlidesI(n) {
 var i;
	 var slidesI = document.getElementsByClassName("mySlidesI");
	 if (n > slidesI.length) {slideIndexI = 1}
	 if (n < 1) {slideIndexI = slidesI.length}
	 for (i = 0; i < slidesI.length; i++) {
	     slidesI[i].style.display = "none";
	 }
	 slidesI[slideIndexI-1].style.display = "block";
}
