// iqtiboslar va ularning mualliflaridan iborat obyektli massiv yaratish
const quotes = [
  {
    text: "Hayot - bu o'yin emas, lekin o'yin kabi yashash mumkin.",
    author: "Albert Einstein",
  },
  {
    text: "O'zgarishlar hayotning yagona doimiy qoidasi.",
    author: "Heraclitus",
  },
  {
    text: "Muvaffaqiyat - bu tayyorgarlik va imkoniyatning uchrashuvi.",
    author: "Seneca",
  },
  {
    text: "Harakat qilish - bu muvaffaqiyatga erishishning asosiy kaliti.",
    author: "Pablo Picasso",
  },
  {
    text: "O'z maqsadlaringizga erishish uchun harakat qiling, chunki hech kim siz uchun buni qilmaydi.",
    author: "Steve Jobs",
  },
  {
    text: "Yaxshi fikrlar - bu muvaffaqiyatning asosi.",
    author: "Thomas Edison",
  },
  {
    text: "Har bir kun yangi imkoniyatlar bilan to'la.",
    author: "Mahatma Gandhi",
  },
  {
    text: "O'zgarishlar - bu hayotning ajralmas qismi.",
    author: "Nelson Mandela",
  },
  {
    text: "Muvaffaqiyatga erishish uchun, avvalo, o'z ishingizni sevishingiz kerak.",
    author: "Steve Jobs",
  },
  {
    text: "Harakat qilishdan qo'rqmang, chunki muvaffaqiyat faqat harakatda.",
    author: "Walt Disney",
  },
  {
    text: "O'z maqsadlaringizga erishish uchun, harakat qilishdan to'xtamang.",
    author: "Tony Robbins",
  },
  {
    text: "Muvaffaqiyat - bu tayyorgarlik va imkoniyatning uchrashuvi.",
    author: "Oprah Winfrey",
  },
  {
    text: "Har bir muvaffaqiyatli inson o'z maqsadlariga erishish uchun kurashadi.",
    author: "Bill Gates",
  },
  {
    text: "O'zgarishlar - bu hayotning ajralmas qismi, lekin o'zgarishlarni qabul qilish kerak.",
    author: "Dalai Lama",
  },
  {
    text: "Muvaffaqiyatga erishish uchun, avvalo, o'z ishingizni sevishingiz kerak.",
    author: "Mark Zuckerberg",
  },
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
  quoteText.textContent = randomQuote.text;
  quoteAuthor.textContent = randomQuote.author;
}

// 2-QADAM: Event listener'imiz endi faqat o'sha funksiyani chaqiradi
btn.addEventListener("click", displayNewQuote);

// 3-QADAM: Sahifa birinchi marta ochilganda ham o'sha funksiyani chaqiramiz
displayNewQuote();
