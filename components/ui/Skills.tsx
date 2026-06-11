export default function Skills() {
  return (
    <div
      className="Skills bg-lighter pt-40 flex gap-15 justify-center w-screen pb-20"
      style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="TechSkills">
        <h2 className="text-center">Tech Skills</h2>
        <div className="Lines flex flex-col gap-2 w-130">
          <h3 className="mt-3">HTML / CSS</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[95%]">
            </div>
          </div>
          <h3 className="mt-3">JavaScript, TypeScript</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[85%]">
            </div>
          </div>
          <h3 className="mt-3">React</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[80%]">
            </div>
          </div>
          <h3 className="mt-3">NextJS</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[75%]">
            </div>
          </div>
          <h3 className="mt-3">Figma, Adobe CS</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[82%]">
            </div>
          </div>
        </div>
      </div>
      <div className="KnowledgeAreas">
        <h2 className="text-center">Knowledge Areas</h2>
        <div className="Lines flex flex-col gap-2">
          <h3 className="mt-3">Web Development</h3>
          <div className="line bg-dark h-2.5 w-130">
            <div className="progress bg-accent h-2.5 w-[95%]">
            </div>
          </div>
          <h3 className="mt-3">App Development</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[65%]">
            </div>
          </div>
          <h3 className="mt-3">UX/UI Design</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[98%]">
            </div>
          </div>
          <h3 className="mt-3"> User Research</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[90%]">
            </div>
          </div>
          <h3 className="mt-3"> Concept Development</h3>
          <div className="line bg-dark h-2.5 w-full">
            <div className="progress bg-accent h-2.5 w-[99%]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
