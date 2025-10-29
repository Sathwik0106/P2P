// A tiny storage utility with safe localStorage access and in-memory fallback.
// Keeps the API minimal and typed.

const memoryStore = new Map<string, string>();

const hasLocalStorage = () => {
  try {
    if (typeof window === 'undefined' || !('localStorage' in window)) return false;
    const k = '__storage_test__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
};

const readRaw = (key: string): string | null => {
  if (hasLocalStorage()) {
    return window.localStorage.getItem(key);
  }
  return memoryStore.has(key) ? (memoryStore.get(key) as string) : null;
};

const writeRaw = (key: string, value: string) => {
  if (hasLocalStorage()) {
    window.localStorage.setItem(key, value);
  } else {
    memoryStore.set(key, value);
  }
};

export const storage = {
  get<T>(key: string): T | null {
    const raw = readRaw(key);
    if (raw == null) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T): void {
    writeRaw(key, JSON.stringify(value));
  },
  /** Read existing value or initialize with seed (and persist) */
  getOrSet<T>(key: string, seed: T): T {
    const existing = this.get<T>(key);
    if (existing == null) {
      this.set<T>(key, seed);
      return seed;
    }
    return existing;
  },
  /** Update a stored value using an updater function, returning the updated value. */
  update<T>(key: string, updater: (current: T | null) => T): T {
    const current = this.get<T>(key);
    const next = updater(current);
    this.set<T>(key, next);
    return next;
  },
};

/** Simple id generator (no external deps) */
export const genId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
// Simple JSON localStorage wrapper with namespacing and safety

const NAMESPACE = 'p2p-app';

function ns(key: string) {
  return `${NAMESPACE}:${key}`;
}

export function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(ns(key));
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  try {
    localStorage.setItem(ns(key), JSON.stringify(value));
  } catch {
    // ignore quota/serialization errors
  }
}

export function updateJSON<T>(key: string, updater: (prev: T) => T, fallback: T): T {
  const prev = readJSON<T>(key, fallback);
  const next = updater(prev);
  writeJSON<T>(key, next);
  return next;
}

export function clearKey(key: string): void {
  try {
    localStorage.removeItem(ns(key));
  } catch {}
}
