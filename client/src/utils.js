/*
 * Force a value into a number. This is currently capped to 2 decimal
 * places.
 */
const forceNumber = function(n) {
    n = Number(n);
    if (isNaN(n) || typeof n === 'undefined') {
        n = 0;
    }
    return n;
};

function label(n, la) {
  var l = ""
  if (n <= 20) {
    l = la[0];
  }
  else if (n <= 40) {
    l = la[1];
  }
  else if (n <= 60) {
    l = la[2];
  }
  else if (n <= 80) {
    l = la[3];
  }
  else {
    l = la[4];
  }
  return l
}

export {forceNumber, label};
