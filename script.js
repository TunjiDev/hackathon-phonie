"use strict";

const input = document.querySelector(".input");
const img = document.querySelector("img");
const removeHiddenClass = function () {
  img.classList.remove("hidden");
};

const mtnRegex = /^(0803|0806|0703|0706|0810|0813)/;
const mtnRegex234 = /^[+]234(0803|0806|0703|0706|0810|0813)/;
const mtnRegexOther = /^[+]234(803|806|703|706|810|813)/;
const gloRegex = /^(0805|0807|0705|0905|0815|0811)/;
const gloRegex234 = /^[+]234(0805|0807|0705|0905|0815|0811)/;
const gloRegexOther = /^[+]234(805|807|705|905|815|811)/;
const airtelRegex = /^(0808|0708|0701|0902|0907|0901)/;
const airtelRegex234 = /^[+]234(0808|0708|0701|0902|0907|0901)/;
const airtelRegexOther = /^[+]234(808|708|701|902|907|901)/;
const etisalatRegex = /^(0809|0818|0817|0909)/;
const etisalatRegex234 = /^[+]234(0809|0818|0817|0909)/;
const etisalatRegexOther = /^[+]234(809|818|817|909)/;

function checkMtnRegex() {
  return (
    mtnRegex.test(input.value) ||
    mtnRegex234.test(input.value) ||
    mtnRegexOther.test(input.value)
  );
}

function checkGloRegex() {
  return (
    gloRegex.test(input.value) ||
    gloRegex234.test(input.value) ||
    gloRegexOther.test(input.value)
  );
}

function checkAirtelRegex() {
  return (
    airtelRegex.test(input.value) ||
    airtelRegex234.test(input.value) ||
    airtelRegexOther.test(input.value)
  );
}

function checkEtisalatRegex() {
  return (
    etisalatRegex.test(input.value) ||
    etisalatRegex234.test(input.value) ||
    etisalatRegexOther.test(input.value)
  );
}

input.addEventListener("input", () => {
  switch (true) {
    case checkMtnRegex():
      img.src = "images/mtn.jpg";
      removeHiddenClass();
      break;

    case checkGloRegex():
      img.src = "images/glo.jpg";
      removeHiddenClass();
      break;

    case checkAirtelRegex():
      img.src = "images/airtel.png";
      removeHiddenClass();
      break;

    case checkEtisalatRegex():
      img.src = "images/etisalat.png";
      removeHiddenClass();
      break;

    default:
      img.classList.add("hidden");
  }
});
