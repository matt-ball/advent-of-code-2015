(function(a) {
  var total = 0;
  var matchCoords = /(\d+),(\d+) through (\d+),(\d+)/;

  var createFilledArray = function(size) {
    var i = 0;
    var arr = [];

    while (i < size) {
      arr[i] = 0;
      i++;
    }

    return arr;
  };

  var determineAction = function(string) {
    if (string.indexOf('turn on') > -1) return {status: "on", coords: string.match(matchCoords)};
    if (string.indexOf('turn off') > -1) return {status: "off", coords: string.match(matchCoords)};
    if (string.indexOf('toggle') > -1) return {status: "toggle", coords: string.match(matchCoords)};
  };

  var adjustLights = function(obj) {
    var status = obj.status;
    var minX = parseInt(obj.coords[1], 10);
    var maxX = parseInt(obj.coords[3], 10);
    var minY = parseInt(obj.coords[2], 10);
    var maxY = parseInt(obj.coords[4], 10);

    for (var i = minX; i <= maxX; i++) {
      for (var j = minY; j <= maxY; j++) {
        if (status === "on") grid[i][j]++;
        if (status === "off" && grid[i][j] > 0) grid[i][j]--;
        if (status === "toggle") grid[i][j] += 2;
      }
    }
  };

  var grid = createFilledArray(1000);

  for (var i = 0; i < grid.length; i++) {
    grid[i] = createFilledArray(1000);
  }

  for (var j = 0; j < a.length; j++) {
    adjustLights(determineAction(a[j]));
  }

  for (var k = 0; k < grid.length; k++) {
    for (var l = 0; l < grid[k].length; l++) {
      total += grid[k][l];
    }
  }

  return total;
}(arr));