import Header from "@/components/layout/Header";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <div className="HomePage">
      <Header />
      <Skills />
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
