import Image from "next/image";

export default function About() {
  return (
    <div className="HomePage">
      <h2>About Page</h2>
            <Image
              width={300}
              height={300}
              src="/images/bild4_svartvit.jpg"
              alt="Emelie_about_picture"
            />
    </div>
  );
}
