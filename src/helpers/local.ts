type SessionStorageKey = string;
type LocalStorageKey = string;

export const SessionStore = {
  set: (key: SessionStorageKey, value: any): void =>
    sessionStorage.setItem(key, JSON.stringify(value)),
  get: (key: SessionStorageKey) => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  },
  remove: (key: SessionStorageKey): void => sessionStorage.removeItem(key),
  isExist: (key: SessionStorageKey): boolean =>
    sessionStorage.getItem(key) !== null,
  clear: () => sessionStorage.clear(),
};

export const LocalStore = {
  set: (key: LocalStorageKey, value: any): void =>
    localStorage.setItem(key, JSON.stringify(value)),
  get: (key: LocalStorageKey, noParse?: boolean) => {
    const storedValue = localStorage.getItem(key);
    return noParse ? storedValue : storedValue ? JSON.parse(storedValue) : null;
  },
  remove: (key: LocalStorageKey): void => localStorage.removeItem(key),
  isExist: (key: LocalStorageKey): boolean =>
    localStorage.getItem(key) !== null,
  clear: () => localStorage.clear(),
};
