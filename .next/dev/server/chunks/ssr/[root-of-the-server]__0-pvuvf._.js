module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/antigravity-app/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/antigravity-app/app/favicon.ico.mjs { IMAGE => \"[project]/antigravity-app/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/antigravity-app/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/antigravity-app/app/lib/scraper.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "scrapeVessels",
    ()=>scrapeVessels
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$puppeteer$29$__ = __turbopack_context__.i("[externals]/puppeteer [external] (puppeteer, esm_import, [project]/antigravity-app/node_modules/puppeteer)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$puppeteer$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$puppeteer$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function scrapeVessels() {
    const browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$2c$__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$puppeteer$29$__["default"].launch({
        headless: true
    });
    const results = [];
    // ---------------- SITE 1 (Maritime Eco) ----------------
    try {
        const page1 = await browser.newPage();
        await page1.goto("https://maritimeauction.eco/auctions/", {
            waitUntil: "domcontentloaded",
            timeout: 15000
        });
        const data1 = await page1.evaluate(()=>{
            return Array.from(document.querySelectorAll("ul.products li.product")).map((el, i)=>{
                const nameEl = el.querySelector(".woocommerce-loop-product__title");
                const priceEl = el.querySelector(".price");
                const imgEl = el.querySelector("img");
                const name = nameEl?.textContent?.trim();
                if (!name) return null;
                return {
                    id: `eco_${i}`,
                    name: name,
                    price: priceEl?.textContent?.trim() || "",
                    image: imgEl?.src || "",
                    source: "Maritime Auction Eco"
                };
            }).filter((item)=>item !== null);
        });
        results.push(...data1);
        await page1.close();
    } catch (err) {
        console.error("Site 1 failed:", err);
    }
    // ---------------- SITE 2 (Marine Auctions AU) ----------------
    try {
        const page2 = await browser.newPage();
        await page2.goto("https://www.marineauctions.com.au/forthcoming-auctions/", {
            waitUntil: "domcontentloaded",
            timeout: 15000
        });
        const data2 = await page2.evaluate(()=>{
            return Array.from(document.querySelectorAll(".datarepeater-item")).map((el, i)=>{
                const nameEl = el.querySelector("h2");
                const paragraphs = Array.from(el.querySelectorAll("p"));
                const locP = paragraphs.find((p)=>p.textContent?.includes("Located:"));
                const imgEl = el.querySelector("img");
                const name = nameEl?.textContent?.trim();
                if (!name || name.length < 5) return null;
                return {
                    id: `au_${i}`,
                    name: name,
                    location: locP?.textContent?.replace("Located:", "").trim() || "",
                    image: imgEl?.src || "",
                    source: "Marine Auctions AU"
                };
            }).filter((item)=>item !== null);
        });
        results.push(...data2);
        await page2.close();
    } catch (err) {
        console.error("Site 2 failed:", err);
    }
    await browser.close();
    return results;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/antigravity-app/app/lib/clean.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanData",
    ()=>cleanData
]);
function cleanData(data) {
    return data.map((item, index)=>{
        // Basic analysis & extraction
        const nameStr = item.name || "";
        const yearMatch = nameStr.match(/^(19|20)\d{2}/);
        const year = yearMatch ? yearMatch[0] : "Unknown";
        // Determine type based on keywords
        const lowerName = nameStr.toLowerCase();
        let type = "Vessel";
        if (lowerName.includes("cruiser") || lowerName.includes("yacht")) type = "Cruiser / Yacht";
        else if (lowerName.includes("sail") || lowerName.includes("ketch")) type = "Sailboat";
        else if (lowerName.includes("commercial") || lowerName.includes("trawler")) type = "Commercial";
        return {
            id: item.id || index + 1,
            name: nameStr,
            price: item.price || "Auction",
            location: item.location || "Global Location",
            image: item.image && item.image.startsWith("http") ? item.image : "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
            status: "Upcoming Auction",
            description: `Live auction sourced from ${item.source}. ${item.location ? `Currently located in ${item.location}.` : "Place your bids online."}`,
            year: year,
            type: type
        };
    });
}
}),
"[project]/antigravity-app/app/auctions/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>AuctionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/app/lib/scraper.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$clean$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/app/lib/clean.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function AuctionsPage({ searchParams }) {
    const query = searchParams?.query?.toLowerCase() || "";
    const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scrapeVessels"])();
    let vessels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$clean$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cleanData"])(raw);
    if (query) {
        vessels = vessels.filter((v)=>v.name.toLowerCase().includes(query) || v.location && v.location.toLowerCase().includes(query));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-6 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-[#0f2846] mb-8 border-b pb-4",
                children: query ? `Search Results for "${searchParams?.query}"` : "Active Auctions"
            }, void 0, false, {
                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            vessels.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-lg",
                children: "No vessels found matching your search."
            }, void 0, false, {
                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: vessels.map((vessel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/vessels/${vessel.id}`,
                        className: "bg-white shadow rounded-lg p-4 hover:shadow-lg transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: vessel.image || "https://via.placeholder.com/300",
                                alt: vessel.name || "Vessel",
                                width: 400,
                                height: 160,
                                className: "h-40 w-full object-cover rounded",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-bold mt-2",
                                children: vessel.name
                            }, void 0, false, {
                                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: vessel.location
                            }, void 0, false, {
                                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-600 font-semibold",
                                children: vessel.price
                            }, void 0, false, {
                                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, vessel.id, true, {
                        fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/antigravity-app/app/auctions/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/antigravity-app/app/auctions/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/antigravity-app/app/auctions/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/antigravity-app/app/auctions/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-pvuvf._.js.map