import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <div
        className="w-full flex flex-col items-center justify-center text-center text-white"
        style={{
          minHeight: "520px",
          backgroundImage:
            "linear-gradient(rgba(11,37,69,0.6), rgba(11,37,69,0.75)), url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "720px", padding: "0 24px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.25rem", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            Find Your Dream Vessel
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#dbeafe", marginBottom: "0.5rem", maxWidth: "500px", lineHeight: 1.7 }}>
            The premier platform for luxury yachts, sailboats, and commercial marine craft.
          </p>
        </div>
      </div>

      {/* ── Welcome / Overview ── */}
      <section style={{ background: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#0f2846", marginBottom: "16px" }}>
            Welcome to Online Marine Auction
          </h2>
          <div style={{ width: "64px", height: "4px", background: "#0EA5E9", margin: "0 auto 40px auto", borderRadius: "99px" }} />
          <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85, marginBottom: "20px" }}>
            Online Marine Auction is your premier global destination for discovering premium luxury yachts,
            sport fishing vessels, and commercial crafts. We present listings directly
            from the world&apos;s most trusted marine auction houses in a clean, professional interface.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85 }}>
            Whether you&apos;re searching for a premium cruiser or a commercial vessel, Online Marine Auction provides
            a transparent and reliable browsing experience. Our mission is to connect serious buyers with authentic
            vessels, putting the best of the marine market at your fingertips.
          </p>
        </div>
      </section>
    </div>
  );
}