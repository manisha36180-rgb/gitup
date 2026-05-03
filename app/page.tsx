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
        <div className="max-w-[800px] px-6 mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight lg:leading-[1.2] mb-4 lg:mb-[1.25rem] drop-shadow-md lg:drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Find Your Dream Vessel
          </h1>
          <p className="text-base sm:text-lg lg:text-[1.15rem] text-blue-100 lg:text-[#dbeafe] mb-8 lg:mb-8 max-w-[600px] leading-relaxed lg:leading-[1.7]">
            The premier platform for buying and selling luxury yachts, sailboats, and commercial marine craft.
          </p>
          
          <form action="/auctions" className="w-full max-w-[500px] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md lg:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
            <input 
              type="text" 
              name="query"
              placeholder="Search by name, make, or location..."
              className="flex-grow py-3.5 px-5 text-gray-800 outline-none border-none text-base w-full sm:w-auto"
            />
            <button type="submit" className="bg-[#0EA5E9] text-white px-7 py-3.5 font-semibold text-base w-full sm:w-auto hover:bg-[#0284c7] transition-colors">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ── Welcome / Overview ── */}
      <section className="w-full bg-white py-16 px-6 sm:py-24 lg:py-28 flex flex-col items-center text-center">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2846] mb-6">
            Welcome to Marine Auctions
          </h2>
          <div className="w-20 h-1.5 bg-[#0EA5E9] mb-16 sm:mb-20 lg:mb-24 rounded-full" />
          
          <div className="flex flex-col gap-12 text-center w-full max-w-[900px]">
            <p className="text-[0.95rem] sm:text-base lg:text-[1.05rem] text-gray-500 lg:text-[#64748b] leading-relaxed lg:leading-[1.9]">
              Marine Auctions is your premier global destination for discovering, bidding on, and acquiring luxury yachts, sport fishing vessels, commercial crafts, and high-performance speedboats. We aggregate listings directly from the world's most trusted marine auction houses and present them in a clean, searchable interface designed for both experienced buyers and first-time bidders.
            </p>
            <p className="text-[0.95rem] sm:text-base lg:text-[1.05rem] text-gray-500 lg:text-[#64748b] leading-relaxed lg:leading-[1.9]">
              Every vessel on our platform undergoes a thorough data verification and cleaning process before it is published. We extract rich details — including vessel name, year of manufacture, hull type, location, and auction status — to give you a complete picture before you commit to any bid.
            </p>
            <p className="text-[0.95rem] sm:text-base lg:text-[1.05rem] text-gray-500 lg:text-[#64748b] leading-relaxed lg:leading-[1.9]">
              Whether you're searching for an unreserved bargain or a premium cruiser at auction, Marine Auctions provides a transparent, fast, and reliable browsing experience. Our mission is to connect serious buyers with authentic vessels, eliminating guesswork and putting the best of the marine market at your fingertips.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Choose Marine Auctions ── */}
      <section className="w-full bg-gray-50 py-20 sm:py-28 lg:py-36 px-6 flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2846] mb-16 sm:mb-20 lg:mb-24 text-center">
            Why Choose Marine Auctions?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 w-full">
            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">🚢</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Curated Vessel Listings</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Listings are carefully scraped, cleaned, and categorised from leading marine auction houses.
              </p>
            </div>

            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Powerful Smart Search</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Filter vessels instantly by name, location, or vessel type in real-time.
              </p>
            </div>

            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">📋</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Complete Vessel Profiles</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Year, hull type, location, auction status, and full description on every listing.
              </p>
            </div>

            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">🌍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Global Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Vessels sourced from auction houses across Australia, Europe, and beyond.
              </p>
            </div>

            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">⚡</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Real-Time Updates</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Our platform fetches fresh vessel data automatically on every page load.
              </p>
            </div>

            <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center h-full justify-start">
              <div className="text-5xl sm:text-6xl mb-8">🔒</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2846] mb-5">Trusted & Transparent</h3>
              <p className="text-gray-600 leading-relaxed text-[1.05rem]">
                Every listing shows its original auction details so you can bid with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-white py-20 sm:py-32 px-6 flex flex-col items-center text-center">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2846] mb-16 sm:mb-20 lg:mb-24">
            Ready to Find Your Vessel?
          </h2>
          <p className="text-base sm:text-lg lg:text-[1.15rem] text-gray-500 lg:text-[#64748b] leading-relaxed lg:leading-[2] mb-16">
            Browse live listings from top marine auction houses. Use our smart search to find your perfect vessel and place your bid today.
          </p>
          <Link 
            href="/auctions" 
            className="inline-block bg-[#0eb1f1] text-white font-semibold px-10 py-4 sm:px-12 rounded-full text-lg lg:text-[1.1rem] shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:bg-[#0284c7] transition-colors no-underline text-center"
          >
            Browse Auctions &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}