import React, { useState } from 'react';
import axios from 'axios';
// addCharity receives its setChar... functions from StartMovement; they will update addChar's state
const AddCharity = ({
  setCharName,
  setCharUrl,
  setCharImageUrl,
  setCharDescription,
}) => {
  const [search, setSearch] = useState('');
  const [create, setCreate] = useState(true);

  const findCharities = () => {
    if (search) {
      axios.get('https://api.data.charitynavigator.org/v2/Organizations', {
        params: {
          app_key: process.env.CHARITY_NAVIGATOR_KEY,
          app_id: process.env.CHARITY_NAVIGATOR_ID,
          pageSize: 5,
          search,
        },
      });
    }
  };

  return (
    <div>
      {/* button asking if you want to create your own; changes create */}
      <button onClick={() => setCreate(!create)} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">Search for a charity to link or add your own</button>
      {/* only shows if you are creating your own */}
      {create && (

      <form id="add-charity" className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Charity&apos;s Name
            </label>
            <input onChange={(e) => setCharName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Make a Wish Foundation" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Link to the charity&apos;s website
            </label>
            <input onChange={(e) => setCharUrl(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="www.worldwish.org" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Add an image for this charity
            </label>
            <input onChange={(e) => setCharImageUrl(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Image Url" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Add a description of this charity
            </label>
            <textarea onChange={(e) => setCharDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Together, we create life-changing wishes for children with critical illnesses." rows="3" />
          </div>
        </div>
      </form>
      )}
      {!create && (
        <div> this shows when you are using the api</div>
      )}
    </div>
  );
};

export default AddCharity;
