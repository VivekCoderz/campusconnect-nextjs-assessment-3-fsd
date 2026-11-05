import "./globals.css";

export const metadata = {
  title: "CampusConnect – Student Management Portal",
  description: "Student management portal built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
