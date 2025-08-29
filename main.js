let cards = document.querySelectorAll(".card");
let heartCounter = document.getElementById("heart_counter");
let copyCounter = document.getElementById("copy_counter");
let coinCounter = document.getElementById("coin_counter");
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
for (let card of cards) {
  card.querySelector(".heart").addEventListener("click", () => {
    heartCount++;
    heartCounter.innerText = heartCount;
  });
  card.querySelector(".copy").addEventListener("click", () => {
    copyCount++;
    copyCounter.innerText = copyCount;
  });
  card.querySelector(".call").addEventListener("click", () => {
    coinCount = coinCount - 20;
    if (coinCount < 0) {
      return alert("Not Enough Coint");
    }
    coinCounter.innerText = coinCount;
  });
}
