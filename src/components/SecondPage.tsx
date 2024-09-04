import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./SecondPage.scss";

const images = import.meta.glob(
  "../assets/images/Katja-20240825T165031Z-001/Katja/*.{png,jpg,jpeg,svg,mp4}"
);
function handleScrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

const SecondPage: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadImages = async () => {
      const imagePaths = await Promise.all(
        Object.keys(images).map(async (key) => {
          const image = await images[key]();
          return image.default;
        })
      );

      const shuffleImages = imagePaths.sort(() => {
        return Math.random() - 0.5;
      });

      setLoadedImages(shuffleImages);
    };
    loadImages();

    const animation = {
      root: null,
      rootMargin: "0px",
      threshold: 1
    };

    function triggerAnimation(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("trigger");
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(triggerAnimation, animation);

    const textElements = document.querySelectorAll(".text-appear");
    if (textElements.length > 0) {
      textElements.forEach((element) => observer.observe(element));
    }

    const carouselElements = document.querySelectorAll(".carousel-appear");
    if (carouselElements.length > 0) {
      carouselElements.forEach((element) => observer.observe(element));
    }

    const buttonElements = document.querySelectorAll(".button-appear");
    if (buttonElements.length > 0) {
      buttonElements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [loadedImages]);

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-r from-red-500 to-red-600 justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center sm:flex-col md:flex-col lg:flex-row">
        <h1 className="font-bold text-sm sm:text-md md:text-lg lg:text-xl text-white flex flex-col w-3/4 text-center">
          <span className="text-appear pb-3">
            V zadnjem letu se je spremenilo veliko stvari.
          </span>
          <span className="text-appear pb-3">
            Tvoje leto je bilo polno čludovitih trenutkov.
          </span>
          <span className="text-appear pb-3">
            Danes je tvoj dan in čas za refleksijo tega leta.
          </span>
        </h1>
        <div className="carousel-container carousel-appear w-1/2">
          {loadedImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className={` secondpageimage object-cover rounded-lg ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          ))}
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <div className="downarrowcontainer button-appear flex flex-col items-center absolute">
          <p className="text-white pb-6">Lahko klikneš naprej če želiš :)</p>
          <button
            onClick={handleScrollDown}
            className="downarrow bg-white rounded-lg p-1 pt-2 pb-5 border-2 bg-opacity-50"
          >
            <FaArrowDown className="downarrowbutton text-xl text-white text-opacity-80" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
