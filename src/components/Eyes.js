import React from "react";

const Eyes = ({ eyesArray, setEyesIdx }) => {
  return (
    <div>
      <h2>Eyes</h2>
      <div className="list">
        {eyesArray.map((child, index) => (
          <button
            onClick={() => {
              console.log();
              setEyesIdx(index + 1);
            }}
            key={index}
          >
            <div className="clickable square" key={index}>
              <img
                src={`character/eyes/${index + 1}.png`}
                alt=""
                height="60"
                className="img-center"
                style={{ top: "50%" }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Eyes;
