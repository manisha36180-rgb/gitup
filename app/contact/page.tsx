export default function ContactPage() {
  return (
    <div className="w-full bg-[#f8f9fa] py-12 px-6 sm:py-20 lg:py-20 min-h-[80vh] flex flex-col items-center">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="max-w-[800px] w-full flex flex-col items-center text-center mb-12 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0f2846] mb-4 text-center">Contact Us</h1>
          <div className="w-16 h-1 bg-[#0EA5E9] mb-8 rounded-full" />
          <p className="text-[#4a5568] text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-[600px] text-center">
            Have a question about a listing or want to know more about our platform? Reach out and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-[700px]">

          {/* Contact Form */}
          <form className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#f1f5f9] p-6 sm:p-10 mb-12">
            <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl p-4 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl p-4 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[0.875rem] font-extrabold text-[#0f2846] uppercase tracking-wider">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full border-2 border-[#e2e8f0] bg-[#f8fafc] rounded-xl p-4 outline-none text-[#1e293b] text-base transition-colors focus:border-[#0EA5E9] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0EA5E9] text-white font-extrabold text-lg py-4.5 rounded-xl border-none cursor-pointer mt-2 shadow-[0_4px_14px_rgba(14,165,233,0.4)] hover:bg-[#0284c7] transition-colors"
              >
                Send Message
              </button>

            </div>
          </form>

          {/* Contact Info Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            {[
              { icon: "📧", label: "Email", value: "manisha36180@gmail.com" },
              { icon: "📞", label: "Phone", value: "123456789" },
              { icon: "📍", label: "Location", value: "Delhi, India" },
            ].map((c) => (
              <div key={c.label} className="flex-1 min-w-[200px] bg-white rounded-[20px] p-8 sm:p-8 text-center border border-[#f1f5f9] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className="text-[0.9rem] font-extrabold text-[#0f2846] uppercase tracking-wider mb-2">{c.label}</div>
                <div className="text-[#64748b] text-[0.95rem]">{c.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
