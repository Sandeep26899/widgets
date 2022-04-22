import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [itemClicked, SetItemClicked] = useState(null);
  const onTitleClicked = (index) => {
    SetItemClicked(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === itemClicked ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className="transition">{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <>
      <div className="ui styled accordion">{renderedItems}</div>
    </>
  );
};

export default Accordion;
