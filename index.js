fetch('https://raw.githubusercontent.com/RyanHirsch/potp/master/README.md')
  .then(response => response.text())
  .then(potpText => {
    const justPoemLines = potpText.split(/\n/).slice(2);
    const numPoems = justPoemLines.length - 1;  // account for trailing newline
    const randPoemIndex = getRandomInt(0, numPoems - 1);
    const randPoemNumber = randPoemIndex + 1;
    const randPoem = justPoemLines[randPoemIndex].split('1. ')[1];
    document.getElementById("poem-number").innerHTML = '#' + randPoemNumber;
    document.getElementById("random-poem").innerHTML = randPoem;
  });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}