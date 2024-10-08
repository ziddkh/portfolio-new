import Navigation from "@/interfaces/navigation";
import { CodeIcon, HomeIcon, PencilLineIcon } from "lucide-react";

const NAVIGATION: Navigation[] = [
    {
        href: '/',
        icon: HomeIcon,
        label: 'Home',
    },
    {
        href: '/projects',
        icon: CodeIcon,
        label: 'Projects'
    },
    {
        href: '/blogs',
        icon: PencilLineIcon,
        label: 'Blogs'
    }
]

export default NAVIGATION;