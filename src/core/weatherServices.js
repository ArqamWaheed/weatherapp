const convertTemperature = {
  CtoF(input) {
    return Math.round(parseInt(input) * 1.8 + 32);
  },
  FtoC(input) {
    return Math.round((parseInt(input) - 32) / 1.8);
  },
};

export { convertTemperature };
