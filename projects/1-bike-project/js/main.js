//selecting the elements
//coloured buttons
const blueButton = document.getElementById("blueBtn");
const greenButton = document.getElementById("greenBtn");
const orangeButton = document.getElementById("orangeBtn");
//jumbotron, donate and volunteer buttons
const jumbotron = document.querySelector(".jumbotron");
const donateButton = document.querySelector(".btn.btn-primary.btn-lrg");
const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg");

//adding event listeners to the variables
blueButton.addEventListener("click", clickBluBtn);
orangeButton.addEventListener("click", clickOrangBtn);
greenButton.addEventListener("click", clickGreenBtn);

//button function
function clickBluBtn() {
  jumbotron.style.backgroundColor = "#588fbd";
  donateButton.style.backgroundColor = "#ffa500";
  volunteerButton.style.backgroundColor = "#000";
  volunteerButton.style.color = "#fff";
}

function clickOrangBtn() {
  jumbotron.style.backgroundColor = "#f0ad4e";
  donateButton.style.backgroundColor = "#5751fd";
  volunteerButton.style.backgroundColor = "#31b0d5";
  volunteerButton.style.color = "#fff";
}
function clickGreenBtn() {
  jumbotron.style.backgroundColor = "#87ca8a";
  donateButton.style.backgroundColor = "black";
  volunteerButton.style.backgroundColor = "#8c9c08";
}

const inputEmail = document.querySelector("#exampleInputEmail1");
const YourNames = document.querySelector("#example-text-input");
const textAreas = document.querySelector("#exampleTextarea");
const SubmitBtn = document.querySelector("form button");

SubmitBtn.addEventListener("click", (event) => {
  //function validSubmit() {
  let everyEmail = inputEmail.value;

  let everyNames = YourNames.value;
  let allText = textAreas.value;

  if (everyEmail.length === 0 || everyEmail.includes("@") === false) {
    inputEmail.style.backgroundColor = "red";
  } else {
    inputEmail.style.backgroundColor = "#fff";
  }

  if (everyNames.length === 0) {
    YourNames.style.backgroundColor = "red";
  } else {
    YourNames.style.backgroundColor = "#fff";
  }
  if (allText.length === 0) {
    textAreas.style.backgroundColor = "red";
  } else {
    textAreas.style.backgroundColor = "#fff";
  }
  if (
    everyEmail.length > 0 &&
    everyEmail.includes("@") &&
    everyNames.length > 0 &&
    allText.length > 0
  ) {
    alert("Thank you for filling out the form !");
    everyEmail = "";

    everyNames = "";

    allText = "";
  }
  event.preventDefault();
});
//SubmitBtn.addEventListener("click", validSubmit);
