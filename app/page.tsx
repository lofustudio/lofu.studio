import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import ProjectCol from "@/components/projects/col";
import { Box, Code, Pen, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-center w-full mx-auto my-10 mt-32 md:mt-60">
      <div className="flex flex-col w-full max-w-3xl gap-4 p-2 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image src="/assets/light.png" alt="logo" width={192} height={192} className="dark:hidden" />
          <Image src="/assets/dark.png" alt="logo" width={192} height={192} className="hidden dark:block" />
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl font-display">
              Only up from here.
            </h1>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Lofu Studio is a small group of software makers, design thinkers, and product builders.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-4">
          <Link href="/projects" className="flex flex-row gap-2">
            <Button size="sm">
              Our Work
            </Button>
          </Link>
          <Link href="https://discord.gg/8hzfjj9hEc">
            <Button size="sm" theme="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2 text-center mt-80">
          <div className="flex flex-col items-center gap-0">
            <span className="text-sm text-neutral-600 dark:text-neutral-500">
              ...or down, that's fine too
            </span>
            <p className="flex flex-row flex-wrap items-center justify-center gap-2 text-3xl font-bold text-center sm:text-4xl">

              <span className="flex flex-row items-center justify-center gap-2 flex-inline">
                <Pen className="h-9 w-9" />Design,
              </span>

              <span className="flex flex-row items-center justify-center gap-2 flex-inline">
                <Code className="h-9 w-9" /> Write,
              </span>

              <span className="flex flex-row items-center justify-center gap-2 flex-inline">
                <Box className="h-9 w-9" /> Build.
              </span>
            </p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            <Balancer>
              Security, speed and transparency are our top priorities and we make sure that each and every one of our products meets those criteria, so you can worry less about the technical stuff and focus on sending that cat meme to your friend.
            </Balancer>
          </p>
          <div className="flex flex-col items-center w-full gap-2 py-4">
            <ProjectCol title="Horizon" desc="A stupidly simple music app that syncs your library between devices." href="https://horizon.lofu.studio" year={2023} img={"/assets/banners/horizon.webp"} />
            <ProjectCol title="Arisu" desc="An all-in-one, easy to host, multi-purpose Discord bot." href="https://github.com/lofustudio/arisu" year={2021} img={"/assets/banners/arisu.webp"} />
            <ProjectCol title="lofu.studio" desc="The official Lofu Studio website. Build by @tygerxqt" href="https://github.com/lofustudio/lofu.studio" year={2020} img="/assets/banners/lofu-studio.webp" />
          </div>
        </div>
      </div>
    </main>
  )
}
