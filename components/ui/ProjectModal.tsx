import type { Project } from "@/types/ProjectType";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { XCircleIcon } from "@heroicons/react/16/solid";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="ProjectModal bg-lighter p-10 relative">
      <h2 className="text-center pb-3">{project.title}</h2>
      <div>
        <div className="content">
          <XCircleIcon
            className="w-5 h-5 close-modal text-xl hover:text-accent transition-all absolute top-4 right-4 cursor-pointer"
            onClick={onClose}
          />
          <div className="tags flex flex-wrap gap-2 justify-center border-b-2 border-tags pb-5">
            {project.tags.map((tag) => (
              <p
                key={tag}
                className="bg-tags py-2 px-5 rounded-3xl text-[11px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="Summary flex justify-center items-center w-260 mx-auto">
            <Image
              width={500}
              height={500}
              src={project.img}
              alt="Emelie_profile_picture"
            />
            <div>
              <h3>{project.summary}</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto gap-8 w-250">
            <p>{project.desc}</p>
            <Link
              className="flex gap-2 items-center bg-lighter w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark hover:bg-accent transition-all"
              href="/"
            >
              GitHub <FontAwesomeIcon className="text-md" icon={faGithub} />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
