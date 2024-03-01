document.addEventListener('DOMContentLoaded', function() {

  //initalise
  var conditionValidName = false;
  var conditionPasswordMatch = false;
  var conditionValidEmail = false;
  var conditionStrongPassword = false;
  var conditiontime = false;
  var conditionname = false;
  var conditiondate = false;
  var conditionpurpose = false;

  //login toggle
  var changeType = document.querySelector(".password");
  var eyeOpen = document.querySelector(".eye");
  if (eyeOpen) {
    var eyeIcon_change = eyeOpen.querySelector("i");
    eyeOpen.addEventListener("click", function() {
      changeType.type = changeType.type === 'password' ? 'text' : 'password';
      eyeIcon_change.classList.toggle("fa-eye");
      eyeIcon_change.classList.toggle("fa-eye-slash");
    });
  }

  //eye toggling for the password
  var change_type = document.querySelector("#first_pw");
  var eye_open = document.querySelector("#first_eye");
  if (eye_open) {
    var eye_icon_change = eye_open.querySelector("i");
    eye_open.addEventListener("click", function() {
      change_type.type = change_type.type === 'password' ? 'text' : 'password';
      eye_icon_change.classList.toggle("fa-eye");
      eye_icon_change.classList.toggle("fa-eye-slash");
    });
  }

  //eye toggling for the repassword
  var rechange_type = document.querySelector("#sec_pw");
  var reeye_open = document.querySelector("#sec_eye");
  if (reeye_open) {
    var reeye_icon_change = reeye_open.querySelector("i");
    reeye_open.addEventListener("click", function() {
      rechange_type.type = rechange_type.type === 'password' ? 'text' : 'password';
      reeye_icon_change.classList.toggle("fa-eye");
      reeye_icon_change.classList.toggle("fa-eye-slash");
    });
  }

  //check if name is empty
  var validName = document.getElementById("name");
  if (validName) {
    validName.addEventListener("input", function() {
      if (validName.value === "") {
        conditionValidName = false;
        enableSubmitButton();
      } else {
        conditionValidName = true;
        enableSubmitButton();
      }
    });
  }

  //to make sure register button is only enabled when the 2 password matches
  var first_pass = document.getElementById('first_pw');
  var second_pass = document.getElementById('sec_pw');
  if (second_pass) {
    document.getElementById('sec_pw').addEventListener("input", function() {
      if (first_pass.value === second_pass.value) {
        conditionPasswordMatch = true;
        enableSubmitButton();
      }
      else {
        conditionPasswordMatch = false;
        enableSubmitButton();
      }
    });
  }

  //make sure register button only works only if email follows correct format
  var email = document.getElementById("email");
  var invalid = document.getElementById("invalid_email");
  if (invalid) {
    var pattern = email.getAttribute("pattern");
    var regex = new RegExp(pattern);
    email.addEventListener('input', function() {
      if (email.value === '') {
        invalid.style.display = 'block';
        conditionValidEmail = false;
        enableSubmitButton();
      }
      else if (regex.test(email.value)) {
        invalid.style.display = 'none';
        conditionValidEmail = true;
        enableSubmitButton();
      }
      else {
        invalid.style.display = 'block';
        conditionValidEmail = false;
        enableSubmitButton();
      }
    });
  }

  //to make sure pw is of 8 length
  var password = document.getElementById("first_pw");
  var invalid_pw = document.getElementById("invalid_pw");
  if (invalid_pw) {
    password.addEventListener("input", function() {
      if (password.value.length < 8) {
        invalid_pw.style.display = "block";
        conditionStrongPassword = false;
        enableSubmitButton();
      }
      else {
        invalid_pw.style.display = "none";
        conditionStrongPassword = true;
        enableSubmitButton();
      }
    });
  }

  //pop up for the successful registration
  var popUp = document.getElementById("popUp");
  if (popUp) {
    popUp.addEventListener("submit", function() {
      alert("Successful registration! Please log in again with your new credentials.");
    });
  }

  //function to enable submit button
  function enableSubmitButton() {
    var submit = document.getElementById('submit');
    if (conditionValidName === true && conditionPasswordMatch === true && conditionValidEmail === true && conditionStrongPassword === true) {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  }

  //update photo and text
  function changePicture(newSrc) {
    var imgElement = document.getElementById("switch");
    imgElement.src = newSrc;
  }

  function changeText(newText) {
    var choice = document.getElementById("details");
    choice.innerHTML = newText;
  }

  var item0 = document.getElementById("item0");
  if (item0) {
    item0.addEventListener("click", function() {
      changePicture("static/space1.jpg");
      changeText(choice1);
    });
  }

  var item1 = document.getElementById("item1");
  if (item1) {
    item1.addEventListener("click", function() {
      changePicture("static/space2.jpg");
      changeText(choice2);
    });
  }
  var item2 = document.getElementById("item2");
  if (item2) {
    item2.addEventListener("click", function() {
      changePicture("static/space3.jpg");
      changeText(choice3);
    });
  }

  //check whether timestart earlier than timeend
  var timestart = document.getElementById("bktimestart");
  var timeend = document.getElementById("bktimeend");
  if (timeend) {
    timeend.addEventListener("input", function() {
      if (timestart.value < timeend.value) {
        conditiontime = true;
        enablebookbutton();
      }
      else {
        conditiontime = false;
        enablebookbutton();
      }
    });
  }

  //check if name is empty
  var name = document.getElementById("bkname");
  if (name) {
    name.addEventListener("input", function() {
      if (name.value === "") {
        conditionname = false;
        enablebookbutton();
      } else {
        conditionname = true;
        enablebookbutton();
      }
    });
  }

  //check if purpose is empty
  var purpose = document.getElementById("bkpurpose");
  if (purpose) {
    purpose.addEventListener("input", function() {
      if (purpose.value === "") {
        conditionpurpose = false;
        enablebookbutton();
      } else {
        conditionpurpose = true;
        enablebookbutton();
      }
    });
  }

  //check if date is empty
  var date = document.getElementById("bkdate");
  if (date) {
    date.addEventListener("input", function() {
      if (date.value === "") {
        conditiondate = false;
        enablebookbutton();
      } else {
        conditiondate = true;
        enablebookbutton();
      }
    });
  }

  function enablebookbutton() {
    var book = document.getElementById('bookin');
    if (conditionname === true && conditionpurpose === true && conditiondate === true && conditiontime === true) {
      book.disabled = false;
    } else {
      book.disabled = true;
    }
  }












  //SPACE 1 BLOCK
  var choice1 = `
<div class="feath">
  KEY FEATURES
</div>
<ul class="dets">
  <li>Buffet provision</li>
  <li>Snacks and beverages provision</li>
  <li>Stage</li>
</ul>
<div class="feath">
  PRICE
</div>
<ul class="dets">
  <li>$110</li>
</ul>
<div class="feath">
  AMBIENCE
</div>
<ul class="dets">
  <li>Formal/Informal</li>
</ul>
`;


  //SPACE 2
  var choice2 = `
<div class="feath">
KEY FEATURES
</div>
<ul class="dets">
<li>Meeting room</li>
<li>Snacks and beverages provision</li>
<li>Card and board games</li>
</ul>
<div class="feath">
PRICE
</div>
<ul class="dets">
<li>$90</li>
</ul>
<div class="feath">
AMBIENCE
</div>
<ul class="dets">
<li>Informal</li>
</ul>
`;


  //SPACE 3
  var choice3 = `
<div class="feath">
KEY FEATURES
</div>
<ul class="dets">
<li>Empty area</li>
<li>Permitted to modify area as how one wishes</li>
<li>Provision of chairs and tables if required </li>
</ul>
<div class="feath">
PRICE
</div>
<ul class="dets">
<li>$60</li>
</ul>
<div class="feath">
AMBIENCE
</div>
<ul class="dets">
<li>Formal</li>
</ul>
`;





});