import { useState } from "react";
import Eyes from "./Eyes";
import Body from "./Body";
import Hair from "./Hair";

function Options(value, key) {
  const bodyNumber = 17;
  const bodyArray = new Array(bodyNumber).fill();
  const [bodyIdx, setBodyIdx] = useState();

  const eyesNumber = 24;
  const eyesArray = new Array(eyesNumber).fill();
  const [eyesIdx, setEyesIdx] = useState();

  const hairArray = new Array(30).fill();
  const [hairIdx, setHairIdx] = useState();

  return (
    <div className="list-section">
      <Eyes eyesArray={eyesArray} setEyesIdx={setEyesIdx} />
      <Body bodyArray={bodyArray} setBodyIdx={setBodyIdx} />
      <Hair hairArray={hairArray} setHairIdx={setHairIdx} />

      {/* Clothes, accessories, eyebrows, facial_hair, hair, Mouths, Noses  */}

      <div className="avatar-wrapper">
        <div className="avatar">
          {bodyIdx && (
            <img
              src={`character/body/${bodyIdx}.png`} // character/body/17.png
              alt=""
              height="100%"
              width="100%"
              className="img-center"
              style={{ top: "50%" }}
            />
          )}

          {eyesIdx && (
            <img
              src={`character/eyes/${eyesIdx}.png`} // character/eyes/unde.png
              alt=""
              height="100%"
              width="100%"
              className="img-center"
              style={{ top: "50%" }}
            />
          )}
          {hairIdx && (
            <img
              src={`character/hair/${hairIdx}.png`} // character/body/17.png
              alt=""
              height="100%"
              width="100%"
              className="img-center"
              style={{ top: "50%" }}
            />
          )}
        </div>

        <div className="text-center">
          <button className="button">Randomize</button>
        </div>
      </div>
    </div>
  );
}

export default Options;
