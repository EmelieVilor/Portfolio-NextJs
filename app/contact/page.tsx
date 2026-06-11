import EmailForm from "@/components/ui/EmailForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative">
                <img
          src="/images/svg/Pil.svg"
          alt="favicon"
          className="object-contain h-[90px] w-[90px] absolute top-30 right-55 rotate-10"
        />
    <div className="Contact flex justify-center gap-10 h-screen items-center">
      <div>
      <Image style={{ borderRadius: "59% 41% 64% 36% / 52% 47% 53% 48% " }}
        width={350}
        height={350}
        className="object-contain"
        src="/images/profilepictures/bild4_svartvit.jpg"
        alt="Emelie_contact_picture"
      />
      </div>
      <div>
        <h2>Let's work together!</h2>
        <h2>Get in touch using the form below.</h2>
        <EmailForm />
      </div>
    </div>
    <img
              src="/images/svg/Penna.svg"
              alt="favicon"
              className="object-contain h-[150px] w-[150px] absolute right-50 -bottom-5 sway"
            />
    </div>
  );
}
