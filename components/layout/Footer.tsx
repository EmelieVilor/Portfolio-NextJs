import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer p-10 text-center flex flex-col gap-2">
        <p>2026-06-01 © Emelie Nilsson Vilör</p>
        <p className="text-accent">This site is created with Next.js | Tailwind CSS</p>
          <div className="flex gap-2 justify-center items-center">
          <Link href="/"><FontAwesomeIcon className="text-xl" icon={faSquareGithub} /></Link>
          <Link href="/"><FontAwesomeIcon className="text-xl" icon={faLinkedin} /></Link>
          <Link href="/"><FontAwesomeIcon className="text-xl" icon={faEnvelope} /></Link>
        </div>
    </div>
  );
}