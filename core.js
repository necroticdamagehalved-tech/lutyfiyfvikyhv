export const state = {
  name: '',
  level: 1,
  age: '',
  gender: '',
  background: '',
  raceId: '',
  subsetId: '',
  choices: {}
};

export const RACES = {"human":{"id":"human","name":"Human","hpBase":10,"drBase":2,"notes":[{"name":"+1 Luck","desc":"LCK +1."},{"name":"+1 Tagged Skill","desc":"Gain +1 Tagged Skill at creation (applied in Skills step)."},{"name":"Versatile","desc":"Once between rests, choose one roll to attempt again."},{"name":"Meat & Bone","desc":"Takes full damage from radiation, disease, and poison (no immunities)."}],"subsets":{"vault_dweller":{"id":"vault_dweller","name":"Vault-Dweller","notes":[{"name":"VATS Protocol","desc":"Once per encounter, spend 2 AP: roll 3 attacks, choose 2 to apply damage (includes crits if rolled)."},{"name":"Pre-War Conditioning","desc":"Gain +1 to INT or PER (player choice; obey 1–10 cap)."},{"name":"Soft Hands (+1 dmg taken, -1 dmg dealt melee/unarmed)","desc":"Take +1 damage from melee and unarmed attacks."},{"name":"Naive Outlook","desc":"-2 on your first peaceful interaction with any new settlement or faction."}]},"raider":{"id":"raider","name":"Raider","notes":[{"name":"Fight Dirty","desc":"Gain +1 to all Guns and Survival rolls."},{"name":"Adrenaline Surge (Gain +2 AP)","desc":"When reduced below half HP, gain +1 AP immediately (once per encounter)."},{"name":"Social Pariah","desc":"-2 to Speech and Barter with non-raider NPCs. Double penalty (-4) in protected towns or NCR/Brotherhood territory."},{"name":"Chem Ghosts","desc":"When you take any chem, roll TN 15 at session end. Fail = disadvantage on all rolls next scene (withdrawal)."}]},"scavver":{"id":"scavver","name":"Scavver","notes":[{"name":"Junk Whisperer","desc":"Once per day when looting a site, roll twice and choose the better result (loot/parts/discoveries)."},{"name":"Light Footed","desc":"+1 on Sneak and Lockpick checks in ruined or urban environments."},{"name":"Exposure Magnet (Take double RAD in irradiated hotzones)","desc":"Always gain at least 1 RAD when exploring irradiated ruins or debris zones, even on a “no RAD” roll."},{"name":"Patchwork Gear","desc":"Start with 1 Repair Kit, 1 additional Scrap Armor piece, and advantage on your first Scavenging roll in new locations."}]}}},"ghoul":{"id":"ghoul","name":"Ghoul","hpBase":12,"drBase":2,"notes":[{"name":"SPECIAL Modifiers","desc":"END +1, CHA -1."},{"name":"Radiation Sustenance (1 HP per 50 RAD gained)","desc":"Radiation heals you instead of killing you. Gain +5 HP for every 2 RAD gained (round down). RAD damage never kills you, even at 1000."},{"name":"Wasteland Diet","desc":"Can safely eat irradiated food, contaminated water, rotten or glowing meat. No sickness, no penalties, no checks required."},{"name":"Feral Edge","desc":"At 700+ RAD, roll TN 15 after each long rest. Failure: -1 AP for the next encounter."},{"name":"Tainted Stims","desc":"Stimpaks heal half their normal value. RadAway harms you, dealing 1d10 HP damage."}],"subsets":{"settled":{"id":"settled","name":"Settled Ghoul","notes":[{"name":"Dust-Walker","desc":"Immune to environmental hazards that rely on skin contact: sandstorms, irritant spores, mild chem clouds."},{"name":"Veteran Perspective","desc":"Once per session, after seeing a bad outcome, reroll a failed Perception, Speech, or Barter check."},{"name":"Brittle Remains","desc":"Take +1 damage from critical hits."}]},"glowing":{"id":"glowing","name":"Glowing Ghoul","notes":[{"name":"Fallout Aura","desc":"Once per encounter, spend 2 AP to release a rad pulse: all creatures within Close range take 1d100 RAD."},{"name":"Glimmering Instincts","desc":"Gain +1 to Sneak and Survival in irradiated zones."},{"name":"Visible Mutant","desc":"Automatic disadvantage on stealth in completely dark areas — you faintly glow."}]},"feral_tethered":{"id":"feral_tethered","name":"Feral-Tethered","notes":[{"name":"Feral Strength","desc":"When below half HP, gain +1 damage to Melee & Unarmed and +1 STR (temporary; does not exceed cap)."},{"name":"Predator Sense","desc":"+2 to Perception sight/scent checks against living creatures at Close/Near range."},{"name":"Mind Slips","desc":"At 600+ RAD, roll TN 15 after every encounter. Fail: lose 1 AP next encounter. Fail twice in a row: attack nearest target at start of next round (friend or foe)."},{"name":"Unnatural Mannerisms","desc":"-2 to all Speech rolls. Humans fear you; mutants mistrust you."}]}}},"robot":{"id":"robot","name":"Robot","hpBase":15,"drBase":4,"notes":[{"name":"SPECIAL Modifiers","desc":"CHA -1."},{"name":"Luck Cap","desc":"Cannot increase LUCK above 8."},{"name":"Built-In Armor Plating","desc":"Robots cannot wear armor. Gain DR 4 against all physical damage. Upgrades possible later via crafting."},{"name":"Mechanical Condition","desc":"Immune to radiation, poison, disease, suffocation, and drowning. Does not eat, drink, or sleep."},{"name":"EMP Vulnerability","desc":"Energy surge or EMP attacks deal double damage to robots."},{"name":"Programmed Personality","desc":"-2 to Speech and Barter rolls with organics unless imitating/spoofing emotion."},{"name":"Shutdown / Reboot","desc":"When reduced to 0 HP, roll 1d10: 1–3 Shutdown (reboot after rest); 4–10 System reboot after 10 minutes at 1 HP."},{"name":"Repair & Recovery","desc":"Robots cannot heal naturally. Rest does nothing without repair. Repair/Science: 10 minutes restore 1d6 HP; 1 hour + parts restore 2d6 HP."},{"name":"Med-X Glitch Chance","desc":"Med-X gives DR +1 (stacking) for 1 encounter; 1-in-10 glitch: on a 10, lose 1 AP that round due to lag."}],"subsets":{"handy":{"id":"handy","name":"Mr. Handy / Miss Nanny","notes":[{"name":"Multitasking Arms","desc":"Take two Interact actions per round for 1 AP total (e.g., reload + use item)."},{"name":"Utility Programming","desc":"Gain +1 to Medicine and Repair checks."},{"name":"Lightweight Frame (Reduces base DR from 4 to 3)","desc":"Built-in DR is reduced from 4 to 3."},{"name":"Obedience Ghosts","desc":"Once per session, GM may call TN 15 INT check. Fail = spend next turn helping an ally against your tactical judgment."}]},"protectron":{"id":"protectron","name":"Protectron","notes":[{"name":"Hardened Chassis (Increases base DR from 4 to 5)","desc":"Built-in DR increases from 4 to 5."},{"name":"Duty Protocol","desc":"Gain +2 to Speech, Barter, or Intimidation, but only when enforcing a rule, law, or agreement (real or imagined)."},{"name":"Limited Mobility","desc":"Move one range band for 2 AP. Cannot Sprint without upgrades or power mods."},{"name":"Literal Mind","desc":"Automatically fail checks requiring sarcasm, slang, or subtle humor."}]},"robobrain":{"id":"robobrain","name":"Robobrain","notes":[{"name":"Tactical Processor","desc":"Once per encounter, treat a failed roll as a success (does not work on critical failures)."},{"name":"Analytical Mind","desc":"Gain +1 to Science and Perception checks."},{"name":"Organic Dependency","desc":"Each long rest consumes 1 chem, RadAway, purified water, or equivalent. Failure: start next day with -2 INT and PER until fed."},{"name":"Vulnerable Core","desc":"Headshots ignore your built-in DR. The jar is a weak point."}]}}},"mutant":{"id":"mutant","name":"Super Mutant","hpBase":20,"drBase":5,"notes":[{"name":"SPECIAL Modifiers","desc":"STR +2, CHA -2, INT -2 (apply before final 1–10 cap)."},{"name":"Too Dumb to Die","desc":"When reduced to 0 HP, roll 1d10: 1–2 collapse; 3–10 stay standing at 1 HP (once per encounter). If you would die again in same fight, collapse normally."},{"name":"Meat Mountain","desc":"Always count as lightly armored: gain DR 1 baseline on top of any armor/DR effects."},{"name":"Big, Loud, and Obvious","desc":"Cannot hide easily: stealth in open terrain auto-fails; enemies gain +2 on Awareness to detect you; you always count as obvious for ambush rules."},{"name":"Thick-Skulled","desc":"-1 to Science, Medicine, and Repair rolls. Complex logic/speech checks may require GM approval."},{"name":"Radiation & Immunities","desc":"Do not gain RADs. Immune to disease and poison."},{"name":"Healing Rules","desc":"Stimpaks heal HALF. Eating raw mutant meat or animal flesh heals 1d6 HP. Mutant-specific chems heal full."}],"subsets":{"nightkin":{"id":"nightkin","name":"Nightkin","notes":[{"name":"Cloaking Instinct","desc":"Spend 2 AP to activate invisibility for one full round. Attacks from invisibility gain +2 to hit. Breaking stealth ends invisibility early."},{"name":"Ghost in the Wastes","desc":"Ignore inherent Super Mutant stealth penalties. Gain +1 to Sneak and Perception."},{"name":"Stealth Boy Dependency","desc":"At end of each session, roll TN 15. Fail: disadvantage on Perception checks next session."},{"name":"Skin-Crawl Paranoia","desc":"-2 to Speech during tense negotiations."}]},"first_gen":{"id":"first_gen","name":"First Generation","notes":[{"name":"Vestiges of Genius","desc":"Choose one at character creation: Science, Medicine, or Speech. Treated as tagged even if not chosen normally."},{"name":"Pre-War Memory Echo","desc":"Once per long rest, reroll a failed INT-based check."},{"name":"Aging Conversion","desc":"Regeneration no longer activates. Healing from food/chems reduced by 1 HP per die (minimum 1)."},{"name":"Heavier Burden","desc":"Carry capacity bonus from mutation is reduced by 5."}]},"hound_master":{"id":"hound_master","name":"Hound Master","notes":[{"name":"Bonded Hound","desc":"Begin play with a Mutant Hound companion. Acts on your initiative. Costs 2 AP to command. Gets one free attack per round when commanded."},{"name":"Pack Tactics","desc":"If you and your hound attack the same target in a round, both attacks deal +1 damage."},{"name":"Pack Responsibility","desc":"If your hound drops to 0 HP: take 1d6 emotional stress damage instantly; all attacks suffer -1 to hit for rest of combat."},{"name":"Distracted Protector","desc":"-2 to ranged attacks at Near range or further."}]}}}};


