'use strict';

const jokeText = document.querySelector('.joke');
const jokeButton = document.querySelector('.btn');

// Generate Function
const generateJoke = async function () {
  // Getting Data
  const URL = 'https://icanhazdadjoke.com';
  const configuration = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch(URL, configuration);
  const data = await res.json();
  //   Typewritting Data
  let speed = 85;
  let index = 1;
  // Typewritter Function
  const typwritter = function () {
    let jokeTextData = data.joke.slice(0, index);

    if (index > jokeTextData.length) {
      index = 1;
    } else {
      index++;

      setTimeout(typwritter, speed);
    }

    jokeText.textContent = jokeTextData;
  };
  typwritter();
};

generateJoke();
setInterval(() => {
  generateJoke();
}, 11000);

jokeButton.addEventListener('click', generateJoke);
