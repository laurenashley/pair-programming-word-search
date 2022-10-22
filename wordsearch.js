const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  let verticalJoin = [];
  for (const i in letters[0]) {
    let column = [];
    for (const x in letters) {
      column.push(letters[x][i]);
    }
    verticalJoin.push(column);
  }
  
  verticalJoin = verticalJoin.map((ls) => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  
  return false;
};
  
module.exports = wordSearch;