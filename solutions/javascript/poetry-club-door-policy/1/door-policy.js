
export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function backDoorResponse(line) {
  line = line.trim();
  return line[line.length - 1];
}

export function backDoorPassword(word) {
  // we can use this line 17 or shortcut like line 18 as best practice
  // return word[0].toUpperCase() + word.slice(1).toLowerCase() + ", " + "please"
  return frontDoorPassword(word) + ", " + "please";
}
