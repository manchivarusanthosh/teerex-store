import React from "react";
import "./index.css";

const index = () => {
  const filterList = [
    {
      title: "Color",
      option1: "Red",
      option2: "Blue",
      option3: "Green",
    },
    {
      title: "Gender",
      option1: "Male",
      option2: "Female",
    },
    {
      title: "Price",
      option1: "0-Rs.250",
      option2: "Rs.250 - 450",
      option3: "Rs.450",
    },
    {
      title: "Price",
      option1: "Polo",
      option2: "Hoodie",
      option3: "Basic",
    },
  ];

  const onCheckBoxChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="side-bar">
      <div className="list-container">
        {filterList.map((eachList) => {
          return (
            <div>
              <div className="side-bar-title">{eachList.title}</div>
              <ul className="filter-list">
                <li>
                  <input
                    type="checkbox"
                    onChange={(event) => onCheckBoxChange(event)}
                    value={eachList.option1}
                  />
                  {eachList.option1}
                </li>

                <li>
                  <input
                    type="checkbox"
                    onChange={(event) => onCheckBoxChange(event)}
                    value={eachList.option2}
                  />
                  {eachList.option2}
                </li>
                <li>
                  <input
                    type="checkbox"
                    onChange={(event) => onCheckBoxChange(event)}
                    value={eachList.option3}
                  />
                  {eachList?.option3}
                </li>
              </ul>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
