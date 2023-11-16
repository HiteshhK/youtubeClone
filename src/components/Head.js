import React, { useEffect, useState } from "react";
import {
  IMG_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  const [showSuggestions,setShowSuggestions]=useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    //make an api call after every key press
    //but if the difference b/w 2 api calls is <200ms
    //decline the api call
    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      //getting the item list at index 1
      setSuggestions(json[1]);
    };

    const timer = setTimeout(() => {
      getSearchSuggestions();

      return () => {
        clearTimeout(timer);
      };
    }, 200);
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="Menu"
          src={IMG_MENU}
        />
        <img className="h-8 mx-2" alt="youtube logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-400 p-2 bg-gray-100 px-4 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && <div className="absolute bg-white py-2 px-2 w-[36rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-3 py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
              >
                🔍 {suggestion}
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="USER" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
