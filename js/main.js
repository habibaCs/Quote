

let allQuote = [
  {
    quote: `“Maybe I made a mistake yesterday, but yesterday’s me is still me. I am who I am today, with all my faults. Tomorrow I might be a tiny bit wiser, and that’s me, too. These faults and mistakes are what I am, making up the brightest stars in the constellation of my life. I have come to love myself for who I was, who I am, and who I hope to become.”`,
    Auther: "Kim Namjoon",
  },
  {
    quote: `“Team work makes the dream work”`,
    Auther: "Kim Namjoon",
  },
  {
    quote: `“Go on your path, even if you live for a day.” `,
    Auther: "Park Jimin",
  },
  {
    quote: `“Do one thing every day that scares you.”`,
    Auther: "Eleanor Roosevelt",
  },
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    Auther: "Mahatma Gandhi",
  },
  {
    quote: `“Alone we can do so little; together we can do so much.”`,
    Auther: "Helen Keller",
  },
];

let guoteId = document.getElementById("quote-id");
let previousRandomQuote = -1;
function addQuote() {
  let output = "";

  let randomQuote;
  do {
    randomQuote = Math.floor(Math.random() * allQuote.length);
  } while (randomQuote === previousRandomQuote);

  output += `
<div 
class="quote">
<h2 class="mb-0 text-color text-uppercase">Quote</h2>
<p class="lead mt-4" >
${allQuote[randomQuote].quote}
</p>
<p class="aouther mt-4 text-end text-secondary">${allQuote[randomQuote].Auther}</p>
</div>`;
  previousRandomQuote = randomQuote;
  guoteId.innerHTML = output;
}
