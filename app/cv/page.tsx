export default function CV() {
  return (
    <div className="CVPage">
      <h2 className="text-center">CV</h2>
      <h3 className="text-center">
        {" "}
        Combining a background in Interaction Design
      </h3>
      <h3 className="text-center">
        with modern Frontend development and customer service.
      </h3>

      <div className="CV flex justify-center gap-15 p-10">
        <div className="Experience bg-lighter text-center p-5">
          <h2 className="mb-2">Experience</h2>
          <div className="text-left flex flex-col gap-9 p-8 w-130 border-l-2 border-accent">
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Axis Communications
              </h3>
              <h3>2025 | Frontend Developer Intern</h3>
              <p className="mt-2">
                Developed scalable UI components and integrated them into the
                company's design system using Storybook. Worked in close
                collaboration with other developers and UX designers.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                SJ AB
              </h3>
              <h3>2025-Ongoing | Lounge Host</h3>
              <p className="mt-2">
                Responsible for maintaining a premium environment at the SJ
                Lounge at Malmö central station. Includes food service, managing
                rebookings and assisting at the train platform.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Infotiv
              </h3>
              <h3>2023 | Technical Writer</h3>
              <p className="mt-2">
                Short-term position focusing on technical writing and web
                development. Contributed to foundational work and documentation
                for the company’s updated website.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Trafikverket
              </h3>
              <h3>2020-2023 | Traffic Informer</h3>
              <p className="mt-2">
                Managed real-time traffic data using complex digital management
                systems to provide passenger information through digital signage
                and public announcements.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Afry
              </h3>
              <h3>2020 | Master Thesis</h3>
              <p className="mt-2">
                Designed a web prototype aimed to facilitate corporate
                collaboration for industrial symbiosis in Malmö.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                SJ AB
              </h3>
              <h3>2010-2020 | Service Agent</h3>
              <p className="mt-2">
                Handled ticket logistics and coordinated information for both
                passengers and staff during disruptions.
              </p>
            </div>
          </div>
        </div>
        <div className="Education bg-lighter text-center p-5">
          <h2 className="mb-2">Education</h2>
          <div className="text-left flex flex-col gap-10 p-8 w-130 border-l-2 border-accent">
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Frontend Development
              </h3>
              <h3>2025-2026 | Yrkeshögskolan i Borås</h3>
              <p className="mt-2">
                Vocational training in full-stack web and app development.
                Strong focus on JavaScript, TypeScript and React frameworks.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Interaction Design, Master
              </h3>
              <h3>2018-2020 | Malmö University</h3>
              <p className="mt-2">
                Advanced and international education with a strong emphasis on
                research methodology to explore and investigate complex design
                problems. Grounded design decisions in research and academic
                materials.{" "}
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Interaction Design, Bachelor
              </h3>
              <h3>2014-2017 | Malmö University</h3>
              <p className="mt-2">
                Practical education with focus on the design process and how to
                create intuitive user flows. Achieved through developing design
                concepts and prototypes by using design methodology and
                iterative evaluation.
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-sm tracking-[2.5]">
                Graphic Design
              </h3>
              <h3>2006-2009 | Gymnasium</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
