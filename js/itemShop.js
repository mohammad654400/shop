// تنظیم مقدار پیش‌فرض
document.querySelector("#size-m").checked = true;
// تنظیم اندازه پیش‌فرض
document.querySelector("#size").textContent = "size:M";


let input = document.querySelector("input");

// مدیریت رویداد کلیک روی دکمه‌های رادیویی
document.querySelectorAll("input[name='size']").forEach(function (button) {
    button.addEventListener("click", function (event) {
    console.log(event.target.id);
    var size = event.target.value;
    document.querySelector("#size").textContent = "size:" + size;
  });
});

const circles = document.querySelectorAll(".circle");
const color = document.getElementById("color");
const colorValue = document.getElementById("colorValue");

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", () => {
    colorValue.textContent = "color:" + circles[i].style.backgroundColor;
  });
}

const number = document.getElementById("number");
const numberValue = document.getElementById("numberValue");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

var numberValueInt = 0;
var direction = 1;

increaseButton.addEventListener("click", () => {
  numberValueInt += direction;
  numberValue.textContent = numberValueInt;
});

decreaseButton.addEventListener("click", () => {
  numberValueInt = numberValueInt-direction;
  console.log(numberValueInt);

  numberValue.textContent = numberValueInt;
});
