import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import ButtonScroll from "./components/ButtonScroll";

function App() {
  return (
    <>
      <div className="full-screen-scroll">
        <section className="full-screen-slide">
          <FirstPage />
        </section>
        <section className="full-screen-slide">
          <SecondPage />
        </section>
        <section className="full-screen-slide">
          <ThirdPage />
        </section>
        <section className="full-screen-slide">
          <FourthPage />
        </section>
        <section className="full-screen-slide">
          <FifthPage />
        </section>
      </div>
      <ButtonScroll />
    </>
  );
}

export default App;
