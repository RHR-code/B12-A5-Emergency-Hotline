let cards = document.querySelectorAll(".card");
let heartCounter = document.getElementById("heart_counter");
let copyCounter = document.getElementById("copy_counter");
let coinCounter = document.getElementById("coin_counter");
let historyContainer = document.getElementById("history_container");
let clearBtn = document.getElementById("clear_btn");
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;
let historyStack = [];
for (let card of cards) {
  card.querySelector(".heart").addEventListener("click", () => {
    heartCount++;
    heartCounter.innerText = heartCount;
  });
  card.querySelector(".copy").addEventListener("click", () => {
    let cardNumber = card.querySelector("h2").innerText;
    window.navigator.clipboard.writeText(cardNumber);
    alert(`The Number Is Copied: ${cardNumber}`);
    copyCount++;
    copyCounter.innerText = copyCount;
  });
  card.querySelector(".call").addEventListener("click", () => {
    coinCount = coinCount - 20;
    if (coinCount < 0) {
      return alert(
        "❌ Not Enough Coins,You need at least 20 coins to make a call"
      );
    }
    coinCounter.innerText = coinCount;
    let cardTitle = card.querySelector("h3").innerText;
    let cardNumber = card.querySelector("h2").innerText;
    let time = new Date().toLocaleTimeString();

    alert(`📞 Calling ${cardTitle} ${cardNumber}`);

    historyStack.push({ title: cardTitle, number: cardNumber, time: time });
    let newDiv = document.createElement("div");
    for (let history of historyStack) {
      newDiv.innerHTML = `
    <div class="inter_font flex items-center justify-between mb-6">
            <div>
              <h2 class="font-semibold text-lg">${history.title}</h2>
              <h3 class="text-gray-500 text-lg">${history.number}</h3>
            </div>
            <div>
              <h3 class="text-gray-500 text-lg">${history.time}</h3>
            </div>
          </div>
    `;
    }
    historyContainer.appendChild(newDiv);
  });
  clearBtn.addEventListener("click", () => {
    historyStack = [];
    historyContainer.innerHTML = "";
  });
}
