import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sun } from "lucide-react";
import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav className="flex flex-col items-center justify-center w-full my-2">
                <div className="flex flex-row items-center justify-between max-w-[1200px] w-full gap-4 p-2">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="/">
                            <Image width={32} height={32} src="/assets/dark.png" alt="logo" className="hidden dark:block" />
                            <Image width={32} height={32} src="/assets/light.png" alt="logo" className="dark:hidden" />
                        </Link>
                        {/* <span className="text-xl font-semibold">lofu</span> */}
                    </div>

                    <div className="hidden gap-2 sm:flex">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="outline-none">
                                <Button variant="link">
                                    Projects
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <Link href="https://horizon.lofu.studio">
                                    <DropdownMenuItem>
                                        <Sun className="w-4 h-4 mr-2" />
                                        <span>Horizon</span>
                                    </DropdownMenuItem>
                                </Link>
                                {/* <DropdownMenuItem disabled>
                                    <Activity className="w-4 h-4 mr-2" />
                                    <span>Deck (Soon)</span>
                                </DropdownMenuItem> */}
                                <hr className="w-full border border-black/10 dark:border-white/10" />
                                <Link href="https://github.com/orgs/lofustudio/repositories?type=source">
                                    <DropdownMenuItem>
                                        <Layout className="w-4 h-4 mr-2" />
                                        <span>All projects</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/blog">
                            <Button variant="link">
                                Blog
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="link">
                                About
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <ThemeToggle />
                        <Button variant="ghost" className="text-black sm:hidden dark:text-white" size="icon">
                            <Menu />
                        </Button>
                    </div>
                </div>
            </nav >
        </>
    )
}