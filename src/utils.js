// This is blatantly taken of SO
export const hSize = bytes => {
  if (bytes == 0) return '0 Bytes';
  const k = 1024,
    dm = 2,
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_MINUTE = 1000 * 60;
const MS_IN_SECOND = 1000;

export const hTime = ms => {
  let time = '';
  switch (true) {
    case ms < 1000:
      return `${ms} ms`;
    case ms > MS_IN_SECOND && ms < MS_IN_MINUTE:
      return `${Math.floor(ms % MS_IN_MINUTE / MS_IN_SECOND)} secs`;
    case ms > MS_IN_HOUR:
      time = `${Math.floor(ms % MS_IN_DAY / MS_IN_HOUR)} h `;
    case ms > MS_IN_MINUTE:
      time = `${time}${Math.floor(ms % MS_IN_HOUR / MS_IN_MINUTE)} m `;
    case ms > MS_IN_SECOND:
      time = `${time}${Math.floor(ms % MS_IN_MINUTE / MS_IN_SECOND)} s`;
    default:
      return time;
  }
};

export const hThroughput = (bytes, ms) => {
  switch (true) {
    default:
      return `${hSize(Math.floor(bytes / ms * MS_IN_SECOND))}/s`;
  }
};
