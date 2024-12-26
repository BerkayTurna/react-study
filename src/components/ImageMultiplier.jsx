import { useState } from "react";

function ImageMultiplier() {
  const [produceImg, setProduceImg] = useState(1);

  function handleClick(event) {
    event.target.id === "add"
      ? setProduceImg((prev) => prev + 1)
      : setProduceImg((prev) => (prev > 0 ? prev - 1 : prev));
  }
  return (
    <>
      <button id="add" onClick={handleClick}>
        Add Image
      </button>
      <button id="remove" onClick={handleClick}>
        Remove Image
      </button>
      {[...Array(produceImg)].map((img, index) => (
        <img
          key={index}
          src={`https://picsum.photos/id/${10 + index}/150/150`}
        />
      ))}
    </>
  );
}

export default ImageMultiplier;
