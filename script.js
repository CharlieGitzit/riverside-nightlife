const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("sendBtn");
const startBtn = document.getElementById("startBtn");
const chatSection = document.getElementById("chat-section");

let step = 0;
let prefs = {};

startBtn.onclick = () => {
  chatSection.classList.remove("hidden");
  botMsg("Hey there 🌙 Let's find your perfect spot tonight.");
  askQuestion();
};

sendBtn.onclick = handleInput;
input.addEventListener("keypress", e => { if(e.key==="Enter") handleInput(); });

function handleInput() {
  const val = input.value.trim();
  if (!val) return;
  userMsg(val);
  collect(val);
  input.value = "";
}

function askQuestion() {
  if (step < questions.length) {
    botMsg(questions[step]);
  } else {
    recommend();
  }
}

function collect(val) {
  switch(step){
    case 0: prefs.area = val; break;
    case 1: prefs.category = val.toLowerCase(); break;
    case 2: prefs.music = val.toLowerCase(); break;
    case 3: prefs.budget = parseInt(val); break;
    case 4: prefs.food = val.toLowerCase()==="yes"; break;
  }
  step++;
  askQuestion();
}

function recommend() {
  let scored = venues.map(v => {
    let score = 0;
    if(v.category===prefs.category) score+=2;
    if(v.music.includes(prefs.music)) score+=2;
    if(v.drinkRange<=prefs.budget) score+=1;
    if(v.food===prefs.food) score+=1;
    return {...v, score};
  }).sort((a,b)=>b.score-a.score);

  if(scored[0].score===0){
    botMsg("Hmm, no direct matches. Try these instead!");
    alternatives.forEach(showAltCard);
  } else {
    botMsg("Top picks for you:");
    scored.slice(0,3).forEach(showVenueCard);
  }
  botMsg("Have an amazing night ✨ Stay safe!");
}

function showVenueCard(v){
  const div=document.createElement("div");
  div.className="card";
  div.style.backgroundImage=`url(${v.bg})`;
  div.innerHTML=`<div class="card-content">
    <img src="${v.icon}" width="30">
    <h3>${v.name}</h3>
    <p>Music: ${v.music} | Drinks ~$${v.drinkRange}</p>
    <a href="${v.address}" target="_blank">Directions</a>
  </div>`;
  chatBox.appendChild(div);
}

function showAltCard(a){
  const div=document.createElement("div");
  div.className="card";
  div.style.backgroundImage=`url(${a.bg})`;
  div.innerHTML=`<div class="card-content">
    <img src="${a.icon}" width="30">
    <h3>${a.name}</h3>
    <p>${a.description}</p>
    <a href="${a.link}" target="_blank">Explore</a>
  </div>`;
  chatBox.appendChild(div);
}

function botMsg(text){ addMsg(text,"bot"); }
function userMsg(text){ addMsg(text,"user"); }

function addMsg(text,type){
  const div=document.createElement("div");
  div.className=`message ${type}`;
  div.innerText=text;
  chatBox.appendChild(div);
  chatBox.scrollTop=chatBox.scrollHeight;
}

