import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "@/types/ProjectType";

export default function ProjectCard({ project, onClick }: { project: Project; onClick:() => void }) {
  return (
    <div className="ProjectCard bg-lighter w-90 p-5 flex flex-col items-center h-full cursor-pointer hover:scale-102 transition-all" onClick={onClick}>
      <h2>{project.title}</h2>
      <div className="tags flex flex-wrap gap-2 mt-3 justify-center">
        {project.tags.map((tag) => (
          <p key={tag} className="bg-tags py-2 px-5 rounded-3xl text-[12px]">
            {tag}
          </p>
        ))}
      </div>
      <Image
        width={300}
        height={300}
        src={project.img}
        alt="Emelie_profile_picture"
        style={{ height: "auto" }}
      />
      <div className="flex flex-col gap-3">
        <Link
          className="flex gap-3 items-center bg-lighter w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:bg-accent hover:text-dark transition-all"
          href="/"
        >
          Read More{" "}
        </Link>
        <Link
          className="flex gap-2 items-center bg-accent w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark transition-all"
          href="/"
        >
          GitHub <FontAwesomeIcon className="text-md" icon={faGithub} />
        </Link>
      </div>
    </div>
  );
}
