const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
var submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const ratingbutton = document.querySelectorAll(".btn");


submit.addEventListener("click", ()=>{
    thankYou.classList.remove("hidden");
    mainContainer.style.display = 'none';
});

rateAgain.addEventListener("click", ()=>{
    mainContainer.style.display = "block";
    thankYou.classList.add("hidden");
});

ratingbutton.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        rating.innerHTML = rate.innerHTML;
    })
})