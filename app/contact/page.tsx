import EmailForm from "@/components/ui/EmailForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="Contact flex justify-center gap-5 h-screen">
      <Image style={{ borderRadius: "59% 41% 64% 36% / 52% 47% 53% 48% " }}
        width={300}
        height={300}
        src="/images/bild4_svartvit.jpg"
        alt="Emelie_about_picture"
      />
      <div>
        <h2>Let's work together!</h2>
        <h2>Get in touch using the form below.</h2>
        <EmailForm />
      </div>
    </div>
  );
}
