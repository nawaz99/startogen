import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, FileText, Briefcase, Users } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-br from-[#FFECE5] to-[#FFD6C9] flex flex-col justify-center px-6 py-10">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl mb-5 tracking-tight leading-snug text-gray-900">
          All-in-One AI Tools Platform
          <br />
          <span className="text-[#FF7F50] font-semibold">
            Start of Intelligent Generation.
          </span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium opacity-90">
          Startogen brings multiple AI tools into one place — useful for students,
          job seekers, employees, businesses, schools, recruiters, and industries.
          Automate tasks, analyze documents, generate content, and work smarter.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link
            to="/tools"
            className="bg-[#FF7F50] hover:bg-[#ff6a36] transition text-white px-10 py-4 rounded-full text-lg shadow-xl font-semibold"
          >
            Explore AI Tools
          </Link>
        </motion.div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {/* Feature Card 1 */}
        <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white rounded-xl p-8 text-center shadow-xl">
          <Sparkles size={42} className="text-[#FF7F50] mx-auto mb-4" />
          <h3 className="text-xl mb-3 font-semibold">Multiple AI Tools</h3>
          <p className="text-gray-600 text-md">
            Tools for learning, working, hiring, and business — all in one platform.
          </p>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white rounded-xl p-8 text-center shadow-xl">
          <FileText size={42} className="text-[#FF7F50] mx-auto mb-4" />
          <h3 className="text-xl mb-3 font-semibold">Smart Document Intelligence</h3>
          <p className="text-gray-600 text-md">
            Upload PDFs, resumes, proposals — Startogen extracts insights instantly. No manual reading.
          </p>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white rounded-xl p-8 text-center shadow-xl">
          <Briefcase size={42} className="text-[#FF7F50] mx-auto mb-4" />
          <h3 className="text-xl mb-3 font-semibold">For Everyone</h3>
          <p className="text-gray-600 text-md">
            Students, employees, recruiters, schools, industries — if you need AI, Startogen has a tool for you.
          </p>
        </motion.div>
      </motion.div>


      {/* WHO CAN USE STARTOGEN SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Who Can Use <span className="text-[#FF7F50]">Startogen?</span>
        </h2>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Startogen is designed for <strong>everyone who wants to save time and work smarter</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-[#FF7F50] mb-3">🎓 Students & Learners</h3>
            <p className="text-gray-600 text-md">Assignments, summaries, project reports, presentations.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-[#FF7F50] mb-3">💼 Employees & Job Seekers</h3>
            <p className="text-gray-600 text-md">Resume analyzer, reports, emails, productivity tools.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl text-[#FF7F50] mb-3">🏢 Businesses & Agencies</h3>
            <p className="text-gray-600 text-md">Business content, proposals, automation tools.</p>
          </div>

        </div>

<p className="text-gray-700 text-md mt-6">
  Students, job seekers, employees, startups, industries, recruiters, and schools —
  <strong>Startogen fits every use case.</strong>
</p>

      </motion.div>


      {/* Productivity Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-24 bg-[#FF7F50] text-white text-center py-12 px-8 rounded-2xl max-w-5xl mx-auto shadow-lg"
      >
        <h2 className="text-4xl mb-4">Save Time. Improve Output. Work Smarter.</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Startogen reduces hours of manual work into minutes. Automate workflows, generate content,
          analyze documents — and focus on what truly matters.
        </p>
      </motion.div>

    </section>
  );
}
