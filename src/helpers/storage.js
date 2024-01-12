export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    return console.log(`Could not save '${key}:${value}' to Local Sorage.`);
  }
};

export const getItem = key => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue === null ? undefined : JSON.parse(serializedValue);
  } catch (error) {
    return console.log(`Could not retrieve '${key}' from Local Sorage.`);
  }
};
