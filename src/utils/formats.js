export const setTimeFormat = (value) => {
  const minute = Math.floor(value / 60);
  const _second = value % 60;
  const second = _second < 10 ? `0${_second}` : _second;

  return `${minute} : ${second}`;
};
