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
    <div className="ProjectModal bg-lighter p-10 relative w-280">
      <h2 className="text-center pb-3">{project.title}</h2>
      <div>
        <div className="content flex flex-col items-center">
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
          <div className="Summary flex justify-center items-center">
            <Image
              width={440}
              height={440}
              src={project.img}
              alt={project.title}
            />
            <div>
              <h3 className="whitespace-pre-line">{project.summary}</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 text-center">
            <div className="flex gap-5 items-center">
            <p className="whitespace-pre-line">{project.desc}</p>
            <div className="grid grid-cols-2 justify-center w-120">
              {project.screenshots.map((img, index)=>(
              <Image key={index} width={400} height={200} src={img} alt={project.title} className="w-full h-auto"/>
            ))}
            </div>
            </div>
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
