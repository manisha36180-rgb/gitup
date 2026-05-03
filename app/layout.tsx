import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Marine Auctions | Find Your Dream Vessel",
  description: "Live vessel auction platform sourcing data from top marine auction houses worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning style={{ background: "#f8f9fa", color: "#1a202c", display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif" }}>

        {/* NAVBAR */}
        <nav className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-10 py-4 bg-[#0f2846] text-white sticky top-0 z-50 shadow-md gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚓</span>
            <span className="font-extrabold text-xl text-white">Marine</span>
            <span className="font-extrabold text-xl text-[#0EA5E9]">Auctions</span>
          </div>
          <div className="flex gap-6 sm:gap-8 text-sm md:text-base">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/auctions" className="nav-link">Auctions</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#0f2846] text-white text-center">
          <div className="max-w-[500px] mx-auto px-6 py-12">
            <div className="text-3xl mb-2">⚓</div>
            <h4 className="text-xl font-extrabold text-white mb-2">Get In Touch</h4>
            <p className="text-[#93c5fd] text-sm mb-6">
              Have questions about a listing? We are here to help.
            </p>
            <div className="flex flex-col items-center gap-2 text-sm text-[#bfdbfe]">
              <span>📧 manisha36180@gmail.com</span>
              <span>📞 +91 123456789</span>
              <span>📍 Delhi, India</span>
            </div>
          </div>
          <div className="border-t border-[#1e3a5f] p-4 text-[#60a5fa] text-xs md:text-sm">
            © {new Date().getFullYear()} Marine Auctions. All Rights Reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}