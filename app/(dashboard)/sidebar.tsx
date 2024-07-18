import {
    BriefcaseBusiness,
    Building,
    Home,
    LineChart,
    Settings,
    Users2,
  } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
  } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";


export const Sidebar = () => {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link href="/">
                    <Image src="/favicon.svg" height="24" width="24" alt="Touch The Peak" />
                    <span className="sr-only">Touch The Peak</span>
                </Link>
                <TooltipProvider>
                    {[
                        { icon: <Home className="h-5 w-5" />, label: "Dashboard", link: "/dashboard" },
                        { icon: <Building className="h-5 w-5" />, label: "Companies", link: "/dashboard/companies" },
                        { icon: <BriefcaseBusiness className="h-5 w-5" />, label: "Jobs", link: "/dashboard/jobs" },
                        { icon: <Users2 className="h-5 w-5" />, label: "Applicants", link: "/dashboard/applicants" },
                        { icon: <LineChart className="h-5 w-5" />, label: "Analytics", link: "/dashboard/analytics" },
                    ].map((item, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.link}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    {item.icon}
                                    <span className="sr-only">{item.label}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.label}</TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    );
  };