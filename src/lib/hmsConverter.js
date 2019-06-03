const secondsToHms = value => {
  value = Number(value);
  let hr = Math.floor(value / 3600),
    min = Math.floor((value % 3600) / 60),
    sec = Math.floor((value % 3600) % 60);

  return (
    (hr > 0 ? hr + ":" + (min < 10 ? "0" : "") : "") +
    min +
    ":" +
    (sec < 10 ? "0" : "") +
    sec
  );
};

export default secondsToHms;
