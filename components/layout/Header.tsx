import Image from "next/image";
import {
  ArrowDownOnSquareIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <div className="relative">
            <img
        src="/images/svg/Streck2.svg"
        alt="favicon"
        className="object-contain h-[70px] w-[70px] absolute left-60 top-8 rotate-300"
      />
    <div className="Header p-10 flex gap-10 items-center justify-center">
      <Image
        style={{ borderRadius: "43% 57% 32% 68% / 50% 60% 40% 50%" }}
        width={350}
        height={350}
        src="/images/profilepictures/4.jpg"
        alt="Emelie_profile_picture"
      />
      <div className="flex flex-col gap-2">
        <h1 className="-mb-4">Emelie Vilör</h1>
        <h2 className="text-[19px]">Frontend developer & UX designer</h2>
        <div>
          <p>Available for new opportunities to develop my knowledge.</p>
          <p>Check out my previous projects or download my full CV below!</p>
        </div>
        <div className="flex gap-5 mt-4">
          <a
            className="flex gap-3 w-55 items-center justify-center bg-dark uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:bg-accent hover:text-dark transition-all"
            href="/documents/EmelieVilor_2026_eng.pdf" download="Emelie_2026_CV.pdf"
          >
            Download my CV <ArrowDownOnSquareIcon className="w-4 h-4" />
          </a>
          <a
            className="flex gap-3 w-55 items-center justify-center bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark transition-all"
            href="#projects"
          >
            View my projects <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
          <img
          src="/images/svg/Hand.svg"
          alt="favicon"
          className="object-contain h-[350px] w-[350px] absolute -bottom-18 -right-5 sway"
        />
    </div>
  );
}
