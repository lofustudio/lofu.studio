import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import ProjectCol from "@/components/projects/col";
import { Binary, Box, Code, ExternalLink, Pen, Shield, Twitter } from "lucide-react";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogCard from "@/components/blog/card";
import { FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  const posts = allPosts.filter(post => post.archived === false).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
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

        <div className="flex flex-col items-center gap-2 mt-40 text-center">
          <p className="flex flex-row flex-wrap items-center justify-center gap-2 text-3xl font-bold text-center sm:text-4xl">
            <Binary className="h-9 w-9" /> Behind the screens.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            <Balancer>
              Transparency is one of our core values, all of our code is open-source so you can have a peek at the action. Anything that requires extra explaination is documented in our blog, a few posts are featured below.
            </Balancer>
          </p>
          <div className="grid grid-cols-1 gap-4 p-2 py-4 sm:px-0 sm:gap-2 sm:grid-cols-2">
            <BlogCard post={posts[0]} />

            <Link href={`/blog`}>
              <button className="w-full min-h-[550px] border border-black/10 dark:border-white/10 flex flex-col p-0 m-0 rounded-lg text-start sm:hover:-translate-y-1 transition-transform">
                {/* <Image src={post.image} alt="blog post" height={550} width={1920} className="flex-1 object-cover rounded-lg grow" /> */}
                <div className="h-[550px]" />
                <div className="bottom-0 left-0 right-0 w-full rounded-lg backdrop-blur">
                  <div className="absolute bottom-0 w-full p-3 border-t rounded-b-lg backdrop-blur border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80">
                    <div className="flex flex-row justify-between w-full gap-2">
                      <h1 className="items-center text-xl font-bold sm:text-2xl font-display">
                        Want more?
                      </h1>
                      <p className="text-right">
                        <ExternalLink />
                      </p>
                    </div>
                    <p>
                      Click me to go to the blog page.
                    </p>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 my-40 text-center">
          <p className="flex flex-row flex-wrap items-center justify-center gap-2 text-3xl font-bold text-center sm:text-4xl">
            <ExternalLink className="h-9 w-9" /> Hidden in plain sight.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400">
            <Balancer>
              We're all over the world wide web, you can find us on all the major social media platforms. We also have a Discord server where you can hang out with us and other members of the community.
            </Balancer>
          </p>
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="flex flex-row gap-4">
              <Link href="https://discord.gg/2GQEwVbkHZ">
                <Button className="flex flex-row gap-2" size="sm">
                  <FaDiscord className="w-5 h-5" /> Discord
                </Button>
              </Link>
              <Link href="https://twitter.com/lofustudio">
                <Button className="flex flex-row gap-2" size="sm">
                  <FaTwitter className="w-5 h-5" /> Twitter
                </Button>
              </Link>
              <Link href="https://github.com/lofustudio">
                <Button className="flex flex-row gap-2" size="sm">
                  <FaGithub className="w-5 h-5" /> GitHub
                </Button>
              </Link>
            </div>
            <div className="flex flex-row gap-4">
              <Link href="https://youtube.com/@lofustudio">
                <Button className="flex flex-row gap-2" size="sm">
                  <FaYoutube className="w-5 h-5" /> Youtube
                </Button>
              </Link>
              <Link href="https://instagram.com/lofustudio">
                <Button className="flex flex-row gap-2" size="sm">
                  <FaInstagram className="w-5 h-5" /> Instagram
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
