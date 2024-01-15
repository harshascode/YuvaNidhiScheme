import "./globals.css";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "ಯುವ ನಿಧಿ ಯೋಜನೆ ಕರ್ನಾಟಕ 2023 - Yuva Nidhi Scheme",
  description:
    "The Karnataka Yuva Nidhi Scheme is a promise of the Congress Party. Under this scheme, the government will provide financial aid to the educated, unemployed youth in the state.",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=2, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
      </body>
    </html>
  );
}
