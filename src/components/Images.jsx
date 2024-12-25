import { IMAGES } from "../data/";

// style prop for CSS
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
