import './globals.css'

import localFont from 'next/font/local';
import Nav from "../components/nav";
import Providers from "./providers";

const inter = localFont({
    src: "../fonts/Inter.woff2",
    display: "swap",
    variable: "--font-inter",
});
const montserrat = localFont({
    src: "../fonts/Montserrat.woff2",
    display: "swap",
    variable: "--font-montserrat",
});
const rubik = localFont({
    src: "../fonts/Rubik.woff2",
    display: "swap",
    variable: "--font-rubik",
});

export const metadata = {
    title: "Lofu Studio",
    description: "Only up from here.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${montserrat.variable} ${rubik.variable} ${inter.variable}`}
        >
            <body className="w-full bg-neutral-100 dark:bg-black">
                <Providers>
                    <Nav />
                    <div className="flex flex-col items-center justify-center w-full p-2">
                        {children}
                    </div>
                    <footer className="w-full py-2 text-center text-neutral-500">
                        <p>
                            © {new Date().getFullYear()} Lofu Studio. All rights
                            reserved.
                        </p>
                    </footer>
                </Providers>
            </body>
        </html>
    );
}
