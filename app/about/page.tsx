import Image from "next/image";

export default function About() {
  return (
    <div className="About flex flex-col lg:flex-row justify-center items-center gap-7 mx-auto p-8 lg:p-15">
      <div className="flex justify-center">
        <div className="relative inline-block">
          <img
            src="/images/svg/Streck1.svg"
            alt="favicon"
            className="object-contain h-[70px] w-[70px] absolute -left-[2vw] -top-[2vh] rotate-335"
          />
          <Image
            priority
            style={{ borderRadius: "43% 57% 32% 68% / 50% 60% 40% 50%" }}
            width={300}
            height={300}
            src="/images/profilepictures/Emelie2.jpg"
            alt="Emelie_about_picture"
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-center relative w-150">
        <h2>More About Me!</h2>
        <h3>Get to know me better.</h3>
        <div className="border-l-2 border-accent pl-4 mb-35 text-left mt-5 w-full lg:w-150">
          <p>
            I have been interested in design and development in many different
            ways since high school, and completed my master's degree in
            Interaction Design in 2020. <br />
            <br />
            Now, I am expanding my knowledge further by studying Frontend
            development. As a Frontend developer with a background in
            Interaction Design, I strive to write scalable code and create
            interfaces that meet the users’ needs. With my deep understanding of
            the design process, I can easily translate design sketches into
            finished technical solutions. What I specifically love about UX
            design and web development is the ability to design and build useful
            products and services that can inspire behavioral change. <br />
            <br />
            Born and raised in Malmö, Sweden, and that is where I live with my
            wife and our two children. In my spare time I like to meet with
            friends and family, play board games or hunt for fun home decor at
            Facebook Marketplace.
          </p>
          <img
            src="/images/svg/Dator.svg"
            alt="favicon"
            className="object-contain h-[290px] w-[290px] absolute -right-[10vw] -bottom-[20vh] sway"
          />
        </div>
      </div>
    </div>
  );
}
