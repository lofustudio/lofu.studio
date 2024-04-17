import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav className="flex flex-col items-center justify-center w-full my-2">
                <div className="flex flex-row items-center justify-between max-w-[1200px] w-full gap-4 p-2">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="/">
                            <Image
                                width={32}
                                height={32}
                                src="/assets/dark.png"
                                alt="logo"
                                className="hidden dark:block"
                            />
                            <Image
                                width={32}
                                height={32}
                                src="/assets/light.png"
                                alt="logo"
                                className="dark:hidden"
                            />
                        </Link>
                    </div>

                    <div className="hidden gap-2 sm:flex">
                        <Link href="/">
                            <Button variant="link">About</Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="link">Projects</Button>
                        </Link>
                    </div>

                    <div>
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            className="text-black sm:hidden dark:text-white"
                            size="icon"
                        >
                            <Menu />
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
}
