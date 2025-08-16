// iqtiboslar va ularning mualliflaridan iborat obyektli massiv yaratish
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { quote: "The unexamined life is not worth living.", author: "Socrates" },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can, or you think you can't – you're right.",
    author: "Henry Ford",
  },
  { quote: "I think, therefore I am.", author: "René Descartes" },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "To be, or not to be, that is the question.",
    author: "William Shakespeare",
  },
  {
    quote: "That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "All that we are is the result of what we have thought.",
    author: "Buddha",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "That's one small step for a man, one giant leap for mankind.",
    author: "Neil Armstrong",
  },
  { quote: "The power of imagination makes us infinite.", author: "John Muir" },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau",
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein",
  },
  {
    quote: "We do not remember days, we remember moments.",
    author: "Cesare Pavese",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    quote: "Have no fear of perfection - you'll never reach it.",
    author: "Salvador Dali",
  },
  {
    quote:
      "Waste no more time arguing about what a good man should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    author: "Jim Rohn",
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  { quote: "Fortune favors the bold.", author: "Virgil" },
];

// ... (quotes massivi va elementlarni tanlash o'zgarmaydi) ...

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const btn = document.querySelector(".btn");

// 1-QADAM: Yangi iqtibosni EKRANGA CHIQARADIGAN funksiya yaratamiz
function displayNewQuote() {
  // a) Avval tasodifiy iqtibosni olamiz
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // b) Keyin uni HTML'ga joylaymiz
  quoteText.textContent = randomQuote.quote;
  quoteAuthor.textContent = randomQuote.author;
}

// 2-QADAM: Event listener'imiz endi faqat o'sha funksiyani chaqiradi
btn.addEventListener("click", displayNewQuote);

// 3-QADAM: Sahifa birinchi marta ochilganda ham o'sha funksiyani chaqiramiz
displayNewQuote();
