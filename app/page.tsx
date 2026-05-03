import Link from "next/link";
import { Search, Ship, FileText, Globe, Zap, Lock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <div
        className="w-full flex flex-col items-center justify-center text-center text-white min-h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,37,69,0.6), rgba(11,37,69,0.75)), url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600')",
        }}
      >
        <div className="max-w-[800px] px-6 mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 drop-shadow-md">
            Find Your Dream Vessel
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-[600px] leading-relaxed">
            The premier platform for buying and selling luxury yachts, sailboats, and commercial marine craft.
          </p>
          
          <form action="/auctions" className="w-full max-w-[600px] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md">
            <input 
              type="text" 
              name="query"
              placeholder="Search by name, make, destination..."
              className="flex-grow p-4 text-gray-800 outline-none border-none text-base w-full sm:w-auto"
            />
            <button type="submit" className="bg-[#0EA5E9] text-white px-8 py-4 font-semibold text-base w-full sm:w-auto hover:bg-[#0284c7] transition-colors">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ── Welcome / Overview ── */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2846] mb-4">
            Welcome to Marine Auctions
          </h2>
          <div className="w-16 h-1 bg-[#0EA5E9] mx-auto mb-10 rounded-full" />
          
          <div className="flex flex-col gap-6 text-center">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Marine Auctions is your premier global destination for discovering, bidding on, and acquiring luxury yachts, sport fishing vessels, and commercial crafts from highly professional operations. We aggregate listings directly from the world's most trusted marine auction houses and present them in a clean, professional interface supported by an unparalleled buying experience.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Every vessel on our platform is offered as a through a strict inspection and vetting process before it is presented. We partner with vetted, industry-leading marine auction houses to ensure that regardless of the vessel make or build, you receive a reliable partner before placing bids in any sail.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Whether you're searching for an exclusive cruiser or a commercial vessel to set sail, Marine Auctions provides a transparent, secure, and reliable browsing experience. Our mission is to connect serious buyers with authentic vessels, eliminating guesswork and putting the best of the marine market at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Marine Auctions ── */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2846] mb-12">
            Why Choose Marine Auctions?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Ship size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Curated Vessel Listings</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Listings are carefully vetted, curated, and compiled from leading global auction houses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Powerful Smart Search</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Filter vessels instantly by name, location, or vessel type to find exactly what you want.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Complete Vessel Profiles</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Rich, full-page profiles showcase features, and full descriptions in every listing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Global Coverage</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Discover and easily bid on top tier vessels spanning the global market.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Real-Time Updates</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Get alerts on new listings and auction dates right to your dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Lock size={40} />
              </div>
              <h3 className="text-xl font-bold text-[#0f2846] mb-3">Trusted & Transparent</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Every listing focuses on transparency providing you peace of mind on purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2846] mb-4">
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