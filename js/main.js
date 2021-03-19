function qs(selectEl) {
  return document.querySelector(selectEl);
}

let red = qs("#red"),
  green = qs("#green"),
  blue = qs("#blue");

let redNumVal = qs("#redNum"),
  greenNumVal = qs("#greenNum"),
  blueNumVal = qs("#blueNum");

let colorDisplay = qs("#color-display");

let redLbl = qs("label[for=red]"),
  greenLbl = qs("label[for=green]"),
  blueLbl = qs("label[for=blue]");

function displayColors() {
  colorDisplay.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}

function colorNumbrVals() {
  redNumVal.value = red.value;
  greenNumVal.value = green.value;
  blueNumVal.value = blue.value;
}

function initSliderColors() {
  redLbl.style.background = `rgb(${red.value},0,0)`;
  greenLbl.style.background = `rgb(0,${green.value},0)`;
  blueLbl.style.background = `rgb(0,0,${blue.value})`;

  sliderFill(red);
  sliderFill(green);
  sliderFill(blue);
}

function sliderFill(clr) {
  let val = (clr.value - clr.min) / (clr.max - clr.min);
  let percent = val * 100;

  if (clr === red) {
    clr.style.background = `linear-gradient(to right, rgb(${clr.value},0,0) ${percent}%, #cccccc 0%)`;
  } else if (clr === green) {
    clr.style.background = `linear-gradient(to right, rgb(0,${clr.value},0) ${percent}%, #cccccc 0%)`;
  } else if (clr === blue) {
    clr.style.background = `linear-gradient(to right, rgb(0,0,${clr.value}) ${percent}%, #cccccc 0%)`;
  }
}

function changeRangeNumVal() {
  btnValues(redNumVal, red);
  btnValues(greenNumVal, green);
  btnValues(blueNumVal, blue);
}

function btnValues(btn, inputs) {
  btn.addEventListener("change", () => {
    if (btn.value > 255) {
      alert("cannot enter numbers greater than 255");
      btn.value = inputs.value;
    } else if (btn.value < 0) {
      alert("cannot enter numbers less than 0");
      btn.value = inputs.value;
    } else if (btn.value == "") {
      alert("cannot leave field empty");
      btn.value = inputs.value;
      initSliderColors();
      displayColors();
    } else {
      inputs.value = btn.value;
      initSliderColors();
      displayColors();
    }
  });
}

function colorSliders() {
  btnInputEvents(red);
  btnInputEvents(green);
  btnInputEvents(blue);
}

function btnInputEvents(btn) {
  btn.addEventListener("input", () => {
    displayColors();
    colorNumbrVals();
    initSliderColors();
    changeRangeNumVal();
  });
}

function init() {
  colorSliders();

  displayColors();

  colorNumbrVals();

  initSliderColors();

  changeRangeNumVal();
}

window.addEventListener("DOMContentLoaded", init);
