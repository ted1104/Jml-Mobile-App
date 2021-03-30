export function getDateToday() {
  var date = new Date();
  var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  var month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();

  return date.getFullYear() + '-' + month + '-' + day;
}
