import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

const today = new Date();

  return (
    <div className="Footer p-10 text-center flex flex-col gap-1 bg-lighter pt-25" style={{ clipPath: "polygon(0 0, 100% 35%, 100% 100%, 0 100%)" }}>
        <p>{today.toLocaleDateString()} © Emelie Nilsson Vilör</p>
        <p className="text-accent">This site is created with Next.js | Tailwind CSS</p>
          <div className="flex gap-2 justify-center items-center mt-4">
          <Link href="/"><FontAwesomeIcon className="text-lg" icon={faGithub} /></Link>
          <Link href="/"><FontAwesomeIcon className="text-lg" icon={faLinkedin} /></Link>
          <Link href="/"><FontAwesomeIcon className="text-lg" icon={faEnvelope} /></Link>
        </div>
    </div>
  );
}