export function initTabs(){
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      panels.forEach(p => p.classList.toggle('active', p.id === target));
    });
  });
}

export function initBuildSubTabs(){
  const subTabs = document.querySelectorAll('.subtab');
  const subPanels = {
    identity: document.getElementById('build-identity'),
    race: document.getElementById('build-race')
  };

  subTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.subtab;

      subTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(subPanels).forEach(k => {
        subPanels[k].classList.toggle('active', k === target);
      });
    });
  });
}

export function initState(){
  const nameI = document.getElementById('nameInput');
  const levelI = document.getElementById('levelInput');
  const ageI = document.getElementById('ageInput');
  const genderI = document.getElementById('genderInput');
  const bgI = document.getElementById('bgInput');

  nameI.addEventListener('input', e => { state.name = e.target.value; renderAll(); });
  levelI.addEventListener('input', e => { state.level = Math.max(1, parseInt(e.target.value) || 1); renderAll(); });
  ageI.addEventListener('input', e => { state.age = e.target.value; renderAll(); });
  genderI.addEventListener('input', e => { state.gender = e.target.value; renderAll(); });
  bgI.addEventListener('input', e => { state.background = e.target.value; renderAll(); });

  renderAll();
}

export function initRaces(){
  const list = document.getElementById('raceList');
  if(!list) return;

  list.innerHTML = '';

  Object.values(RACES).forEach(r => {
    const card = document.createElement('button');
    card.className = 'race-card';
    card.type = 'button';
    card.dataset.raceId = r.id;

    card.innerHTML = `
      <div class="race-card-name">${r.name}</div>
      <div class="race-card-stats">HP Base ${r.hpBase} • DR ${r.drBase}</div>
    `;

    card.addEventListener('click', () => {
      state.raceId = r.id;
      state.subsetId = '';

      document.querySelectorAll('.race-card').forEach(el => {
        el.classList.toggle('active', el.dataset.raceId === r.id);
      });

      renderAll();
    });

    list.appendChild(card);
  });

  renderAll();
}

