import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="Navbar flex p-5 justify-between">
      <Link href="/">
        <Image
          width={35}
          height={35}
          src="/images/favicon.png"
          alt="favicon"
          className="object-contain"
        />
      </Link>

      <div className="flex gap-5 items-center">
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/"
        >
          Home
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/about"
        >
          About
        </Link>
        <Link
          className="uppercase text-xs tracking-widest font-sans hover:text-accent transition-all"
          href="/cv"
        >
          CV
        </Link>
        <Link
          className="bg-accent uppercase text-xs tracking-widest font-sans py-3 px-5 rounded-3xl hover:bg-tags hover:text-accent transition-all"
          href="/contact"
        >
          Contact Me!
        </Link>
      </div>
    </div>
  );
}
