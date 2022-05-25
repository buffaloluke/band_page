console.log(" called");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //Hole navbar li Elemente
  let elems = document.querySelectorAll("li");
  let length = elems.length;
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("band-title").style.fontSize = "5vh";
    document.getElementById("band-title").style.marginBottom = "0px";
    document.getElementById("band-title").style.transition = "0.3s ease";

    for (let index = 0; index < length; index++) {
      elems[index].style.fontSize = "4vh";
    }
  } else {
    document.getElementById("band-title").style.fontSize = "8vh";
    document.getElementById("band-title").style.marginBottom = "0.67em";
    for (let index = 0; index < length; index++) {
      elems[index].style.fontSize = "5vh";
      elems[index].style.transition = "0.3s ease";
    }
  }
}
