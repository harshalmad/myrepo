const quotes = [
  "The best way to predict the future is to invent it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall."
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElem = document.getElementById('quote');
  quoteElem.textContent = quotes[randomIndex];
}

displayRandomQuote(); // display a random quote when the page is loaded

const newQuoteBtn = document.getElementById('new-quote-btn');
newQuoteBtn.addEventListener('click', displayRandomQuote);

const currentDateElem = document.getElementById('current-date');
const currentDate = new Date();
currentDateElem.textContent = currentDate.toLocaleDateString();

function changeTheme() {
  const selectedTheme = document.getElementById('theme-selector').value;
  const bodyElem = document.getElementsByTagName('body')[0];
  if (selectedTheme === 'dark') {
    bodyElem.classList.add('dark-theme');
  } else {
    bodyElem.classList.remove('dark-theme');
  }
}

const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', changeTheme);