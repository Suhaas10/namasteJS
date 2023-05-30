function calculateDaysBetweenDates(startDate, endDate) {
  // Write your code here.
  var startDate = new Date(startDate);
  var endDate = new Date(endDate);
  var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}
