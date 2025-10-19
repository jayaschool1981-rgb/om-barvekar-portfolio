import "./globals.css";

export const metadata = {
  title: "Om Barvekar | AI + Real-World Impact",
  description: "AI Engineer · Full-Stack Developer · Open-Source Collaborator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#0E0E10] to-[#111113] text-white">
        {children}
      </body>
    </html>
  );
}
