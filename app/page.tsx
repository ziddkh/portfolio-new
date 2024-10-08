import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import RESUME from "@/data/resume";

export default function Home() {
  return (
    <main className="pt-8 pb-20 space-y-10 max-w-2xl mx-auto px-6">
      <section id="hero">
        <h2 className="text-2xl font-semibold sm:text-3xl tracking-tight">{RESUME.greets}</h2>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{RESUME.description}</p>
        <h3 className="mt-6 text-lg font-semibold sm:text-xl">About</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{RESUME.summary}</p>
      </section>
      <section id="projects">
        <div className="flex flex-col items-center justify-center space-y-4 text-center pt-5">
          <div className="space-y-2">
            <span className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Projects</span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Check out my latest work</h3>
            <p className="text-sm text-muted-foreground leading-relaxed w-full sm:w-3/4 sm:mx-auto">
              I&apos;ve worked on variety of projects, from simple to complex web applications. Here are the latest of my projects.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full mx-auto">
            {RESUME.projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex flex-col items-center justify-center space-y-4 text-center pt-10">
          <div className="space-y-2 w-full">
            <span className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Get in Touch</h3>
            <p className="text-sm text-muted-foreground leading-relaxed w-full sm:w-3/4 sm:mx-auto">
              Want to collaborate or have any questions? Feel free to contact me with form below.
            </p>
            <div className="text-left pt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
