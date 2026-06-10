import EmailForm from "@/components/ui/EmailForm";
import Image from "next/image";
import Form from "next/form";

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
        <h2>Send me a message.</h2>
        <div className="h-90 w-70 bg-lighter mt-5">
          <Form>
            <input></input>
            <button type="submit">Send Message!</button>
          </Form>

          <p></p>
          <p></p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
}
