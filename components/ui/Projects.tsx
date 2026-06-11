"use client";

import ProjectCard from "./ProjectCard";
import { useContext, useState } from "react";
import projectContext from "@/hooks/ProjectContext";
import type { Project } from "@/types/ProjectType";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const projects = useContext(projectContext);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <div className="relative">
      <img
        src="/images/svg/Pil.svg"
        alt="favicon"
        className="object-contain h-[80px] w-[80px] absolute top-7 right-125 rotate-350"
      />
      <div className="Projects p-10 bg-dark -mb-40 pb-30">
        <h2 className="text-center">Projects</h2>
        <h3 className="text-center mb-10">Mix of previous projects.</h3>
        <div className="grid grid-cols-3 gap-x-0 gap-y-10 justify-center items-stretch place-items-center mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setModalProject(project)}
            />
          ))}
        </div>
        {modalProject && (
          <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/60 backdrop-blur-xs">
            <ProjectModal
              project={modalProject}
              onClose={() => setModalProject(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
