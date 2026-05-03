export default function ContactPage() {
  return (
    <div className="w-full bg-[#f8f9fa] py-20 px-6 min-h-[80vh] flex flex-col items-center">

      {/* Header Section */}
      <div className="max-w-[800px] text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#0f2846] mb-4">Contact Us</h1>
        <div className="w-16 h-1 bg-[#0EA5E9] mx-auto mb-8 rounded-full" />
        <p className="text-gray-600 text-lg leading-relaxed max-w-[600px] mx-auto">
          Have a question about a listing or want to know more about our platform? Reach out and our team will get back to you shortly.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[700px]">

        {/* Contact Form */}
        <form className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-8 sm:p-10 mb-12">
          <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-extrabold text-[#0f2846] uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border-2 border-slate-200 bg-slate-50 rounded-xl p-4 outline-none text-slate-800 text-base transition-colors focus:border-[#0EA5E9]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-extrabold text-[#0f2846] uppercase tracking-wide">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-2 border-slate-200 bg-slate-50 rounded-xl p-4 outline-none text-slate-800 text-base transition-colors focus:border-[#0EA5E9]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-extrabold text-[#0f2846] uppercase tracking-wide">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full border-2 border-slate-200 bg-slate-50 rounded-xl p-4 outline-none text-slate-800 text-base transition-colors resize-none focus:border-[#0EA5E9]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0EA5E9] text-white font-extrabold text-lg p-4 rounded-xl mt-2 shadow-[0_4px_14px_rgba(14,165,233,0.4)] hover:bg-[#0284c7] transition-colors"
            >
              Send Message
            </button>

          </div>
        </form>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "📧", label: "Email", value: "manisha36180@gmail.com" },
            { icon: "📞", label: "Phone", value: "123456789" },
            { icon: "📍", label: "Location", value: "Delhi, India" },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-[20px] p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <div className="text-4xl mb-4">{c.icon}</div>
              <div className="text-sm font-extrabold text-[#0f2846] uppercase tracking-wide mb-2">{c.label}</div>
              <div className="text-slate-500 text-base">{c.value}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
