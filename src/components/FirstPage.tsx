import "./FirstPage.scss";
import { FaArrowDown } from "react-icons/fa";

const FirstPage = () => {
  function handleScrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  }

  return (
    <>
      <div className="first-page w-full h-screen">
        <header className="bg-gradient-to-r from-orange-500 to-orange-700  flex flex-col justify-center items-center w-full h-screen">
          <div className="flex d-flex flex-row justify-center items-center">
            <h1 className="katja-title font-bold text-5xl bg-gradient-to-r from-red-200 to-white text-transparent bg-clip-text p-3 text-center leading-snug">
              Danes je tvoj posebni dan
            </h1>
          </div>

          <span className="button-click bg-gradient-to-r from-red-200 to-white text-transparent bg-clip-text p-3 text-center opacity-0">
            Klikni na gumb spodaj
          </span>
        </header>

        <button className="move-down flex d-flex justify-center items-center flex-col w-full">
          <div
            onClick={handleScrollDown}
            className="downarrow bg-white rounded-lg p-1 pt-2 pb-5 border-2 bg-opacity-50"
          >
            <FaArrowDown className="downarrowbutton text-xl text-white text-opacity-80" />
          </div>
        </button>
        <div className="emoji-container ">
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
          <span className="emoji">❤️</span>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
