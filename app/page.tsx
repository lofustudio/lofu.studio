import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex flex-col mx-auto my-10 mt-32 md:mt-60">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image src="/assets/dark.png" alt="logo" width={192} height={192} />
          <div>
            <h1 className="text-5xl font-bold font-display">
              Only up from here.
            </h1>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Lofu Studio is a small group of software makers, design thinkers, and product builders. <br />
            Privacy, security, and transparency are our core values and we strive to help build a better digital world.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Link href="/about" className="flex flex-row gap-2">
            <Button size="sm">
              Learn More
            </Button>
          </Link>
          <Link href="https://discord.gg/8hzfjj9hEc">
            <Button size="sm" theme="secondary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
