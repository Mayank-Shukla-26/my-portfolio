import React from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import About from "./sections/About";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Footer from "./sections/Footer";
import Home from "./sections/home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Strengths from "./sections/Strengths";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  React.useEffect(() => {
    const timerId = window.setTimeout(() => {
      setIntroDone(true);
    }, 3000);

    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      <div className="relative gradient text-white">
        <CustomCursor />

        <Navbar />
        <Home />
        <About />
        <Education />
        <Strengths />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
