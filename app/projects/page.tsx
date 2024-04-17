import ProjectCol from "@/components/projects/col";

export default function ProjectsPage() {
    return (
        <>
            <div className="flex flex-col gap-2 pt-2 w-full max-w-[1200px]">
                <div className="pb-4">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        ~/projects
                    </h2>
                    <p className="text-sm">
                        The entire list of projects We&apos;ve made over the
                        years, including the ones that are still in development.
                    </p>
                </div>
                <ProjectCol
                    title={"Horizon"}
                    desc={
                        "A cross-platform music player that syncs your library."
                    }
                    href={"https://github.com/lofustudio/arisu"}
                    year={2023}
                    img={"/assets/banners/horizon.webp"}
                />
                <ProjectCol
                    title={"Arisu"}
                    desc={
                        "An all-in-one, easy to host, multi-purpose Discord bot."
                    }
                    href={"https://github.com/lofustudio/arisu"}
                    year={2021}
                    img={"/assets/banners/arisu.webp"}
                />
                <ProjectCol
                    title={"lofu.studio"}
                    desc={
                        "The official Lofu Studio website. Built by @tygerxqt"
                    }
                    href={"https://github.com/lofustudio/lofu.studio"}
                    year={2020}
                    img={"/assets/banners/lofu-studio.webp"}
                />
            </div>
        </>
    );
}