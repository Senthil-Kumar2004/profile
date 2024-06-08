const words = ['Web Devoleper', 'App Devoleper', 'Designer'];
let index = 0;

function displayWord() {
  const wordDisplay = document.getElementById('wordDisplay');
  wordDisplay.textContent = words[index];
  index = (index + 1) % words.length;

  setTimeout(() => {
    wordDisplay.textContent = '';
    setTimeout(displayWord, 1000);
  }, 1000);
}

displayWord();