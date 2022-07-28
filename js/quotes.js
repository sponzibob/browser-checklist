const quotes = [
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "Zeus does not bring all men's plans to fulfillment.",
    author: "Homer",
  },
  {
    quote: "That indolent but agreeable condition of doing nothing.",
    author: "Pliny the Younger",
  },
  {
    quote:
      "It's only when the tide goes out that you discover who's been swimming naked.",
    author: "Warren Buffett",
  },
  {
    quote: "I am not sincere, even when I say I am not.",
    author: "Jules Renard",
  },
  {
    quote:
      "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    author: "Ernesto Che Guevara",
  },
  {
    quote:
      "Use what you have to run toward your best - that's how I now live my life.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Only actions give life strength; only moderation gives it a charm.",
    author: "Jean Paul Richter",
  },
  {
    quote:
      "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
    author: "Warren Buffett",
  },
  {
    quote:
      "Personally I'm always ready to learn, although I do not always like being taught.",
    author: "Sir Winston Churchill",
  },
  {
    quote:
      "Study without desire spoils the memory, and it retains nothing that it takes in.",
    author: "Leonardo da Vinci",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
