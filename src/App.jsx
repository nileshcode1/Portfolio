
import MyExperience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";



const App = () => {
  return (
    <div>
      <HeroSection />
      <div id="experience">
        <MyExperience />
      </div>
      <div id="project">
        <Project/>
      </div>
      {/* <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div> */}
    </div>
  );
};

export default App ;