import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduRamp - Corporate Training & B2B Learning Solutions",
  description: "Premier B2B learning solutions provider. Corporate training, technology upskilling, leadership development, and behavioral skills training for enterprises. Transform your workforce.",
  keywords: "corporate training, B2B learning solutions, technology training, leadership development, behavioral skills, enterprise training",
  metadataBase: new URL("https://eduramp.in"),
  alternates: {
    canonical: "https://eduramp.in",
  },
  openGraph: {
    title: "EduRamp - Corporate Training & Learning Solutions",
    description: "Transform your organization with EduRamp's comprehensive corporate training programs. Technology, leadership, and behavioral skills development.",
    url: "https://eduramp.in",
    siteName: "EduRamp Learning Services",
    type: "website",
    images: [
      {
        url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/modern-corporate-training-environment-wi-1773187223854-a7091edd.png",
        alt: "EduRamp Corporate Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduRamp - Premier Corporate Training Partner",
    description: "Elevate your workforce through tailored learning excellence. Technology, leadership, and behavioral skills training.",
    images: [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Al4G8H4TUI0qVsGwEgVj5K2NLW/modern-corporate-training-environment-wi-1773187223854-a7091edd.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${sourceSans3.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}