import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getUserProfileById } from '../services/services';

// sub component of commentListItem where we recieve a comment
const CommentListItem = ({ comment, key }) => {
  // destructure the username and comment out of props
  const { username, commentText, createdAt, id_user } = comment;

  // a user set state for the profile image
  const [username, setUsername] = useState('');


  getUserProfileById(id_user)
  .then(res => {
    console.log(res);
  })





  return (
    <div className="flex">
      <td className="px-2 py-4 border-b border-gray-200 flex">
        <div className="">
        <img className="h-12 w-12 rounded-full flex" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
        </div>
      </td>
      <td className="px-2 py-4 border-b border-gray-200" id={key}>
        <p className="text-sm leading-5 text-gray-900">Comment from {username}:</p>
        <span className="text-gray-400 text-xs mt-1">{moment(createdAt).fromNow()} - {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>
        <p className="text-gray-600 leading-none ml-4 mt-2">{commentText}</p>
      </td>
    </div>
  );
};

export default CommentListItem;
