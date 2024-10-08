import ProjectCard from "@/components/project-card";
import RESUME from "@/data/resume";

export default function Projects() {
    return (
        <main className="pt-8 pb-20 space-y-10 max-w-2xl mx-auto px-6">
            <section id="projects">
                <div className="flex flex-col items-center justify-center space-y-4 text-center pt-5">
                    <div className="space-y-2">
                        <span className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Projects</span>
                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">I like to build stuff</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed w-full sm:w-3/4 sm:mx-auto">
                            I&apos;ve built of projects, ranging from simple to complex web applications. Here are some of them.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full mx-auto">
                        {RESUME.projects.map((project, i) => (
                            <ProjectCard key={i} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}