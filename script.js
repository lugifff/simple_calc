let num1 = document.querySelector(".num1");
let op = document.querySelector(".op");
let num2 = document.querySelector(".num2");
let outputbox = document.querySelector(".outputbox");

document.querySelectorAll(".btn1").forEach((btn) => {
    btn.addEventListener("click", function() {
        let numSelected = this.value;
        console.log(numSelected);
        num1.value = num1.value + numSelected;
    });
  });

document.querySelectorAll(".opBtn").forEach((btn) => {
    btn.addEventListener("click", function() {
        let opSelected = this.value;
        console.log(opSelected);
        op.value = opSelected;
    });
  });

  document.querySelectorAll(".btn2").forEach((btn) => {
    btn.addEventListener("click", function() {
        let numSelected = this.value;
        console.log(numSelected);
        num2.value = num2.value + numSelected;
    });
  });

  document.querySelector(".answer").addEventListener("click", function () {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let operation = op.value;

    if (operation == "+"){
        outputbox.value = value1 + value2;
    }
  });