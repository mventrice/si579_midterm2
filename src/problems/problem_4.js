import { useState } from 'react';

export const description =
  'In `src/problem_4.js`, write code that allows the user to increment the click counter by clicking the "Clicked" `<button />`\
 element (or reset it to `0` by clicking the "Reset" `<button />`). Then, **use\
 [the `localStorage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to make the click count\
 persistent**. When the user reloads the page, it should remember the number of clicks.\n\n\
 - *Note 1: your code should handle plural rules correctly; it should be "Clicked 1 time" and\
 "Clicked 2 time**s**".*\n\
 - *Note 2: remember that `localStorage` can only store **strings**.*\
 ';

export function Problem() {
  function onClick() {
    console.log('clicked button');
    setNumClicks(numClicks + 1);
  }

  function onReset() {
    console.log('clicked reset');
    setNumClicks(0);
    localStorage.setItem('numberClicks', numClicks);
  }

  //   localStorage.setItem('numberClicks', numClicks);
  //   let savedNumClicks = localStorage.getItem('numclicks');
  //   savedNumClicks = parseInt(savedNumClicks);
  //   console.log(savedNumClicks);

  let [numClicks, setNumClicks] = useState(0);
  let savedNumClicks = parseInt(
    localStorage.getItem('numberClicks')
  );

  window.onload = () => {
    setNumClicks(savedNumClicks);
  };

  localStorage.setItem('numberClicks', numClicks);

  return (
    <div className="btn-group">
      <button onClick={onClick} className="btn btn-primary">
        Clicked {numClicks} time
        {numClicks !== 1 && 's'}
      </button>
      <button
        onClick={onReset}
        className="btn btn-secondary"
      >
        Reset
      </button>
    </div>
  );
}
