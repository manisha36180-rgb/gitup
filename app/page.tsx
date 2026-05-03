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
        <div className="max-w-[800px] px-6 mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight lg:leading-[1.2] mb-4 lg:mb-[1.25rem] drop-shadow-md lg:drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Find Your Dream Vessel
          </h1>
          <p className="text-base sm:text-lg lg:text-[1.15rem] text-blue-100 lg:text-[#dbeafe] mb-8 lg:mb-8 max-w-[600px] leading-relaxed lg:leading-[1.7]">
            The premier platform for buying and selling luxury yachts, sailboats, and commercial marine craft.
          </p>
          
          <form action="/auctions" className="w-full max-w-[600px] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
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
      <section className="bg-white py-12 px-6 sm:py-20 lg:py-20 flex flex-col items-center">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-[800px] w-full flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f2846] mb-4 lg:mb-4">
              Welcome to Marine Auctions
            </h2>
            <div className="w-16 h-1 bg-[#0EA5E9] mb-8 lg:mb-10 rounded-full" />
            
            <div className="flex flex-col items-center gap-6 lg:gap-6 text-center w-full">
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-600 lg:text-[#4a5568] leading-relaxed lg:leading-[1.85] w-full">
                Marine Auctions is your premier global destination for discovering, bidding on, and acquiring luxury yachts, sport fishing vessels, and commercial crafts from highly professional operations. We aggregate listings directly from the world's most trusted marine auction houses and present them in a clean, professional interface supported by an unparalleled buying experience.
              </p>
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-600 lg:text-[#4a5568] leading-relaxed lg:leading-[1.85] w-full">
                Every vessel on our platform is offered as a through a strict inspection and vetting process before it is presented. We partner with vetted, industry-leading marine auction houses to ensure that regardless of the vessel make or build, you receive a reliable partner before placing bids in any sail.
              </p>
              <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-600 lg:text-[#4a5568] leading-relaxed lg:leading-[1.85] w-full">
                Whether you're searching for an exclusive cruiser or a commercial vessel to set sail, Marine Auctions provides a transparent, secure, and reliable browsing experience. Our mission is to connect serious buyers with authentic vessels, eliminating guesswork and putting the best of the marine market at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Marine Auctions ── */}
      <section className="bg-gray-50 py-12 px-6 sm:py-20 lg:py-20 flex flex-col items-center">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f2846] mb-10 lg:mb-12">
            Why Choose Marine Auctions?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Ship size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Curated Vessel Listings</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Listings are carefully vetted, curated, and compiled from leading global auction houses.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Search size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Powerful Smart Search</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Filter vessels instantly by name, location, or vessel type to find exactly what you want.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Complete Vessel Profiles</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Rich, full-page profiles showcase features, and full descriptions in every listing.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Globe size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Global Coverage</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Discover and easily bid on top tier vessels spanning the global market.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Zap size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Real-Time Updates</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Get alerts on new listings and auction dates right to your dashboard.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="text-[#0EA5E9] mb-4">
                <Lock size={40} />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.25rem] font-bold text-[#0f2846] mb-3 lg:mb-3 text-center">Trusted & Transparent</h3>
              <p className="text-gray-600 lg:text-[#4b5563] text-sm lg:text-[0.95rem] leading-relaxed text-center">
                Every listing focuses on transparency providing you peace of mind on purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16 px-6 sm:py-20 flex flex-col items-center">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-[600px] w-full flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#0f2846] mb-4 lg:mb-4 text-center">
              Ready to Find Your Vessel?
            </h2>
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-600 lg:text-[#4a5568] leading-relaxed lg:leading-[1.85] mb-8 lg:mb-8 text-center">
              Browse live listings from top marine auction houses. Use our smart search to find your perfect vessel and place your bid today.
            </p>
            <Link 
              href="/auctions" 
              className="inline-block bg-[#0EA5E9] text-white font-semibold px-8 py-4 sm:px-10 rounded-lg text-lg lg:text-[1.1rem] shadow-md lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:bg-[#0284c7] transition-colors no-underline text-center"
            >
              Browse Auctions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}