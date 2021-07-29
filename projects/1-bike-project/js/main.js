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

// Part two
/*When the submit button is pressed, it should check that all the form fields are valid:

The Your name, Email and Describe yourself fields need to be non-empty (Hint: their value length has to be greater than zero)
For the Email field also check if it contains the @ character
For all the fields that invalid, it should make their background color red. IF all the fields are valid, when you click Submit it should:

Display an alert to thank you for filling out the form
Blank out (make empty) all the text fields
Important hint: In your function that handles clicks on the Submit button you will need to call event.preventDefault() to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Eve*/
console.log("google");
const inputEmail = document.querySelector("#exampleInputEmail1");
const YourNames = document.querySelector("#example-text-input");
const textAreas = document.querySelector("#exampleTextarea");
const SubmitBtn = document.querySelector("form button");

SubmitBtn.addEventListener("click", (event) => {
  //function validSubmit() {
  let everyEmail = inputEmail.value;

  let everyNames = YourNames.value;
  let allText = textAreas.value;
  console.log(allText);
  
  if (everyEmail.length === 0 || everyEmail.includes("@") === false) {
    inputEmail.style.backgroundColor = "red";
  } else {
    inputEmail.style.backgroundColor = "#fff";
  }

  if (everyNames.length === 0) {
    YourNames.style.backgroundColor = "red";
  }else{
    YourNames.style.backgroundColor = "#fff";
  }
  if (allText.length === 0) {
    textAreas.style.backgroundColor = "red";
  }else{
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
