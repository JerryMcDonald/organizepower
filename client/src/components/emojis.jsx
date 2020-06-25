import React, { useState, useEffect } from 'react';
import EmojiReact from 'react-emoji-react';


const emojis = () => {
  
  const [emojiList, setemojiList] = useState([
    {
      name: 'rage',
      count: 2
    },
    {
      name: 'blush',
      count: 1
    },
    {
      name: 100,
      count: 3
    },
    {
      name: 'grinning',
      count: 2
    }
  ]);

  const onReaction = (name) => {
    const emojis = emojiList.map(emoji => {
      if (emoji.name === name) {
        emoji.count += 1;
      }
      return emoji;
    });
    setemojiList({ emojis })
  }

  const onEmojiClick = (name) => {
    console.log(name);
    const emojis = emojiList.concat([{name, count: 1}]);
    setemojiList({ emojis })
  }






  
  
  return (

  )

}