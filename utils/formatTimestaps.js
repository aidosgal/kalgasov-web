export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];

  if (seconds < 60) {
    return `${seconds} сек назад`;
  } else if (minutes < 60) {
    return `${minutes} мин назад`;
  } else if (hours < 24) {
    return `${hours} час назад`;
  } else if (days < 30) {
    return `${days} дн назад`;
  } else {
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }
};
