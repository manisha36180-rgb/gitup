import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPool, isDbConnected } from "../../lib/db";
import { Vessel, RawVessel } from "../../lib/types";
import { getVesselById } from "../../lib/scraper";

export const dynamic = 'force-dynamic';

export default async function VesselDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  
  let vessel: Vessel | null = null;
  const dbActive = await isDbConnected();

  if (dbActive) {
    try {
      const { rows } = await getPool().query('SELECT * FROM "Vessel" WHERE id = $1', [params.id]);
      vessel = rows[0] as Vessel;
    } catch (err) {
      console.error("DB detail fetch failed:", err);
    }
  }

  // Fallback to scraper if no vessel found in DB
  if (!vessel) {
    const rawVessel = await getVesselById(params.id);
    if (rawVessel) {
      vessel = {
        ...rawVessel,
        id: String(rawVessel.id),
        price: rawVessel.price || "Contact for Price",
        location: rawVessel.location || "International",
        image: rawVessel.image || "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
        images: rawVessel.images || [],
        status: "Active",
        description: rawVessel.description || "No description available.",
        type: "Vessel",
      } as Vessel;
    }
  }

  // Fallback to demo vessels
  if (!vessel) {
    const demoVessels = [
      {
        id: "demo_1",
        name: "Luxury Motor Yacht - 80ft",
        price: "$2,450,000",
        location: "Sydney, Australia",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
        images: ["https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800"],
        status: "Active",
        description: "A stunning 80ft luxury motor yacht in pristine condition.",
        type: "Motor Yacht",
        year: "2021"
      },
      {
        id: "demo_2",
        name: "Classic Sailing Schooner",
        price: "€850,000",
        location: "Monaco",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
        images: ["https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800"],
        status: "Active",
        description: "Beautifully restored classic schooner for the serious sailor.",
        type: "Sailing Vessel",
        year: "1995"
      }
    ];
    vessel = demoVessels.find(v => v.id === params.id) || null;
  }

  if (!vessel) return notFound();

  const hasLocalImage = vessel.image?.startsWith("/vessels/eco/");

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-10 font-sans">

      {/* Back */}
      <Link href="/auctions" className="text-[#0f2846] font-semibold text-sm hover:underline flex items-center mb-6">
        ← Back to Auctions
      </Link>

      {/* Status + Title */}
      <div className="text-center my-6">
        <span className="bg-[#0EA5E9] text-white text-xs font-bold py-1 px-3.5 rounded-full inline-block mb-3">
          {vessel.status}
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#0f2846] mt-2 mb-2 leading-tight">
          {vessel.name}
        </h1>
        <p className="text-[#0EA5E9] font-bold text-xl m-0">{vessel.price}</p>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          {hasLocalImage ? (
            <img src={(vessel.images && vessel.images[0]) || vessel.image} alt={vessel.name} className="w-full h-full object-cover" />
          ) : (
            <Image src={(vessel.images && vessel.images[0]) || vessel.image || "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800"} alt={vessel.name} fill className="object-cover" unoptimized />
          )}
        </div>
        
        {vessel.images && vessel.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
            {vessel.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative min-w-[100px] sm:min-w-[120px] h-[70px] sm:h-[80px] rounded-lg overflow-hidden flex-shrink-0 snap-start">
                {hasLocalImage ? (
                  <img src={img} alt={`${vessel.name} thumbnail`} className="w-full h-full object-cover" />
                ) : (
                  <Image src={img} alt={`${vessel.name} thumbnail`} fill className="object-cover" unoptimized />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-7">
        {[
          { icon: "📍", label: "Location", value: vessel.location || "—" },
          { icon: "📅", label: "Year",     value: vessel.year    || "N/A" },
          { icon: "⛵", label: "Type",     value: vessel.type    || "Vessel" },
          { icon: "📏", label: "Length",   value: vessel.length  },
          { icon: "↔️", label: "Beam",     value: vessel.beam    },
          { icon: "🛡️", label: "Hull",     value: vessel.hull    },
          { icon: "⚙️", label: "Engine",   value: vessel.engine  },
          { icon: "🌐", label: "Source",   value: vessel.source  || "—" },
        ].filter(item => item.value).map(item => (
          <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div className="overflow-hidden">
              <div className="text-[0.7rem] text-slate-400 uppercase tracking-wider font-semibold">{item.label}</div>
              <div className="text-[0.95rem] font-bold text-[#0f2846] whitespace-nowrap overflow-hidden text-ellipsis">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Auction Info */}
      {vessel.auctionInfo && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 mb-6">
          <div className="font-bold text-blue-700 mb-1 text-sm">📢 AUCTION DETAILS</div>
          <div className="text-blue-900 text-sm md:text-base leading-relaxed">{vessel.auctionInfo}</div>
        </div>
      )}

      {/* Description */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-6">
        <h2 className="text-xl font-extrabold text-[#0f2846] mb-3">About This Vessel</h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base m-0 whitespace-pre-line">{vessel.description}</p>
      </div>

    </div>
  );
}