import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Markdown from "react-markdown";
import { Badge } from "./ui/badge";

interface Project {
    title: string;
    description: string;
    dates: string;
    technologies: string[];
    href: string;
    links: {
        href: string;
        type: string;
        icon: React.ElementType;
    }[];
    image?: string;
    video?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="text-left flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
            <Link
                href={project.href || "#"}
                className="block cursor-pointer"
            >
                {project.video && (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                    />
                )}
                {project.image && (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="h-40 w-full overflow-hidden object-cover object-top"
                    />
                )}
            </Link>
            <CardHeader className="px-2 pb-0 pt-1">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-base">{project.title}</CardTitle>
                    <time className="text-xs">{project.dates}</time>
                    <Markdown className="prose max-w-full text-pretty text-xs text-muted-foreground dark:prose-invert">
                        {project.description}
                    </Markdown>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-2">
                {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                        {project.technologies.map((tag) => (
                            <Badge
                                key={tag}
                                className="px-1 py-0 text-[10px]"
                                variant="secondary"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 pb-2">
                {project.links && project.links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1">
                        {project.links.map((link, idx) => (
                            <Link href={link.href} key={idx} target="_blank">
                                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                                    <link.icon className="size-3" />
                                    {link.type}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}