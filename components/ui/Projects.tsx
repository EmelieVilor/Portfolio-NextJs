'use client'

import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import projectContext from "@/hooks/ProjectContext";

export default function Projects() {
  const projects = useContext(projectContext);

  return (
    <div className="Projects p-10">
      <h2 className="text-center">Projects</h2>
      <h3 className="text-center mb-10">Mix of previous projects.</h3>
      <div className="grid grid-cols-3 gap-x-0 gap-y-10 justify-center items-stretch place-items-center mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
