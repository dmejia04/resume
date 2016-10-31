var slideIndexFH = 1;
showSlidesFH(slideIndexFH);

function plusSlidesFH(n) {
  showSlidesFH(slideIndexFH += n);
}

function currentSlideFH(n) {
  showSlidesFH(slideIndexFH = n);
}

function showSlidesFH(n) {
 var i;
	 var slidesFH = document.getElementsByClassName("mySlidesFH");
	 if (n > slidesFH.length) {slideIndexFH = 1}
	 if (n < 1) {slideIndexFH = slidesFH.length}
	 for (i = 0; i < slidesFH.length; i++) {
	     slidesFH[i].style.display = "none";
	 }
	 slidesFH[slideIndexFH-1].style.display = "block";
}
