var calcArr = [];

function updateDisplay() {
  
  var arrLength = 0;
  if (calcArr.length > 0){
  for (var i = 0; i<calcArr.length; i++){
    arrLength += calcArr[i].length;
  }}
  
  if (arrLength === 0) {
    $("#inputField").html("0");
  } else {
    var input = calcArr.join("");
    if (input.length > 18){
      input = "..." + input.slice(input.length-15);
    }
    $("#inputField").html(input);
  }
}

function tabulate(input) {
  calcArr.push(input);
  updateDisplay();
}

function clearInput() {
  calcArr = [];
  updateDisplay();
}

function clearEntry() {
  if (calcArr.length === 0){ 
    clearInput(); 
    return;
  }
  else {
  var revArr = calcArr.reverse();
  var lastEntry = 0;
  var multipleEntries = false;
  for (var i = 0; i < revArr.length; i++) {
    if (revArr[i].indexOf(" ") !== -1) {
      lastEntry = i;
      multipleEntries = true;
      break;
    }
  }
  if (multipleEntries === false) {
    clearInput();
  } else {
    revArr = revArr.slice(lastEntry + 1);
    calcArr = revArr.reverse();
    updateDisplay();
  }
  }
}

function plus() {
  var lastPos = calcArr.length - 1;
  if (calcArr[lastPos].indexOf(" ") === -1) {
    calcArr.push(" + ");
    updateDisplay();
  }
}

function minus() {
  var lastPos = calcArr.length - 1;
  if (calcArr[lastPos].indexOf(" ") === -1) {
    calcArr.push(" - ");
    updateDisplay();
  }
}

function times() {
  var lastPos = calcArr.length - 1;
  if (calcArr[lastPos].indexOf(" ") === -1) {
    calcArr.push(" * ");
    updateDisplay();
  }
}

function divide() {
  var lastPos = calcArr.length - 1;
  if (calcArr[lastPos].indexOf(" ") === -1) {
    calcArr.push(" / ");
    updateDisplay();
  }
}

function equals() {
  var equalStr = calcArr.join("");
  $("#inputField").html(eval(equalStr));
  calcArr = [];
}

$("document").ready(function() {
  var data;

  $(".beepboop").on("click", function() {
    data = this.id;

    if (data === "clear") {
      clearInput();
    } else if (data === "dot") {
      tabulate(".");
    } else if (data === "ce") {
      clearEntry();
    } else if (data === "plus") {
      plus();
    } else if (data === "minus") {
      minus();
    } else if (data === "times") {
      times();
    } else if (data === "divide") {
      divide();
    } else if (data === "equals") {
      equals();
    } else if (data >= 0) {
      tabulate(data);
    }
  });
  
});