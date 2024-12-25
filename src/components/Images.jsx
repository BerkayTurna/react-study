import IMAGES from "../data/images";

function Images() {
  return (
    <>
      {IMAGES.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{ borderBottom: "2px solid black", padding: "5px" }}
        />
      ))}
    </>
  );
}

export default Images;
