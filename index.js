fetch('https://raw.githubusercontent.com/RyanHirsch/potp/master/README.md')
  .then(response => response.text())
  .then(potpText => {
    const justPoemLines = potpText.split(/\n/).slice(2);
    const numPoems = justPoemLines.length;
    const randPoem = justPoemLines[getRandomInt(0, numPoems - 1)].split('1. ')[1];
    document.getElementById("random-poem").innerHTML = randPoem;
  });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}