import { useEffect } from "react";
import "./ThirdPage.scss";

const ThirdPage = () => {
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
      <div className="w-full h-screen flex d-flex flex-col justify-center items-center bg-gradient-to-r from-yellow-500 to-yellow-300">
        <h1 className="font-bold text-sm sm:text-md md:text-lg lg:text-xl text-white flex flex-col text-center">
          <span className="text-appear pb-3">Si absolutno čudovita ženska</span>
          <span className="text-appear pb-3">Želim te vse najboljše</span>
          <span className="text-appear pb-3">
            Rad bi poskrbel za tebe in tvojo varnost
          </span>
        </h1>
      </div>
    </>
  );
};

export default ThirdPage;
