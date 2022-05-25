console.log("called");

let currentImage = 0;

var images = [
  "band.jpg",
  "member1.jpg",
  "member2.jpg",
  "member3.jpg",
  "member4.jpg",
  "member5.jpg",
  "member6.jpg",
];

var clickHandlerCircle = function (e) {
  currentImage = $(e.target).attr("data-i") * 1; //hole data-i Attribut, enthält Nummer von 0...6 //e.target == aktuell geklickte Element

  showImage(currentImage);
};

for (let i in images) {
  //erzeuge so viele Kreis-Buttons wie es Bilder gibt

  $("<b>")
    .attr("data-i", i) //Punkte 0...6 für Bilder 0...6
    .on("click", clickHandlerCircle)
    .appendTo(".dots");
}

var showImage = function (nr) {
  $(" #image ").css({
    backgroundImage: "url(../img/" + images[currentImage] + ")",
  });

  $("nav b").removeClass("aktiv").eq(nr).addClass("aktiv"); //hier angesiedelt damit Kugel bei Klick auf Kugel und Button wandert
};

var clickHandlerNext = function (e) {
  currentImage += 1;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  showImage(currentImage);
};

var clickHandlerPrevious = function (e) {
  currentImage -= 1;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  showImage(currentImage);
};

$("#next").on("click", clickHandlerNext);

$("#previous").on("click", clickHandlerPrevious);

showImage(0); //bei Start zeige erste Bild
