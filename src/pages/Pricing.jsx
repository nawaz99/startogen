import { motion } from "framer-motion";
import { Briefcase, FileText, Sparkles, Mail, Share2, Bot } from "lucide-react";

export default function Pricing() {
  const tools = [
    {
      title: "Resume Analyzer",
      desc: "Upload resumes, get AI insights, score, and improvement suggestions.",
      icon: <Briefcase size={42} className="text-[#FF7F50] mx-auto" />,
      available: true,
      link: "https://resumeanalyzer.startogen.com",
    },
    {
      title: "Document AI",
      desc: "Summarize PDF, extract key data, rewrite content.",
      icon: <FileText size={42} className="text-gray-400 mx-auto" />,
      available: false,
    },
    {
      title: "Business AI",
      desc: "Generate business plans, proposals, and strategies.",
      icon: <Sparkles size={42} className="text-gray-400 mx-auto" />,
      available: false,
    },
    {
      title: "Email Writer AI",
      desc: "Generate professional emails instantly.",
      icon: <Mail size={40} className="text-gray-400 mx-auto" />,
      available: false,
    },
    {
      title: "Social Media Content AI",
      desc: "Create Instagram, LinkedIn, and Twitter posts.",
      icon: <Share2 size={40} className="text-gray-400 mx-auto" />,
      available: false,
    },
    {
      title: "Automation AI",
      desc: "Automate workflows without coding.",
      icon: <Bot size={40} className="text-gray-400 mx-auto" />,
      available: false,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-24 bg-gradient-to-br from-[#FFECE5] to-[#FFD6C9] min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-4">
        Pricing & <span className="text-[#FF7F50]">Plans</span>
      </h2>

      <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-14">
        Each tool has its own pricing. Select a tool below to view its pricing page.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={tool.available ? { scale: 1.05, y: -8 } : {}}
            className={`p-8 rounded-xl shadow-xl border text-center transition ${
              tool.available
                ? "bg-white border-[#FFD2C1]"
                : "bg-gray-100 border-gray-300 opacity-70 cursor-not-allowed"
            }`}
          >
            {tool.icon}
            <h3 className="text-xl font-semibold mt-4">{tool.title}</h3>
            <p className="text-gray-600 mt-3">{tool.desc}</p>

            {tool.available ? (
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-[#FF7F50] hover:bg-[#ff6a36] text-white px-6 py-2 rounded-full inline-block transition shadow-md"
              >
                View Tool Pricing
              </a>
            ) : (
              <span className="mt-6 inline-block bg-gray-300 text-gray-600 px-6 py-2 rounded-full text-sm shadow-sm">
                Coming Soon
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
