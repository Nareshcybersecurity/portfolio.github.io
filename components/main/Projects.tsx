import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
       src="/simon-game.png"
       title="Simon Game"
       description="This is a web-based Simon Says game that tests a player's memory and pattern recognition skills. 🕹️ Simon Says Game"
      />

        
        <ProjectCard
          src="/Deepfake-Technology.png"
          title="Deepfake video detection"
          description="Enhancing Deepfake Video Detection with ResNet50 in Comparison to Random Forest for Improved Accuracy"/>
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Developed a modern portfolio website to showcase my skills and projects using contemporary frameworks including React.js, Three.js, Framer Motion, Tailwind CSS, and more.."
        />
      </div>
    </div>
  );
};

export default Projects;
