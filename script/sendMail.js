console.log(' called');


let sendEmail = function() {
    Email.send({
      Host: "mail.gmx.net",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'buffalo_luke@gmx.at',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
  }

let submitHandler = function(e) { // erstelle eine eigene Funktion mit Namen
    e.preventDefault(); //das Submit Daten nicht verschickt sondern weiterverarbeitet werden
    console.log('Submit called');
    sendEmail();

  }




document.getElementById ('inputform').onsubmit = submitHandler;