function getRace(){
  return state.raceId ? RACES[state.raceId] : null;
}

function getSubset(race){
  if(!race) return null;
  return state.subsetId ? (race.subsets?.[state.subsetId] || null) : null;
}

function computeDrBase(race, subset){
  const base = race ? race.drBase : null;
  if(base == null) return null;
  const mod = subset && typeof subset.drMod === 'number' ? subset.drMod : 0;
  return base + mod;
}

function renderTraits(el, notes){
  if(!el) return;
  if(!notes || notes.length === 0){
    el.innerHTML = '<span class="muted">—</span>';
    return;
  }
  el.innerHTML = notes.map(n => `
    <div class="trait">
      <strong>${n.name}</strong>
      <div class="muted">${n.desc}</div>
    </div>
  `).join('');
}

function renderSubsetList(race){
  const list = document.getElementById('subsetList');
  if(!list) return;

  list.innerHTML = '';

  if(!race) return;

  const subsets = race.subsets ? Object.values(race.subsets) : [];

  subsets.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'subset-card';
    btn.type = 'button';
    btn.dataset.subsetId = s.id;
    btn.innerHTML = `<div class="subset-name">${s.name}</div>`;

    btn.addEventListener('click', () => {
      state.subsetId = s.id;
      document.querySelectorAll('.subset-card').forEach(el => {
        el.classList.toggle('active', el.dataset.subsetId === s.id);
      });
      renderAll();
    });

    list.appendChild(btn);
  });

  if(state.subsetId){
    document.querySelectorAll('.subset-card').forEach(el => {
      el.classList.toggle('active', el.dataset.subsetId === state.subsetId);
    });
  }
}

