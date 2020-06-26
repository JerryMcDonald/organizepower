import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getUserProfileById } from '../services/services';
import Emojis from './Emojis.jsx';

// sub component of commentListItem where we recieve a comment
const CommentListItem = ({ comment, key }) => {
  // destructure the username and comment out of props
  const { username, commentText, createdAt, id_user } = comment;

  // a user set state for the profile image
  const [user, setUser] = useState({ imageUrl: '' });
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    getUserProfileById(id_user)
      .then(res => {
        console.log(res);
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  function toggleEmoji () {
    setSeen(!seen);
    console.log('hello');
  }

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
          <div className="flex mr-2 text-gray-700 text-sm mr-3">
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>12</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-8">
            <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span>8</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm mr-4">
          <button className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-1 px-2 rounded-full" onClick={toggleEmoji}>+</button>
            { seen ? <Emojis toggleEmoji={toggleEmoji} /> : null}
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