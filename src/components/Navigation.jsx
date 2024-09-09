import React, { useState } from "react";


const NavTab = ({ data }) => {
  const [currentLevel, setCurrentLevel] = useState([data]);
  const [parentTitles, setParentTitles] = useState([]);

  const handleItemClick = (item) => {
    if (item.url) {
 
      console.log(`Navigating to: ${item.url}`);
    } else if (item.children) {
      setCurrentLevel([item.children]);
      setParentTitles([...parentTitles, item.title]);
    }
  };

  const handleBackClick = () => {
    if (parentTitles.length > 0) {
      setCurrentLevel([findParentChildren(data, parentTitles.slice(0, -1))]);
      setParentTitles(parentTitles.slice(0, -1));
    }
  };

  const findParentChildren = (items, titles) => {
    if (titles.length === 0) return items;
    const currentTitle = titles[0];
    const foundItem = items.find((item) => item.title === currentTitle);
    if (foundItem && foundItem.children) {
      return findParentChildren(foundItem.children, titles.slice(1));
    }
    return items;
  };

  return (
    <div className="p-4">
      {parentTitles.length > 0 && (
        <div className="flex items-center mb-4">
          <button onClick={handleBackClick} className="mr-2">
            Left
          </button>
          <h2 className="text-xl font-bold">
            {parentTitles[parentTitles.length - 1]}
          </h2>
        </div>
      )}
      <ul className="space-y-2">
        {currentLevel[0].map((item, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            <button
              onClick={() => handleItemClick(item)}
              className="w-full text-left text-lg hover:text-blue-500"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavTab;
