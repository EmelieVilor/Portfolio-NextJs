export default function Skills() {
  return (
    <div
      className="Skills bg-lighter pt-45 pb-10 flex flex-col gap-10"
      style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="flex gap-15 justify-center w-screen">
        <div className="TechSkills">
          <h2 className="text-center">Tech Skills</h2>
          <div className="Lines flex flex-col gap-2 w-130">
            <h3 className="mt-3">HTML / CSS</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[95%] skills"></div>
            </div>
            <h3 className="mt-3">JavaScript, TypeScript</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[89%] skills"></div>
            </div>
            <h3 className="mt-3">React</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[83%] skills"></div>
            </div>
            <h3 className="mt-3">NextJS</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[75%] skills"></div>
            </div>
            <h3 className="mt-3">Figma, Adobe CS</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[92%] skills"></div>
            </div>
          </div>
        </div>
        <div className="KnowledgeAreas">
          <h2 className="text-center">Knowledge Areas</h2>
          <div className="Lines flex flex-col gap-2">
            <h3 className="mt-3">Web Development</h3>
            <div className="line bg-dark h-2.5 w-130">
              <div className="progress bg-accent h-2.5 w-[95%] skills"></div>
            </div>
            <h3 className="mt-3">App Development</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[65%] skills"></div>
            </div>
            <h3 className="mt-3">UX/UI Design</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[98%] skills"></div>
            </div>
            <h3 className="mt-3"> User Research</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[90%] skills"></div>
            </div>
            <h3 className="mt-3"> Concept Development</h3>
            <div className="line bg-dark h-2.5">
              <div className="progress bg-accent h-2.5 w-[99%] skills"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="mb-3 mt-5">Additional Areas</h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            NodeJs
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            MySQL
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            MongoDB
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Jira
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Github Projects
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            YAML
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Drupal
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Wordpress
          </p>
          </div>
          <div className="flex gap-3">
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Service Design
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Game Design
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Technical Writing
          </p>
          <p className="tags bg-tags py-2 px-5 rounded-3xl text-[12px]">
            Customer Service
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
