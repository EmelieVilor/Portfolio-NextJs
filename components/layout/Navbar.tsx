import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="Navbar flex p-5 justify-between">
         <Image
              width={35}
              height={30}
              src="/images/favicon.png"
              alt="favicon"
            />

      <div className="flex gap-5 items-center">
        <Link className="uppercase text-xs tracking-widest font-sans" href="/">Home</Link>
        <Link className="uppercase text-xs tracking-widest font-sans" href="/about">About</Link>
        <Link className="bg-accent uppercase text-xs tracking-widest font-sans py-2 px-5 rounded-3xl" href="/contact">Contact</Link>
      </div>
    </div>
  );
}
