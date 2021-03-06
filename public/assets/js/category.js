// logic for assigning icon based on category selected
var assignCategory = function (category, completed) {
  if (category === 'task' && completed === false) {
    return 'fa-square-o';
  } else if (category === 'event' && completed === false) {
    return 'fa-circle-o';
  } else if (category === 'note' && completed === false) {
    return 'fa-star-o';
  } else if (category === 'research' && completed === false) {
    return 'fa-eye';
  } else if (category === 'task' && completed === true) {
    return 'fa-check-square';
  } else if (category === 'event' && completed === true) {
    return 'fa-check-circle';
  } else if (category === 'note' && completed === true) {
    return 'fa-star';
  } else if (category === 'research' && completed === true) {
    return 'fa-eye-slash';
  }
  return 'fa-circle';
};

// exported for testing
// condition prevents export on frontend
if (typeof module !== 'undefined') {
  module.exports = assignCategory;
} else {
  console.log('winning');
}
