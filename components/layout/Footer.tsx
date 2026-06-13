import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

const today = new Date();

  return (
    <div className="Footer p-10 text-center flex flex-col gap-1 bg-lighter pt-25 mt-20" style={{ clipPath: "polygon(0 0, 100% 35%, 100% 100%, 0 100%)" }}>
        <p>{today.toLocaleDateString()} © Emelie Nilsson Vilör</p>
        <p className="text-accent">Created using Next.js | Tailwind CSS | Adobe Illustrator</p>
          <div className="flex gap-2 justify-center items-center mt-4">
          <a href="https://github.com/EmelieVilor"><FontAwesomeIcon className="text-lg hover:scale-110 transition-all" icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/emelie-vilor/"><FontAwesomeIcon className="text-lg hover:scale-110 transition-all" icon={faLinkedin} /></a>
          <a href="mailto:emelie.vilor@gmail.com"><FontAwesomeIcon className="text-lg hover:scale-110 transition-all" icon={faEnvelope} /></a>
        </div>
    </div>
  );
}