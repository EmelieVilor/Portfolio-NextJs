import EmailForm from "@/components/ui/EmailForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="Contact flex flex-col lg:flex-row justify-center gap-10 h-full items-center relative pb-28">
      <Image
        priority
        style={{ borderRadius: "59% 41% 64% 36% / 52% 47% 53% 48% " }}
        width={350}
        height={350}
        className="object-contain"
        src="/images/profilepictures/bild4_svartvit.jpg"
        alt="Emelie_contact_picture"
      />
      <div>
        <div className="relative inline-block w-80 lg:w-full">
          <img
            src="/images/svg/Pil.svg"
            alt="favicon"
            className="object-contain h-[90px] w-[90px] absolute -top-[1] -right-[10vw] lg:-right-[4vw] rotate-10"
          />
          <h2>Let's work together!</h2>
          <h2>Get in touch using the form below.</h2>
        </div>
        <EmailForm />
      </div>
      <img
        src="/images/svg/Penna.svg"
        alt="favicon"
        className="object-contain h-[150px] w-[150px] absolute right-[14vw] -bottom-[8vh] lg:-bottom-[4vh] sway"
      />
    </div>
  );
}
