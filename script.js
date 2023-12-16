let quote = document.querySelector(".quote");
let author = document.querySelector("#author");
let nextQuote = document.querySelector("#new-quote");
let twitterButton = document.querySelector("#twitter");
let quote_container = document.querySelector("#quote-container");
let loader = document.querySelector(".loader");
let quotes;



function loading() {
  quote_container.hidden = true;
  loader.hidden = false;
}

function complete() {
  quote_container.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  loading();

  if (quotes.quoteText.length > 40) {
    quote.classList.add("long-quote");
  } else {
    quote.classList.remove("long-quote");
  }

  quote.textContent = quotes.quoteText;

  author.textContent = quotes.quoteAuthor;

  complete();
}

async function getQuotes() {
  loading();
  const apiUrl = "http://localhost:8000/";
  try {
    const response = await fetch(apiUrl);

    quotes = await response.json();

    newQuote();
  } catch (err) {
    alert(err);
  }
}

getQuotes();

function tweet() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quotes.quoteText} - ${quotes.quoteAuthor}`;
  window.open(tweetUrl, "_blank");
}

twitterButton.addEventListener("click", tweet);

nextQuote.addEventListener("click", getQuotes);


