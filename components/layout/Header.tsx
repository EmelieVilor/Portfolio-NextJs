import Image from "next/image";
import {
  ArrowDownOnSquareIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <div className="Header p-15 flex flex-col gap-8 items-center justify-center relative lg:flex-row">
      <div className="relative inline-block">
        <img
          src="/images/svg/Streck2.svg"
          alt="favicon"
          className="object-contain h-[70px] w-[70px] absolute -left-[6vw] lg:-left-[3vw] -top-[2vh] lg:-top-[2vh] rotate-300"
        />
        <Image
        priority
          style={{ borderRadius: "43% 57% 32% 68% / 50% 60% 40% 50%" }}
          width={330}
          height={330}
          src="/images/profilepictures/4.jpg"
          alt="Emelie_profile_picture"
          
        />
      </div>
      <div className="flex flex-col gap-2 md:w-135">
        <h1 className="lg:-mb-4 text-5xl lg:text-[59px] lg:mb-2">Emelie Vilör</h1>
        <h2 className="text-[15px] md:text-[19px]">Frontend developer & UX designer</h2>
        <div>
          <p>Available for new opportunities to develop my knowledge.
          Check out my previous projects or download my full CV below!</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4 justify-center items-center w-full lg:w-120">
          <a
            className="flex gap-3 w-full items-center justify-center bg-dark uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:bg-accent hover:text-dark transition-all"
            href="/documents/EmelieVilor_2026_eng.pdf"
            download="Emelie_2026_CV.pdf"
          >
            Download my CV <ArrowDownOnSquareIcon className="w-4 h-4" />
          </a>
          <a
            className="flex gap-3 w-full items-center justify-center bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 border-2 border-accent hover:text-dark transition-all"
            href="#projects"
          >
            View my projects <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
      <img
        src="/images/svg/Hand.svg"
        alt="favicon"
        className="hidden lg:block object-contain h-[350px] w-[350px] absolute -bottom-[7vh] -right-[2vw] wave overflow-hidden"
      />
    </div>
  );
}
