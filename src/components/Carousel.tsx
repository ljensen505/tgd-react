import axios from "axios";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

interface Image {
  id: string;
  url: string;
}

const CarouselComponent: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/group/images`)
      .then((res) => {
        setImages(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Carousel fade controls={false} indicators={false}>
      {images.map((img) => (
        <Carousel.Item key={img.id}>
          <img
            className="d-block w-100"
            src={img.url}
            alt={"the grapefruits in action"}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
