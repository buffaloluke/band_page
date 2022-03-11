console.log(" called");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("band-title").style.fontSize = "5vh";
    document.getElementById("band-title").style.marginBottom = "0px";
  } else {
    document.getElementById("band-title").style.fontSize = "8vh";
    document.getElementById("band-title").style.marginBottom = "0.67em";
  }
}
