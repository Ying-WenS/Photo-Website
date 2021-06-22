import React from "react";

const Pictures = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <span> Download Image here: {""} </span>
        <a target="_blank" href={data.src.large}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
