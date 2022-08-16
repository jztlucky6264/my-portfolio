import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./Data";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <Navbar />
        <Home />

        <main className="w-[80%] mt-4">
          <About />
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    data-aos="zoom-out-up"
                    className="  vertical-timeline--animate"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title font-extrabold text-lg">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle font-bold text-stone-50">
                      {n.field}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          <Projects />

          <Contact />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
