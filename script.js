const ratingBtn1 = document.getElementById("rating-btn-1");
const ratingBtn2 = document.getElementById("rating-btn-2");
const ratingBtn3 = document.getElementById("rating-btn-3");
const ratingBtn4 = document.getElementById("rating-btn-4");
const ratingBtn5 = document.getElementById("rating-btn-5");
const submitBtn = document.getElementById("submit-btn");
const defaultContainer = document.getElementById("container");
const thankyouContainer = document.getElementById("container-thankyou");
const ratingCount = document.getElementById("rating-count");
let rating = 0;

ratingBtn1.addEventListener("click", function () {
  rating = 1;
  ratingBtn1.classList.toggle("selected");
  ratingBtn2.classList.remove("selected");
  ratingBtn3.classList.remove("selected");
  ratingBtn4.classList.remove("selected");
  ratingBtn5.classList.remove("selected");
});

ratingBtn2.addEventListener("click", function () {
  rating = 2;
  ratingBtn2.classList.toggle("selected");
  ratingBtn1.classList.remove("selected");
  ratingBtn3.classList.remove("selected");
  ratingBtn4.classList.remove("selected");
  ratingBtn5.classList.remove("selected");
});

ratingBtn3.addEventListener("click", function () {
  rating = 3;
  ratingBtn3.classList.toggle("selected");
  ratingBtn1.classList.remove("selected");
  ratingBtn2.classList.remove("selected");
  ratingBtn4.classList.remove("selected");
  ratingBtn5.classList.remove("selected");
});

ratingBtn4.addEventListener("click", function () {
  rating = 4;
  ratingBtn4.classList.toggle("selected");
  ratingBtn1.classList.remove("selected");
  ratingBtn2.classList.remove("selected");
  ratingBtn3.classList.remove("selected");
  ratingBtn5.classList.remove("selected");
});

ratingBtn5.addEventListener("click", function () {
  rating = 5;
  ratingBtn5.classList.toggle("selected");
  ratingBtn1.classList.remove("selected");
  ratingBtn2.classList.remove("selected");
  ratingBtn3.classList.remove("selected");
  ratingBtn4.classList.remove("selected");
});

submitBtn.addEventListener("click", () => {
  thankyouContainer.classList.add("activated");
  defaultContainer.classList.add("deactivated");
  ratingCount.innerHTML = `You selected ${rating} out of 5`;
});
