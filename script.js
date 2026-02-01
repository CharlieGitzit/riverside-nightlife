// script.js
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("sendBtn");
const startBtn = document.getElementById("startBtn");
const chatSection = document.getElementById("chat-section");

let step = 0;
let prefs = {};

startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  chatSection.classList.remove("hidden");
  input.focus();
  botMsg("Hey there 🌙 Let's find your perfect spot tonight.");
  setTimeout(askQuestion, 1200);
};

sendBtn.onclick = handleInput;
input.addEventListener("keypress", e => {
  if (e.key === "Enter") handleInput();
});

function handleInput() {
  const val = input.value.trim();
  if (!val) return;
  userMsg(val);
  collect(val);
  input.value = "";
  input.focus();
}

function askQuestion() {
  if (step < questions.length) {
    botMsg(questions[step]);
  } else {
    recommend();
  }
}

function collect(val) {
  switch(step) {
    case 0: prefs.area = val; break;
    case 1: prefs.category = val.toLowerCase(); break;
    case 2: prefs.music = val.toLowerCase(); break;
    case 3: 
      const budget = parseInt(val);
      prefs.budget = isNaN(budget) ? 0 : budget;
      break;
    case 4: prefs.food = val.toLowerCase() === "yes"; break;
  }
  step++;
  setTimeout(askQuestion, 900);
}

function recommend() {
  let scored = venues.map(v => {
    let score = 0;
    if (v.category === prefs.category) score += 2;
    if (v.music.some(m => prefs.music.includes(m))) score += 2;
    if (v.drinkRange <= prefs.budget && prefs.budget > 0) score += 1;
    if (v.food === prefs.food) score += 1;
    return {...v, score};
  }).sort((a,b) => b.score - a.score);

  if (scored.length === 0 || scored[0].score === 0) {
    botMsg("Hmm, no direct matches. Try these instead!");
    alternatives.forEach(showAltCard);
  } else {
    botMsg("Top picks for you:");
    scored.slice(0, 3).forEach(showVenueCard);
  }
  setTimeout(() => botMsg("Have an amazing night ✨ Stay safe!"), 500);
}

function showVenueCard(v) {
  const div = document.createElement("div");
  div.className = "card fade-in";
  div.style.backgroundImage = `url(${v.bg})`;
  div.innerHTML = `<div class="card-content">
    <img src="${v.icon}" alt="${v.name} icon" />
    <h3>${v.name}</h3>
    <p>Music: ${v.music.join(", ")} | Drinks ~$${v.drinkRange}</p>
    <a href="${v.address}" target="_blank" rel="noopener">Directions</a>
  </div>`;
  chatBox.appendChild(div);
  chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });

}

function showAltCard(a) {
  const div = document.createElement("div");
  div.className = "card fade-in";
  div.style.backgroundImage = `url(${a.bg})`;
  div.innerHTML = `<div class="card-content">
    <img src="${a.icon}" alt="${a.name} icon" />
    <h3>${a.name}</h3>
    <p>${a.description}</p>
    <a href="${a.link}" target="_blank" rel="noopener">Explore</a>
  </div>`;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botMsg(text) {
  addMsg(text, "bot");
}

function userMsg(text) {
  addMsg(text, "user");
}

function addMsg(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type} fade-in`;
  div.textContent = text;
  chatBox.appendChild(div);

  chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: 'smooth' });

  const target = document.body.scrollHeight;
  let start = window.scrollY;
  let distance = target - start;
  let duration = 400; // duration in ms
  let startTime = null;

  function smoothScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    let elapsed = timestamp - startTime;
    let progress = Math.min(elapsed / duration, 1);
    // Ease function (easeInOutQuad)
    let ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, start + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(smoothScroll);
    }
  }

  requestAnimationFrame(smoothScroll);
}

