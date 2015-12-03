(function(i) {
  i = i.split('');
  var x = 0;
  var y = 0;
  var uniqueHouses = [];
  
  for (var j = 0; j < i.length; j++) {
    if (i[j] === ">") x++;
    else if (i[j] === "<") x--;
    else if (i[j] === "^") y++;
    else if (i[j] === "v") y--;
    var thisHouse = x + ', ' + y;
    if (uniqueHouses.indexOf(thisHouse) === -1) uniqueHouses.push(thisHouse);
  }

  return uniqueHouses.length;
}(input));