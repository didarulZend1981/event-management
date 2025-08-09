export function formatDateTime(dateInput) {
  const date = new Date(dateInput)
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}


export function getEventDuration(startDate, endDate){
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInMilliseconds = end - start;
  // const diffInMilliseconds = endDate - startDate;

  // Convert to hours or days
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60)); // Convert milliseconds to hours
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  // Return minimum value between hours and days
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
};
