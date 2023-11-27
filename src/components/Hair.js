import React from "react";

function Hair({ hairArray, setHairIdx }) {
  return (
    <div>
      <h2>Hair</h2>
      <div className="list">
        {hairArray.map((child, index) => (
          <button
            onClick={() => {
              console.log();
              setHairIdx(index + 1);
            }}
            key={index}
          >
            <div className="clickable square" key={index}>
              <img
                src={`character/body/${index + 1}.png`}
                alt=""
                height="60"
                className="img-center"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hair;
