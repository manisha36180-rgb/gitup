import Link from "next/link";
import { Search, Ship, FileText, Globe, Zap, Lock } from "lucide-react";

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
        <div style={{ maxWidth: "800px", padding: "0 24px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.25rem", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            Find Your Dream Vessel
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#dbeafe", marginBottom: "2rem", maxWidth: "600px", lineHeight: 1.7 }}>
            The premier platform for buying and selling luxury yachts, sailboats, and commercial marine craft.
          </p>
          
          <form action="/auctions" style={{ width: "100%", maxWidth: "600px", display: "flex", background: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
            <input 
              type="text" 
              name="query"
              placeholder="Search by name, make, destination..."
              style={{ flexGrow: 1, padding: "16px 20px", color: "#1f2937", outline: "none", border: "none", fontSize: "1rem" }}
            />
            <button type="submit" style={{ background: "#0EA5E9", color: "white", padding: "16px 40px", fontWeight: 600, border: "none", cursor: "pointer", fontSize: "1rem" }}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ── Welcome / Overview ── */}
      <section style={{ background: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#0f2846", marginBottom: "16px" }}>
            Welcome to Marine Auctions
          </h2>
          <div style={{ width: "64px", height: "4px", background: "#0EA5E9", margin: "0 auto 40px auto", borderRadius: "99px" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", textAlign: "center" }}>
            <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85 }}>
              Marine Auctions is your premier global destination for discovering, bidding on, and acquiring luxury yachts, sport fishing vessels, and commercial crafts from highly professional operations. We aggregate listings directly from the world's most trusted marine auction houses and present them in a clean, professional interface supported by an unparalleled buying experience.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85 }}>
              Every vessel on our platform is offered as a through a strict inspection and vetting process before it is presented. We partner with vetted, industry-leading marine auction houses to ensure that regardless of the vessel make or build, you receive a reliable partner before placing bids in any sail.
            </p>
            <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85 }}>
              Whether you're searching for an exclusive cruiser or a commercial vessel to set sail, Marine Auctions provides a transparent, secure, and reliable browsing experience. Our mission is to connect serious buyers with authentic vessels, eliminating guesswork and putting the best of the marine market at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Marine Auctions ── */}
      <section style={{ background: "#f8f9fa", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#0f2846", marginBottom: "48px" }}>
            Why Choose Marine Auctions?
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <Ship size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Curated Vessel Listings</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Listings are carefully vetted, curated, and compiled from leading global auction houses.
              </p>
            </div>

            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <Search size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Powerful Smart Search</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Filter vessels instantly by name, location, or vessel type to find exactly what you want.
              </p>
            </div>

            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <FileText size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Complete Vessel Profiles</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Rich, full-page profiles showcase features, and full descriptions in every listing.
              </p>
            </div>

            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <Globe size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Global Coverage</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Discover and easily bid on top tier vessels spanning the global market.
              </p>
            </div>

            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <Zap size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Real-Time Updates</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Get alerts on new listings and auction dates right to your dashboard.
              </p>
            </div>

            <div style={{ background: "white", padding: "32px", borderRadius: "12px", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)", border: "1px solid #f3f4f6", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#0EA5E9", marginBottom: "16px" }}>
                <Lock size={40} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f2846", marginBottom: "12px" }}>Trusted & Transparent</h3>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Every listing focuses on transparency providing you peace of mind on purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "white", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#0f2846", marginBottom: "16px" }}>
            Ready to Find Your Vessel?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#4a5568", lineHeight: 1.85, marginBottom: "32px" }}>
            Browse live listings from top marine auction houses. Use our smart search to find your perfect vessel and place your bid today.
          </p>
          <Link 
            href="/auctions" 
            style={{ display: "inline-block", background: "#0EA5E9", color: "white", fontWeight: 600, padding: "16px 40px", borderRadius: "8px", textDecoration: "none", fontSize: "1.1rem", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
          >
            Browse Auctions
          </Link>
        </div>
      </section>

    </div>
  );
}