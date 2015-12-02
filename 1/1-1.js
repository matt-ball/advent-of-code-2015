(function(i) {
  return i.match(/\(/g).length - i.match(/\)/g).length; 
}(input));