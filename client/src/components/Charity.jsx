import React, { useState } from 'react';
// child of Movement, shows charity details
// also a child of addCharity

const Charity = ({
  charity,
}) => {
  const { charDescription, charImageUrl, charName, charUrl, charTagline, currentRating } = charity;
  return (
    <div className="max-w-sm h-full rounded overflow-hidden shadow-lg m-8 float-left">
      <div className="border-r border-b border-l border-gray-400 hover:border-black hover:bg-teal-100 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <span className="text-gray-900 font-bold text-xl mb-2 hover:text-gray-500 mr-4">
            <img className="w-full" src={charImageUrl} alt="" />
            <p className="text-black text-lg my-2 mb-3">
              {charName}
            </p>
            {/* <p className="text-gray-700 text-base my-2">
              {currentRating}
            </p> */}
            <p className="text-gray-700 text-base my-2">
              {charTagline}
            </p>
            <p className="text-gray-700 text-sm my-2">
              {charDescription}
            </p>
            <link href={charUrl} />
          </span>
        </div>
      </div>
    </div>

//before
    // <div>
    //   <ul>
    //     This movement&apos;s charity is {charName}
    //     <li>char image {charImageUrl}</li>
    //     <li>{charDescription}</li>
    //     <li>{charUrl}</li>
    //   </ul>
    // </div>
  );
};

export default Charity;
