import EmailForm from "@/components/ui/EmailForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="Contact flex justify-center gap-10 h-screen items-center">
      <div>
      <Image style={{ borderRadius: "59% 41% 64% 36% / 52% 47% 53% 48% " }}
        width={350}
        height={350}
        className="object-contain"
        src="/images/bild4_svartvit.jpg"
        alt="Emelie_contact_picture"
      />
      </div>
      <div>
        <h2>Let's work together!</h2>
        <h2>Get in touch using the form below.</h2>
        <EmailForm />
      </div>
    </div>
  );
}
