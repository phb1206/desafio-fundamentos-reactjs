const formatDate = (date: Date): string =>
  Intl.DateTimeFormat().format(new Date(date)); // TODO

export default formatDate;
