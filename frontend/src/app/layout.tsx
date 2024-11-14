import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.scss";

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export const metadata: Metadata = {
    title: "FinnCottages",
    description:
        "Find the best and cheapest rental cabins, holiday villas, and accommodation around Finland. Rent the best cabin anywhere in Finland!",
    keywords: ["cottage rentals", "holiday cabins", "Finland vacation", "rental properties"],
    openGraph: {
        title: "FinnCottages",
        description: "Find the best and cheapest rental cabins, holiday villas, and accommodation around Finland.",
        url: "https://www.finncottages.com",
        siteName: "FinnCottages",
        images: [
            {
                url: "~/home/usr/Downloads/", // tmp
                width: 1200,
                height: 630,
                alt: "Preview image for FinnCottages",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}