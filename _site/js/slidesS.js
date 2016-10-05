var slideIndexS = 1;
showSlidesS(slideIndexS);

function plusSlidesS(n) {
  showSlidesS(slideIndexS += n);
}

function currentSlideS(n) {
  showSlidesS(slideIndexS = n);
}

function showSlidesS(n) {
 var i;
	 var slidesS = document.getElementsByClassName("mySlidesS");
	 if (n > slidesS.length) {slideIndexS = 1}
	 if (n < 1) {slideIndexS = slidesS.length}
	 for (i = 0; i < slidesS.length; i++) {
	     slidesS[i].style.display = "none";
	 }
	 slidesS[slideIndexS-1].style.display = "block";
}
