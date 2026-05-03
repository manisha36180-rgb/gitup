export default function ContactPage() {
  return (
    <div className="w-full bg-[#f8f9fa] px-6 min-h-[80vh] flex flex-col items-center text-center" style={{ paddingTop: "8rem", paddingBottom: "8rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="w-full" style={{ maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Header Section */}
        <div className="w-full flex flex-col items-center" style={{ marginBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 className="font-extrabold text-[#0f2846]" style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Contact Us</h1>
          <div className="bg-[#0EA5E9] rounded-full" style={{ width: "5rem", height: "0.4rem", marginBottom: "2.5rem" }} />
          <p className="text-[#4a5568] leading-relaxed w-full" style={{ fontSize: "1.125rem", maxWidth: "650px", textAlign: "center" }}>
            Have a question about a listing or want to know more about our platform? Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Container */}
        <div className="w-full flex flex-col items-center" style={{ maxWidth: "700px" }}>

          {/* Contact Form */}
          <form className="w-full bg-white shadow-xl border border-slate-100" style={{ borderRadius: "2rem", padding: "4rem 2rem", marginBottom: "6rem" }}>
            <div className="flex flex-col items-center w-full" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

              <div className="flex flex-col w-full items-center" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label className="font-extrabold text-[#0f2846] uppercase tracking-wider text-center" style={{ fontSize: "0.875rem" }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none text-[#1e293b] transition-colors focus:border-[#0EA5E9] text-center"
                  style={{ borderRadius: "0.75rem", padding: "1.25rem 1.5rem", fontSize: "1rem" }}
                />
              </div>

              <div className="flex flex-col w-full items-center" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label className="font-extrabold text-[#0f2846] uppercase tracking-wider text-center" style={{ fontSize: "0.875rem" }}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none text-[#1e293b] transition-colors focus:border-[#0EA5E9] text-center"
                  style={{ borderRadius: "0.75rem", padding: "1.25rem 1.5rem", fontSize: "1rem" }}
                />
              </div>

              <div className="flex flex-col w-full items-center" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <label className="font-extrabold text-[#0f2846] uppercase tracking-wider text-center" style={{ fontSize: "0.875rem" }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] outline-none text-[#1e293b] transition-colors focus:border-[#0EA5E9] resize-none text-center"
                  style={{ borderRadius: "0.75rem", padding: "1.25rem 1.5rem", fontSize: "1rem" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0EA5E9] text-white font-extrabold cursor-pointer border-none hover:bg-[#0284c7] hover:-translate-y-0.5 transition-all mx-auto"
                style={{ maxWidth: "300px", fontSize: "1.125rem", padding: "1.25rem", borderRadius: "0.75rem", marginTop: "1.5rem", boxShadow: "0 8px 20px rgba(14,165,233,0.3)" }}
              >
                Send Message
              </button>

            </div>
          </form>

          {/* Contact Info Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center w-full" style={{ display: "flex", gap: "2.5rem", paddingBottom: "5rem" }}>
            {[
              { icon: "📧", label: "Email", value: "manisha36180@gmail.com" },
              { icon: "📞", label: "Phone", value: "123456789" },
              { icon: "📍", label: "Location", value: "Delhi, India" },
            ].map((c) => (
              <div key={c.label} className="bg-white text-center border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center" style={{ flex: 1, minWidth: "200px", borderRadius: "1.5rem", padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{c.icon}</div>
                <div className="font-extrabold text-[#0f2846] uppercase tracking-wider text-center" style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>{c.label}</div>
                <div className="text-[#64748b] text-center" style={{ fontSize: "0.95rem" }}>{c.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
