// Array of quotes for example
const quotes = [
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "You make your day or life difficult yourself.", author: "John Udry" },
  { text: "Success is not the final destination, failure is not fatal: what matters is the courage to continue.", author: "Winston Churchill" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" }
];

// HTML elements
const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");

// Function to generate a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  textElement.textContent = randomQuote.text;
  authorElement.textContent = randomQuote.author || "Unknown author";

  // Update the link to the tweet
  tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + randomQuote.text + '" - ' + randomQuote.author)}`;
}

// Set the initial quote
getRandomQuote();

// Add event listener to the 'New Quote' button
newQuoteButton.addEventListener("click", getRandomQuote);
