const countervalue = document.getElementById("countervalue");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");
const inc = document.getElementById("inc");

let counter = 0;
inc.addEventListener("click", function () {
  counter += 1;
  countervalue.innerHTML = counter;
});
reset.addEventListener("click", function () {
  counter = 0;
  countervalue.innerHTML = counter;
});
dec.addEventListener("click", function () {
  counter += -1;
  countervalue.innerHTML = counter;
});
