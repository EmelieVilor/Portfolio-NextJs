import type { Project } from "@/types/ProjectType";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { XCircleIcon, ArrowDownOnSquareIcon } from "@heroicons/react/16/solid";

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
          <div className="Summary flex flex-col lg:flex-row gap-4 justify-center items-center border-b-2 border-tags pb-5">
            <Image
              width={440}
              height={440}
              src={project.img}
              alt={project.title}
            />
              <h3 className="whitespace-pre-line">{project.summary}</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 text-center">
            <div className="flex flex-col lg:flex-row mt-10 gap-5 items-center p-5">
              <p className="whitespace-pre-line w-full lg:w-200">{project.desc}</p>
              <div className="flex flex-col gap-2">
                {project.screenshots.map((img, index) => (
                  <Image
                    key={index}
                    width={400}
                    height={200}
                    src={img}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                ))}
              </div>
            </div>
            {project.githublink && (
              <Link
                className="flex gap-2 items-center bg-lighter w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark hover:bg-accent transition-all"
                href={project.githublink}
              >
                GitHub <FontAwesomeIcon className="text-md" icon={faGithub} />
              </Link>
            )}
            {project.downloadlink && (
              <Link
                className="flex gap-2 items-center bg-lighter w-70 justify-center uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark hover:bg-accent transition-all"
                href={project.downloadlink}
              >
                Download  <ArrowDownOnSquareIcon className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
