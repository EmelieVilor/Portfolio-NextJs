import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      <img
        src="/images/svg/Streck1.svg"
        alt="favicon"
        className="object-contain h-[70px] w-[70px] absolute left-58 top-50 rotate-330"
      />
      <div className="About flex justify-center gap-8 items-center w-280 mx-auto h-screen">
        <Image
          style={{ borderRadius: "43% 57% 32% 68% / 50% 60% 40% 50%" }}
          width={300}
          height={300}
          src="/images/profilepictures/Emelie2.jpg"
          alt="Emelie_about_picture"
          className="object-contain"
        />
           {/* <img
              src="/images/svg/Kaffe.svg"
              alt="favicon"
              className="object-contain h-[110px] w-[110px] absolute right-25 top-65"
            /> */}
        <div className="text-center relative">
          <h2>More About Me!</h2>
          <h3>Get to know me better.</h3>
          <div className="border-l-2 border-accent pl-4 text-left mt-5 w-130">
            <p>
              I have been interested in design and development in many different
              ways since high school, and completed my master's degree in
              Interaction Design in 2020. <br />
              <br />
              Now, I am expanding my knowledge further by studying Frontend
              development. As a Frontend developer with a background in
              Interaction Design, I strive to write scalable code and create
              interfaces that meet the users’ needs. With my deep understanding
              of the design process, I can easily translate design sketches into
              finished technical solutions. What I specifically love about UX
              design and web development is the ability to design and build
              useful products and services that can inspire behavioral change.{" "}
              <br />
              <br />
              Based in Malmö and I live with my wife and our two children. In my
              spare time I like to meet with friends and family, play board
              games or find fun home decor at Facebook Marketplace.
            </p>
            <img
              src="/images/svg/Dator.svg"
              alt="favicon"
              className="object-contain h-[290px] w-[290px] absolute -right-55 -bottom-40 sway"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
