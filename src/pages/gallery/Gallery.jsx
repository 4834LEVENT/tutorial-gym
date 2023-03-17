import Header from "../../components/Header";
import HeaderGalleryImage from "../../images/header_bg_3.jpg";
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  console.log(images);
  return (
    <>
      <Header title="Our Galery" image={HeaderGalleryImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        commodi.
      </Header>
      <section className="gallery">
        <div className="container gallery-container">
          {images.map((image, i) => {
            return (
              <article key={i}>
                <img src={image} alt="gallery_img" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
