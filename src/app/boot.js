// boot.js — entry point: wires view, world, HUD, audio, game, input.
import {
  AREA,
  DRIVERS,
  NPC_DRIVE,
  PRICES,
  STREET,
  STRINGS,
  TUNING,
  VEHICLES,
  applyI18n,
  getLang,
  onLangChange,
  setLang,
} from "./content.js";
import { AudioEngine, Gf, Hf, Kf, Speech, Vf, qf } from "./audio.js";
import { View, World, buildWorldMeshes } from "./engine.js";
import { Df, Game, HUD, Of, bindInput } from "./game.js";
import { LEVELS, applyLevel, readLevelId, setLevel } from "./levels.js";

for (let [e, t] of Object.entries(STRINGS)) qf(t, e);
for (let e of Object.values(DRIVERS)) (qf(e.intro, `driver`), qf(e.chatter, `chatter`));
for (let e of Hf) (Gf.set(e, e), Kf.set(e, `shout`));
const LEVEL_ID = readLevelId();
const LEVEL = applyLevel(LEVEL_ID);
applyI18n();
var $f = new View(document.getElementById(`c`));
buildWorldMeshes($f.scene);
var ep = new World($f.scene);
var tp = new HUD();
var np = new AudioEngine();
var rp = new Game($f, tp, np, ep);
var ip = new Speech(np);

// --- debug / modding surface (added during reverse engineering) ---------------
// Read or drive the running game from the console or an automated test:
//   __game.state, __game.timeLeft, __game.money
//   __tp.TUNING.roundSeconds = 45; __game.reset()
//   __tp.AREA.bays = 9            (needs a reload; world is built once)
var __tp = { AREA, STREET, TUNING, PRICES, VEHICLES, NPC_DRIVE, LEVELS, LEVEL };
window.__tp = __tp;
window.__game = rp;
window.__view = $f;
window.__world = ep;
window.__hud = tp;
window.__audio = np;
window.__speech = ip;
((tp.onSpeak = (e, t) => ip.say(e, t)),
  (rp.onDriver = (e) => (ip.driver = Vf.driver[e] ?? ip.driver)));
var ap = () => {
  (np.unlock(), ip.preload());
};
(tp.setLangChoice(getLang()),
  onLangChange(() => {
    (tp.setLangChoice(getLang()), rp.relabel(), rp.showResult(), cp());
  }),
  bindInput((e, t) => {
    (tp.settingsOpen && t) || rp.onSignal(e, t);
  }, ap),
  window.addEventListener(`pointerdown`, ap, {
    once: !0,
  }));
var op = (e) => document.getElementById(e);
var sp = (e) => {
  e !== tp.settingsOpen && (e && window.dispatchEvent(new Event(`blur`)), tp.showSettings(e));
};
(op(`open-settings`).addEventListener(`click`, () => {
  (ap(), sp(!tp.settingsOpen));
}),
  op(`close-settings`).addEventListener(`click`, () => sp(!1)),
  op(`resume`).addEventListener(`click`, () => sp(!1)),
  op(`settings`).addEventListener(`click`, (e) => {
    e.target === e.currentTarget && sp(!1);
  }),
  document
    .querySelectorAll(`#set-lang [data-lang]`)
    .forEach((e) => e.addEventListener(`click`, () => setLang(e.dataset.lang))),
  document.querySelectorAll(`#set-level [data-level]`).forEach((e) => {
    e.classList.toggle(`on`, e.dataset.level === LEVEL_ID);
    e.addEventListener(`click`, () => {
      setLevel(e.dataset.level);
      location.reload();
    });
  }),
  tp.setMuted(np.muted),
  op(`set-sound`).addEventListener(`click`, () => {
    (ap(), tp.setMuted(np.toggleMute()));
  }),
  tp.setMusic(np.musicOn),
  op(`set-music`).addEventListener(`click`, () => {
    (ap(), tp.setMusic(np.toggleMusic()));
  }),
  (op(`row-haptics`).hidden = !(`vibrate` in navigator)),
  tp.setHaptics(Df.haptics),
  op(`set-haptics`).addEventListener(`click`, () => {
    (Df.setHaptics(!Df.haptics), tp.setHaptics(Df.haptics), Of(20));
  }),
  window.addEventListener(`keydown`, (e) => {
    e.code === `Escape`
      ? sp(!tp.settingsOpen)
      : tp.settingsOpen ||
        ((e.code === `Enter` || e.code === `KeyR` || e.code === `Space`) && rp.tryRestart());
  }));
var cp = () => {
  let { top: e, bottom: t } = tp.insets();
  $f.resize(e, t);
};
(window.addEventListener(`resize`, cp),
  window.addEventListener(`orientationchange`, () => setTimeout(cp, 250)),
  cp());
var lp = performance.now();
function up(e) {
  let t = Math.max(0, Math.min(0.05, (e - lp) / 1e3));
  ((lp = e), tp.settingsOpen || rp.update(t), tp.layout(), $f.render(), requestAnimationFrame(up));
}
requestAnimationFrame(up);
