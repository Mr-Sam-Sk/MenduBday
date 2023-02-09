const quotes = [
    "A birthday is just the first day of another 365-day journey around the sun. Enjoy the trip.",
    "The more birthday candles, the bigger the wish.",
    "Another year older and another year wiser.",
    "Wishing you a day filled with happiness and a year filled with joy.",
    "On your birthday, may all your dreams and wishes come true."
  ];
  
  const images = [
    "https://media.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif",
    "https://media.giphy.com/media/66dLOWrLqrgxWHSeVR/giphy.gif",
    "https://media.giphy.com/media/onPMdPD9wI4rWA6KaT/giphy.gif",
    "https://media.giphy.com/media/ElO8N1CCAkT8IWQGgp/giphy.gif",
    "https://media.giphy.com/media/3o6MbhgBx0MaN0nOr6/giphy.gif"
  ];
  
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const image = images[Math.floor(Math.random() * images.length)];
  
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("image-container").innerHTML = `<img src="${image}" alt="Happy Birthday">`;
  