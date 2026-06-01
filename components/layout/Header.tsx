import Image from "next/image";
import Link from "next/link";
import { ArrowDownOnSquareIcon, ArrowRightIcon } from "@heroicons/react/16/solid";


export default function Header() {
  return (
    <div className="Header p-10 flex gap-6 items-center justify-center">
      <Image
        width={300}
        height={300}
        src="/images/4.jpg"
        alt="Emelie_profile_picture"
      />
      <div className="flex flex-col gap-2">
        <h1>Emelie Vilör</h1>
        <h2>Frontend developer & UX designer</h2>
        <div>
        <p>
          Available for new opportunities to develop my knowledge.</p>
          <p>
          Check out my previous projects or download my full CV below!
        </p>
        </div>
        <div className="flex gap-5 mt-4">
          <Link className="flex gap-3 items-center bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 rounded-3xl" href="/">Download my CV <ArrowDownOnSquareIcon className="w-4 h-4"/></Link>
          <Link className="flex gap-3 items-center bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 rounded-3xl" href="/">View my projects <ArrowRightIcon className="w-4 h-4"/></Link>
        </div>
      </div>
    </div>
  );
}
