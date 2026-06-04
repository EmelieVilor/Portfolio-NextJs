import type { Project } from "next/dist/build/swc/types";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectModal({ project }:{ project: Project}) {


  return (
    <div className="ProjectModal">
        <h2>{project.title}</h2>

        <div className="modal" id="project1">
          <div className="content">
            <span className="close-modal">x</span>
            <h2></h2>
            <div className="tags">
              <p>App Development</p>
            </div>
            <div className="text-content">
              <Image
                      width={300}
                      height={300}
                      src={project.img}
                      alt="Emelie_profile_picture"
                    />
              <div>
                <h3>Summary of project.</h3>
              </div>
            </div>
            <div className="project-description">
              <p>Assignment, Execution, Reflection.</p>
              <ul>
                <li>Teck Stack & Tools</li>
                <li>list item</li>
                <li>list item</li>
              </ul>
              <p>Assignment, Process, Reflection.</p>
            </div>
            <div>
              <Link
          className="flex gap-2 items-center bg-accent w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark transition-all"
          href="/"
        >
          GitHub <FontAwesomeIcon className="text-md" icon={faGithub} />
        </Link>
            </div>
          </div>
    </div>
    </div>
  );
}
