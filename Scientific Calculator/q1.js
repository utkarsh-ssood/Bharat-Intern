function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function backspace() {
    var display = document.getElementById("display");
    // display.value = display.value.slice(0, -1);
    display.value = display.value.pop();
  }
  
  function calculate() {
    var display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateSin() {
    var display = document.getElementById("display");
    try {
      var value = eval(display.value);
      display.value = Math.sin(value);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateCos() {
    var display = document.getElementById("display");
    try {
      var value = eval(display.value);
      display.value = Math.cos(value);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateTan() {
    var display = document.getElementById("display");
    try {
      var value = eval(display.value);
      display.value = Math.tan(value);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateSqrt() {
    var display = document.getElementById("display");
    try {
      var value = eval(display.value);
      display.value = Math.sqrt(value);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateSquare() {
    var display = document.getElementById("display");
    try {
      var value = eval(display.value);
      display.value = Math.pow(value, 2);
    } catch (error) {
      display.value = "Error";
    }
  }
  
  function calculateInverse(){
    var display=document.getElementById("display");
    try {
        var value = eval(display.value);
        display.value = 1.0/value;
      } catch (error) {
        display.value = "Error";
      }
  }
  