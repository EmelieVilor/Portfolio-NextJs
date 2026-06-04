import Image from "next/image";

export default function About() {
  return (
    <div className="About flex justify-center gap-5 items-center w-280 mx-auto">
      <Image
        style={{ borderRadius: "43% 57% 32% 68% / 50% 60% 40% 50%" }}
        width={300}
        height={300}
        src="/images/bild4_svartvit.jpg"
        alt="Emelie_about_picture"
      />
      <div className="text-center">
        <h2>More About Me!</h2>
        <h3>Get to know me better.</h3>
        <div className="border-l-2 border-accent pl-4 text-left mt-5">
          <p>
            I have been interested in design and development in many different
            ways since high school, and completed my master's degree in
            Interaction Design in 2020. <br/><br/>
            
            Now, I am expanding my knowledge further
            by studying Frontend development. As a Frontend developer with a
            background in Interaction Design, I strive to write scalable code
            and create interfaces that meet the users’ needs. With my deep
            understanding of the design process, I can easily translate design
            sketches into finished technical solutions. What I specifically love
            about UX design and web development is the ability to design and
            build useful products and services that can inspire behavioral
            change. <br/><br/>
            
            Based in Malmö and I live with my wife and our two children.
            In my spare time I like to meet with friends and family, play board
            games or find fun home decor at Facebook Marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}
