module.exports = zip;

/*
  zip([1, 2, 3]); // [[1], [2], [3]]
  zip([1, 2, 3], ['a', 'b', 'c']); // [[1, 'a'], [2, 'b'], [3, 'c']]
  zip([1, 2], ['a', 'b'], [true, false]); //[[1, 'a', true], [2, 'b', false]]

  zip(undefined, {}, false, 1, 'foo'); // []
  zip([1, 2], ['a', 'b'], undefined, {}, false, 1, 'foo'); // [[1, 'a'], [2, 'b']]

  zip([1, 2, 3], ['a', 'b'], [true]);
  // [[1, 'a', true], [2, 'b', undefined], [3, undefined, undefined]]
*/

function zip() {
  var result = [];
  var args = Array.prototype.slice.call(arguments);
  var argsLen = args.length;
  var maxLen = 0;
  var i, j;

  for (i = 0; i < argsLen; i++) {
    if (!Array.isArray(args[i])) continue;
    var arrLen = args[i].length;
    if (arrLen > maxLen) {
      maxLen = arrLen;
    }
  }

  for (i = 0; i < maxLen; i++) {
    var group = [];
    for (j = 0; j < argsLen; j++) {
      if (!Array.isArray(args[j])) continue;
      group[j] = args[j][i];
    }
    result[i] = group;
  }

  return result;
}
