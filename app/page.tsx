import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="container flex flex-col mx-auto my-10 mt-32 md:mt-60">
      <div className="flex flex-col items-center gap-4 p-2 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image src="/assets/dark.png" alt="logo" width={192} height={192} />
          <div>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl font-display">
              Only up from here.
            </h1>
          </div>
          <Balancer>

            <p className="text-neutral-500 dark:text-neutral-400">
              Lofu Studio is a small group of software makers, design thinkers, and product builders. <br />
              <span className="hidden sm:inline-block">
                Privacy, security, and transparency are our core values and we strive to help build a better digital world.
              </span>
            </p>
          </Balancer>

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
