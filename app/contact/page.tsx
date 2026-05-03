export default function ContactPage() {
  return (
    <div className="w-full bg-[#f8f9fa] py-20 sm:py-32 px-6 min-h-[80vh] flex flex-col items-center text-center">
      <div className="w-full max-w-[800px] flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-16 sm:mb-20 w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2846] mb-6">Contact Us</h1>
          <div className="w-20 h-1.5 bg-[#0EA5E9] mb-10 rounded-full" />
          <p className="text-[#4a5568] text-base sm:text-lg lg:text-[1.125rem] leading-relaxed w-full max-w-[650px]">
            Have a question about a listing or want to know more about our platform? Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-[700px] flex flex-col items-center">

          {/* Contact Form */}
          <form className="w-full bg-white rounded-[2rem] shadow-xl border border-slate-100 py-16 px-8 sm:px-16 mb-24">
            <div className="flex flex-col items-center w-full gap-10">

              <div className="flex flex-col w-full items-center gap-4">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider text-center">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl py-5 px-6 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9] text-center"
                />
              </div>

              <div className="flex flex-col w-full items-center gap-4">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider text-center">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl py-5 px-6 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9] text-center"
                />
              </div>

              <div className="flex flex-col w-full items-center gap-4">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider text-center">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl py-5 px-6 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9] resize-none text-center"
                />
              </div>

              <button
                type="submit"
                className="w-full max-w-[300px] bg-[#0EA5E9] text-white font-extrabold text-lg py-5 rounded-xl border-none cursor-pointer mt-6 shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:bg-[#0284c7] hover:-translate-y-0.5 transition-all mx-auto"
              >
                Send Message
              </button>

            </div>
          </form>

          {/* Contact Info Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center w-full gap-10 pb-20">
            {[
              { icon: "📧", label: "Email", value: "manisha36180@gmail.com" },
              { icon: "📞", label: "Phone", value: "123456789" },
              { icon: "📍", label: "Location", value: "Delhi, India" },
            ].map((c) => (
              <div key={c.label} className="flex-1 min-w-[200px] bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
                <div className="text-5xl mb-6">{c.icon}</div>
                <div className="text-[0.9rem] font-extrabold text-[#0f2846] uppercase tracking-wider mb-3 text-center">{c.label}</div>
                <div className="text-[#64748b] text-[0.95rem] text-center">{c.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
