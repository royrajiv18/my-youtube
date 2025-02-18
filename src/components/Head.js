import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  // ************DEBOUNCING ******
  // make an api call after every key press
  // but if the if difference b/w the two API call is < 200 ms
  // decline the API call

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json.items);
  };

  // ******************************************

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-5 cursor-pointer"
          alt="menu"
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8 -my-2 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-600 rounded-l-full border-r-0 p-2"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-600 rounded-r-full px-5 py-2 bg-gray-100">
            <img
              className="h-5 inline-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
              alt="search"
            />
          </button>
          {showSuggestions && (
            <div className="absolute bg-white py-2 px-5 w-[29rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.length > 0 &&
                  suggestions.map((s) => (
                    <li key={s} className="py-2 shadow-sm hover:bg-gray-200">
                      🔎 {s?.snippet?.title}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          alt="user"
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
