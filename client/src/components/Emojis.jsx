import React, { useState, useEffect } from 'react';
import 'emoji-mart/css/emoji-mart.css';

import { Picker } from 'emoji-mart';

const Emojis = ({ toggleEmoji }) => {
  const [emojiList, setemojiList] = useState([
    {
      name: 'rage',
      count: 2,
    },
    {
      name: 'blush',
      count: 1,
    },
    {
      name: 100,
      count: 3,
    },
    {
      name: 'grinning',
      count: 2,
    },
  ]);

  // const onReaction = (name) => {
  //   const emojis = emojiList.map(emoji => {
  //     if (emoji.name === name) {
  //       emoji.count += 1;
  //     }
  //     return emoji;
  //   });
  //   setemojiList({ emojis });
  // };

  // const onEmojiClick = (name) => {
  //   console.log(name);
  //   const emojis = emojiList.concat([{ name, count: 1 }]);
  //   setemojiList({ emojis });
  // }

  return (
    <div className=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
          <button onClick={() => toggleEmoji()}>
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" onClick={() => toggleEmoji()}>
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          </button>
          <span className="text-sm">(Esc)</span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Simple Modal!</p>
            <div className="modal-close cursor-pointer z-50">
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          <p>Modal content can go here</p>

          <div className="flex justify-end pt-2">
            <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" onClick={() => toggleEmoji()}>Close</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Emojis;
