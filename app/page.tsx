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
          <p style={{ fontSize: "1.15rem", color: "#dbeafe", marginBottom: "2.5rem", maxWidth: "500px", lineHeight: 1.7 }}>
            The premier platform for buying and selling luxury yachts, sailboats, and commercial marine craft.
          </p>
          
          <form style={{ display: "flex", width: "100%", maxWidth: "560px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.4)", height: "52px", backgroundColor: "#ffffff" }} action="/auctions">
            <input 
              type="text" 
              name="query"
              placeholder="Search by name, make, or location..."
              style={{ flex: 1, padding: "0 20px", fontSize: "0.95rem", border: "none", outline: "none", color: "#111827", backgroundColor: "#ffffff", caretColor: "#0EA5E9", textAlign: "center" }}
            />
            <button type="submit" style={{ background: "#0EA5E9", color: "white", fontWeight: 700, padding: "0 28px", border: "none", cursor: "pointer", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ── Welcome / Overview ── */}
      <section className="w-full bg-white" style={{ padding: "96px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="w-full max-w-[780px]" style={{ margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h2 className="text-[1.75rem] font-extrabold text-[#0f2846] mt-4" style={{ textAlign: "center", width: "100%", marginBottom: "24px" }}>
            Welcome to Marine Auctions
          </h2>
          <div className="w-16 h-1 bg-[#0EA5E9] rounded-full" style={{ margin: "0 auto", marginBottom: "48px" }} />
          
          <div className="flex flex-col w-full gap-6" style={{ textAlign: "center", alignItems: "center" }}>
            <p className="text-[1.05rem] text-[#4a5568] leading-[1.85]" style={{ textAlign: "center", width: "100%" }}>
              Marine Auctions is your premier global destination for discovering, bidding on, and acquiring luxury yachts, sport fishing vessels, commercial crafts, and high-performance speedboats. We aggregate listings directly from the world's most trusted marine auction houses and present them in a clean, searchable interface designed for both experienced buyers and first-time bidders.
            </p>
            <p className="text-[1.05rem] text-[#4a5568] leading-[1.85]" style={{ textAlign: "center", width: "100%" }}>
              Every vessel on our platform undergoes a thorough data verification and cleaning process before it is published. We extract rich details — including vessel name, year of manufacture, hull type, location, and auction status — to give you a complete picture before you commit to any bid.
            </p>
            <p className="text-[1.05rem] text-[#4a5568] leading-[1.85]" style={{ textAlign: "center", width: "100%" }}>
              Whether you're searching for an unreserved bargain or a premium cruiser at auction, Marine Auctions provides a transparent, fast, and reliable browsing experience. Our mission is to connect serious buyers with authentic vessels, eliminating guesswork and putting the best of the marine market at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Marine Auctions ── */}
      <section className="w-full bg-[#f8f9fa]" style={{ padding: "96px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="w-full max-w-[960px]" style={{ margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 className="text-[1.75rem] font-extrabold text-[#0f2846] mt-4" style={{ textAlign: "center", width: "100%", marginBottom: "64px" }}>
            Why Choose Marine Auctions?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">🚢</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Curated Vessel Listings</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Listings are carefully scraped, cleaned, and categorised from leading marine auction houses.
              </p>
            </div>

            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">🔍</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Powerful Smart Search</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Filter vessels instantly by name, location, or vessel type in real-time.
              </p>
            </div>

            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">📋</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Complete Vessel Profiles</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Year, hull type, location, auction status, and full description on every listing.
              </p>
            </div>

            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">🌏</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Global Coverage</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Vessels sourced from auction houses across Australia, Europe, and beyond.
              </p>
            </div>

            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">⚡</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Real-Time Updates</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Our platform fetches fresh vessel data automatically on every page load.
              </p>
            </div>

            <div className="bg-white rounded-2xl py-9 px-7 text-center border border-[#e2e8f0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col items-center justify-start">
              <div className="text-[3rem] mb-4">🔒</div>
              <h3 className="text-[1rem] font-bold text-[#0f2846] mb-[10px]">Trusted & Transparent</h3>
              <p className="text-[0.875rem] text-[#718096] leading-[1.7]">
                Every listing shows its original auction details so you can bid with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-white" style={{ padding: "96px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="w-full max-w-[640px]" style={{ margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h2 className="text-[1.75rem] font-extrabold text-[#0f2846]" style={{ textAlign: "center", width: "100%", marginBottom: "24px" }}>
            Ready to Find Your Vessel?
          </h2>
          <p className="text-[1.05rem] text-[#718096] leading-[1.7]" style={{ textAlign: "center", width: "100%", marginBottom: "24px" }}>
            Browse live listings from top marine auction houses. Use our smart search to find your perfect vessel and place your bid today.
          </p>
          <Link 
            href="/auctions" 
            className="inline-block bg-[#0EA5E9] text-white font-bold rounded text-[1rem] shadow-[0_4px_16px_rgba(14,165,233,0.35)] hover:bg-[#0284c7] transition-colors no-underline"
            style={{ padding: "16px 32px" }}
          >
            Browse Auctions &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}