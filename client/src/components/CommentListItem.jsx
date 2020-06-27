import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Emoji } from 'emoji-mart';
import { getUserProfileById } from '../services/services';
import Emojis from './Emojis.jsx';
import axios from 'axios';

// sub component of commentListItem where we recieve a comment
const CommentListItem = ({ comment, key }) => {
  // destructure the username and comment out of props
  const { username, commentText, createdAt, id_user, id, emojiData } = comment;

  // a user set state for the profile image
  const [user, setUser] = useState({ imageUrl: '' });
  const [seen, setSeen] = useState(false);
  const [emojiArray, setEmojiArray] = useState(JSON.parse(emojiData));




  useEffect(() => {
    getUserProfileById(id_user)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);


  // make a function that will save the current state of the comment into the database on each emoji change
  const updateComment = () => {
    // stingify the emojiArray
    let emojiString = JSON.stringify(emojiArray);
    axios.post('/comment/update', { emojiString, id });
  };

  // const login = (username, password) => {
  //   return axios.post('/login', { username, password });
  // };
  // const getMovementById = (movementId) => {
  //   axios.get(`/movement/:${movementId}`)
  //     .then(res => {
  //       setCurrentMovement(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };
  
  const toggleEmoji = () => {
    setSeen(!seen);
    console.log('hello');
  };

  const addToEmojiArray = (emojiObject) => {
    console.log(emojiObject);
    // make a new array with the added emoji 
    const newArr = [...emojiArray]
    newArr.push({ id:emojiObject.id, skin:emojiObject.skin, count: 1});
    console.log(newArr);
    setEmojiArray(newArr);
    updateComment();
  };

  const addToEmojiCount = (index) => {
    console.log(index);
    // copy the current array of objects
    const newArr = [...emojiArray];
    // update the count
    newArr[index].count += 1;
    setEmojiArray(newArr);
    updateComment();
  };


  return (
    <div className="flex items-start px-4 py-6 bg-white shadow-lg">
      <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={user.imageUrl} alt="avatar" />
      <div className="">
        <div className="flex items-center justify-between" id={key}>
          <h2 className="text-lg font-semibold text-gray-900 -mt-1">{username}</h2>
          <small className="text-sm text-gray-700 object-left">{moment(createdAt).fromNow()}</small>
        </div>
        <p className="mt-3 text-gray-700 text-sm">
          {commentText}
        </p>
        <div className="mt-4 flex items-center">
          
            {emojiArray.map((emoji, index) => (
              <div className="flex mr-2 text-gray-700 text-sm mr-3">
              <button className="modal-open bg-transparent hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-1 px-2 rounded-none" style={{ outline: 'none' }} onClick={() => addToEmojiCount(index)}>
                <Emoji emoji={{ id: emoji.id, skin: emoji.skin }} size={32} />
              </button>
              <div className="flex items-center justify-between" id={key}>
                <p>{emoji.count}</p>
              </div> 
              </div>
            ))}
          
          <div className="flex mr-2 text-gray-700 text-sm mr-4">
            <button className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-1 px-2 rounded-full" onClick={toggleEmoji}>+</button>
            {seen ? <Emojis toggleEmoji={toggleEmoji} addToEmojiArray={addToEmojiArray} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentListItem;


{/* <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
<span class="m-auto text-2xl font-thin">+</span>
</button>

<svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
</svg>
<span>reply</span>

<Emojis /> */}



{/* <button class="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">Open Modal</button> */ }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // we ill send a body with a movementId, comment and user
//   axios.post('/comment', { movementId: id, comment: text, authorId: user.id })
//     .then(() => {
//       setText('');
//       // then we will get that data back from the db
//       axios.get('/comment', { params: { movementId: id } })
//         .then((response) => {
//           setComments(response.data);
//         })
//         .catch((err) => console.error(err));
//     })
//     .catch((err) => console.error(err));
// };

// const areThereComments = comments.length > 0;
