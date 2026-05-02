module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/antigravity-app/app/lib/scraper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/antigravity-app/app/lib/clean.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/antigravity-app/app/api/vessels/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/app/lib/scraper.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$clean$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/antigravity-app/app/lib/clean.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET() {
    try {
        const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$scraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scrapeVessels"])();
        const clean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$antigravity$2d$app$2f$app$2f$lib$2f$clean$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cleanData"])(raw);
        return Response.json(clean);
    } catch (err) {
        console.error("Scraping error:", err);
        return Response.json({
            error: "Scraping failed"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0krd80u._.js.map