import IMAGES from "../data/images";

function Images({ style }) {
  return (
    <>
      {IMAGES.map((image, index) => (
        <img key={index} src={image} style={style} />
      ))}
    </>
  );
}

export default Images;
