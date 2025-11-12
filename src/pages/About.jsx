import { Sparkles, ArrowRightCircle, Star, Users, Target } from "lucide-react";

export default function About() {
  return (
    <section className="px-8 py-20 max-w-6xl mx-auto">

      {/* Page Title */}
      <h2 className="text-5xl font-extrabold text-center mb-12 tracking-tight">
        About <span className="text-[#FF7F50]">Startogen</span>
      </h2>

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
        Startogen is an <strong className="text-[#FF7F50]">All-in-One AI Tools Platform</strong>.
        Our mission is simple: bring multiple powerful AI tools into one platform so that
        <span className="font-semibold"> anyone can use AI without complexity</span>.
      </p>


      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div className="p-8 border rounded-xl shadow-sm bg-white hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-3 text-[#FF7F50] flex items-center gap-2">
            <Target size={26} /> Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To make AI accessible to everyone — without requiring any technical knowledge.
            We want people to save hours, build faster, and work smarter with the help of AI tools.
          </p>
        </div>

        <div className="p-8 border rounded-xl shadow-sm bg-white hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-3 text-[#FF7F50] flex items-center gap-2">
            <Star size={26} /> Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            To become the most valuable AI productivity hub — empowering careers, businesses,
            and innovation worldwide.
          </p>
        </div>
      </div>

      {/* Who is Startogen for */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Who can use Startogen?
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Students – learn efficiently with AI help",
            "Job Seekers – improve resumes, letters, and portfolio",
            "Employees – automate reports, emails, and daily tasks",
            "Schools & Colleges – manage documentation easily",
            "Businesses – generate proposals, plans, and automation",
            "Recruiters / HR – analyze and filter resumes fast",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-white border shadow-sm hover:shadow-lg transition"
            >
              <ArrowRightCircle size={22} className="text-[#FF7F50]" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Startogen is different */}
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold mb-10 text-gray-900">Why Startogen?</h3>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "Multiple AI tools — one platform",
            "Zero learning curve — anyone can use",
            "Saves hours of time every day",
            "Designed for education, career, and business",
          ].map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition flex gap-3 items-center"
            >
              <Sparkles className="text-[#FF7F50]" size={24} />
              <p className="text-gray-700 text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="/tools"
          className="bg-[#FF7F50] hover:bg-[#ff6a36] transition text-white px-8 py-3 rounded-full text-lg shadow-xl"
        >
          Explore AI Tools
        </a>
      </div>
    </section>
  );
}
1