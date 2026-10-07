import "./globals.css";
import { Metadata } from "next";
import { getProfileSection } from "@/utils/profileData";

// Get basic info
const basics = getProfileSection("basics");

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  title: {
    template: `%s | ${basics.name}`,
    default: `${basics.name} - ${basics.title}`,
  },
  description: basics.metaDescription,
  keywords: ["Ali Jamali", "SQL Server", "data analyst", "data administration", "healthcare reporting", "IT support", "Metro Vancouver"],
  authors: [{ name: basics.name }],
  creator: basics.name,
  metadataBase: new URL("https://alirezajamalica.github.io"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://alirezajamalica.github.io",
    siteName: `${basics.name} - Portfolio`,
    title: `${basics.name} - ${basics.title}`,
    description: basics.metaDescription,
  },
  twitter: {
    card: "summary",
    title: `${basics.name} - ${basics.title}`,
    description: basics.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alirezajamalica.github.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
