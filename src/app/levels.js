// levels.js — level definitions and the code that applies them.
//
// A level is a patch over the base data in content.js. It is applied once at boot,
// before View/World are constructed, because both read AREA/STREET while building
// geometry. Switching level therefore reloads the page.
import { AREA, PRICES, TUNING } from './content.js';

export const LEVELS = [
  {
    id: 'pasar',
    name: { id: 'Pasar Pagi', en: 'Morning Market' },
    blurb: { id: 'Lahan standar, 7 slot.', en: 'Standard lot, 7 bays.' },
    area: {},
    tuning: {},
    prices: {},
  },
  {
    id: 'sempit',
    name: { id: 'Lahan Sempit', en: 'Tight Lot' },
    blurb: {
      id: '5 slot lebar, ronde 90 detik, Satpol lebih rajin.',
      en: '5 wide bays, 90s round, Satpol patrols sooner.',
    },
    area: { bays: 5, bayW: 3.2 },
    tuning: {
      roundSeconds: 90,
      patrolFirstIn: [25, 35],
      patrolNextIn: [20, 30],
      passByIn: [2, 5],
    },
    prices: { mobil: 6500, motor: 2500, scratch: 1200, crooked: 1200, tip: 1500 },
  },
];

export const DEFAULT_LEVEL = 'pasar';
export let CURRENT_LEVEL = DEFAULT_LEVEL;

export function readLevelId() {
  try {
    const fromUrl = new URLSearchParams(location.search).get('level');
    if (fromUrl && LEVELS.some((l) => l.id === fromUrl)) return fromUrl;
    const saved = localStorage.getItem('tp-level');
    if (saved && LEVELS.some((l) => l.id === saved)) return saved;
  } catch {}
  return DEFAULT_LEVEL;
}

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id) || LEVELS[0];
}

// Mutates the shared data objects in place: every module already holds a reference
// to them, so no re-import is needed.
export function applyLevel(id) {
  const level = getLevel(id);
  Object.assign(AREA, level.area);
  Object.assign(TUNING, level.tuning);
  Object.assign(PRICES, level.prices);
  CURRENT_LEVEL = level.id;
  // one-time migration from the pre-levels global best score
  try {
    const legacy = localStorage.getItem('tp-best');
    if (legacy !== null && localStorage.getItem(bestKey(level.id)) === null) {
      localStorage.setItem(bestKey(level.id), legacy);
    }
  } catch {}
  return level;
}

export function setLevel(id) {
  try {
    localStorage.setItem('tp-level', id);
  } catch {}
}

// Best score is per level; the old global key stays readable as a fallback.
export function bestKey(id) {
  return `tp-best:${id}`;
}
