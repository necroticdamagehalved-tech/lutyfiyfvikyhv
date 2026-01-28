import { initTabs, initBuildSubTabs, initState, initRaces, writeBuildId } from './core.js';
initTabs();
initBuildSubTabs();
initState();
initRaces();
writeBuildId('v1.4c');


// ===== PHASE 1: SPECIAL SYSTEM =====

const SPECIAL_STATS = ["STR","PER","END","CHA","INT","AGI","LCK"];

let special = {
  STR:5, PER:5, END:5, CHA:5, INT:5, AGI:5, LCK:5
};

let specialPool = 5;

function renderSpecial() {
  const wrap = document.getElementById("special-stats");
  if (!wrap) return;

  wrap.innerHTML = "";

  SPECIAL_STATS.forEach(stat => {
    const row = document.createElement("div");
    row.className = "special-row";

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.onclick = () => changeSpecial(stat, -1);

    const label = document.createElement("span");
    label.textContent = stat;

    const val = document.createElement("span");
    val.textContent = special[stat];

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.onclick = () => changeSpecial(stat, 1);

    row.append(minus,label,val,plus);
    wrap.appendChild(row);
  });

  const pool = document.getElementById("special-pool");
  pool.textContent = "Points Remaining: " + specialPool;
}

function changeSpecial(stat, delta) {

  if (delta > 0) {
    if (specialPool <= 0) return;
    if (special[stat] >= 10) return;

    special[stat]++;
    specialPool--;
  }

  if (delta < 0) {
    if (special[stat] <= 1) return;

    special[stat]--;
    specialPool++;
  }

  renderSpecial();
}

document.addEventListener("click", e => {
  if (e.target.classList.contains("tab-btn")) {
    if (e.target.dataset.tab === "special") {
      setTimeout(renderSpecial, 10);
    }
  }
});
