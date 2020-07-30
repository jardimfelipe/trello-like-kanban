export const getSavedState = (key) => JSON.parse(localStorage.getItem(key));

export const saveState = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const removeState = (key) => {
  localStorage.removeItem(key);
};
