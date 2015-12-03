(function(i) {
  i = i.split('');
  var coords = {
    santaX: 0,
    santaY: 0,
    roboSantaX: 0,
    roboSantaY: 0
  };
  var uniqueHouses = [];
  
  for (var j = 0; j < i.length; j++) {
    var move = j % 2 === 0 ? "santa" : "roboSanta";
    if (i[j] === ">") coords[move + "X"]++;
    else if (i[j] === "<") coords[move + "X"]--;
    else if (i[j] === "^") coords[move + "Y"]++;
    else if (i[j] === "v") coords[move + "Y"]--;
    var thisHouse = coords[move + "X"] + ', ' + coords[move + "Y"];
    if (uniqueHouses.indexOf(thisHouse) === -1) uniqueHouses.push(thisHouse);
  }

  return uniqueHouses.length;
}(input));