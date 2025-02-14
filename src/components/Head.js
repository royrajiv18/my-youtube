import React from "react";

const Head = () => {
  const handleHamburgerClick = () => {
    console.log("hamburger menu clicked");
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-5 cursor-pointer"
          alt="menu"
          onClick={handleHamburgerClick}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8 -my-2 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-600 rounded-l-full border-r-0 p-2"
          placeholder="Search"
          type="text"
        />
        <button className="border border-gray-600 rounded-r-full px-5 py-2 bg-gray-100">
          <img
            className="h-5 inline-block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s"
            alt="search"
          />
        </button>
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
