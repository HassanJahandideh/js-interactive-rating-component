const btnSubmit = document.querySelector(".btn-submit");
const thankYou = document.querySelector(".end-container");
const mainContainer = document.querySelector(".main-container");
const btnRates = document.querySelectorAll(".btn-rate");
const rating = document.querySelector(".rating");

let selectedRate = null;

btnRates.forEach((btn) => {
   btn.addEventListener('click', () => {
      selectedRate = btn.textContent;
   });
});

btnSubmit.addEventListener('click', () => {
   if (!selectedRate) {
      alert("Please select a rating");
      return;
   }
   mainContainer.style.display = "none";
   thankYou.style.display = "block";
   rating.textContent = selectedRate;
})