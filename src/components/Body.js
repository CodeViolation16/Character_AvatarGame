import React from "react";

function Body({ bodyArray, setBodyIdx }) {
  return (
    <div>
      <h2>Body</h2>
      <div className="list">
        {bodyArray.map((child, index) => (
          <button
            onClick={() => {
              console.log();
              setBodyIdx(index + 1);
            }}
            key={index}
          >
            <div className="clickable square" key={index}>
              <img
                src={`character/body/${index + 1}.png`}
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
}

export default Body;