function renderRacePanel(){
  const race = getRace();
  const subset = getSubset(race);

  document.getElementById('raceName').textContent = race ? race.name : 'None';
  document.getElementById('raceHpBase').textContent = race ? race.hpBase : '—';

  const dr = race ? computeDrBase(race, subset) : null;
  document.getElementById('raceDrBase').textContent = dr == null ? '—' : dr;

  renderTraits(document.getElementById('raceTraits'), race ? race.notes : []);
  renderSubsetList(race);
  renderTraits(document.getElementById('subsetTraits'), subset ? subset.notes : []);
}

function renderSheet(){
  document.getElementById('sName').textContent = state.name;
  document.getElementById('sLevel').textContent = state.level;
  document.getElementById('sAge').textContent = state.age;
  document.getElementById('sGender').textContent = state.gender;
  document.getElementById('sBg').textContent = state.background;

  const race = getRace();
  const subset = getSubset(race);

  document.getElementById('sRace').textContent = race ? race.name : '—';
  document.getElementById('sSubset').textContent = subset ? subset.name : '—';

  document.getElementById('sHpBase').textContent = race ? race.hpBase : '—';

  const dr = race ? computeDrBase(race, subset) : null;
  document.getElementById('sDrBase').textContent = dr == null ? '—' : dr;
}

function renderAll(){
  renderSheet();
  if(document.getElementById('raceName')) renderRacePanel();
}

export function writeBuildId(tag){
  const el = document.getElementById('buildId');
  if(!el) return;
  const stamp = new Date().toISOString();
  el.textContent = `${tag} • ${stamp}`;
}


/* ===== SPECIAL & MODIFIER EXTENSIONS (v1.1) ===== */

export function initChoices() {
  if (!state.choices) state.choices = {};
}

export function setChoice(key, value) {
  initChoices();
  state.choices[key] = value;
}

export function getChoice(key) {
  return state.choices ? state.choices[key] : undefined;
}

/* Pre-War Conditioning: +1 INT or PER (flat modifier delta) */
/* Vestiges of Genius: chosen skill treated as tagged */

export function getModifier(stat, baseScore) {
  let mod = baseScore - 5;

  if (state.raceId === 'human' && state.subsetId === 'vault_dweller') {
    if (state.choices?.prewar === stat) mod += 1;
  }

  if (state.raceId === 'super_mutant') {
    if (state.subsetId === 'first_generation') {
      if (stat === 'INT') return -2;
    } else {
      if (stat === 'INT') return -4;
    }
  }

  if (state.raceId === 'ghoul') {
    if (stat === 'END') mod += 1;
    if (stat === 'CHA') mod -= 1;
    if (state.subsetId === 'feral_tethered') mod -= 2;
  }

  if (state.raceId === 'robot') {
    if (stat === 'CHA') mod -= 1;
  }

  if (state.raceId === 'human' && stat === 'LCK') mod += 1;

  return mod;
}

export function isSkillTagged(skill) {
  if (state.subsetId === 'first_generation') {
    return state.choices?.vestige === skill;
  }
  return false;
}
