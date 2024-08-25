import { useEffect } from "react";
import "./SecondPage.scss";
import { FaArrowDown } from "react-icons/fa";

const images = [
  { src: "path/to/image1.jpg", year: "2020" },
  { src: "path/to/image2.jpg", year: "2022" },
  { src: "path/to/image3.jpg", year: "2022" }
];

const SecondPage = () => {
  useEffect(() => {
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

    const elements = document.querySelectorAll(".text-appear");
    if (elements.length > 0) {
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex d-flex flex-col w-full h-screen bg-gradient-to-r from-red-500 to-red-600 justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center sm:flex-col md:flex-col lg:flex-row">
          <h1 className=" font-bold text-sm sm:text-md md:text-lg lg:text-xl text-white flex flex-col w-3/4 text-center ">
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
          <div className="w-1/2 text-center">
            {images.map((images, index) => {
              return <img key={index} src={images.src} alt={images.year} />;
            })}
          </div>
        </div>
        <div className="relative w-full flex d-flex items-center justify-center">
          <div className="downarrowcontainer flex d-flex flex-col items-center absolute">
            <p className="text-white pb-6">Lahko klikneš naprej če želiš :)</p>
            <button className="downarrow bg-white rounded-lg p-1 pt-2 pb-5 border-2 bg-opacity-50">
              <FaArrowDown className="downarrowbutton text-xl text-white text-opacity-80" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;

// Make a vertical and horizontal carousel
// Add images, edit videos
// Edit Button to appear after the carousel(last step maybe 10s after viewing imagess)
