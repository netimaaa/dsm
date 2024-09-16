import { Fira_Sans } from "next/font/google"
import "./globals.css";
import { Sidebar } from "@/components/shared/sidebar";
import { SmoothScrolling } from "@/components/shared/smooth-scroll";

const firaSans = Fira_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased`}
      >
        <Sidebar className="fixed" />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
