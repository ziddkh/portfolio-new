"use client";

import RESUME from "@/data/resume";
import { Separator } from "./ui/separator";
import NAVIGATION from "@/data/navigation";
import Link from "next/link";
import ButtonToggleTheme from "./button-toggle-theme";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <div className="sticky top-0 z-20 hidden overflow-hidden pb-1 sm:block">
            <nav className="border-b py-2 backdrop-blur-xl">
                <div className="mx-auto max-w-2xl px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-6">
                            <button className="tracking-tight font-bold">{ RESUME.appName }</button>
                            <Separator className="h-6" orientation="vertical" />
                            {NAVIGATION.map((nav, i) => (
                                <Link className={cn("text-sm relative flex items-center gap-x-3 py-2 transition-colors focus:outline-none sm:py-3 text-muted-foreground hover:text-foreground tracking-tighter", isActive(nav.href) && "text-foreground font-semibold")} href={nav.href} key={i}>{nav.label}</Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-x-1">
                            <ButtonToggleTheme />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}