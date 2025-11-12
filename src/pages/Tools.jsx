import { motion } from "framer-motion";
import { Briefcase, FileText, Sparkles, Mail, Share2, Bot, Users, Building2, School, UserSearch } from "lucide-react";

export default function Tools() {
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
      desc: "Summarize PDFs, extract key data, rewrite content — Coming Soon.",
      icon: <FileText size={42} className="text-gray-400 mx-auto" />,
      available: false,
    },
    {
      title: "Business AI",
      desc: "Generate business plans, proposals, and strategies — Coming Soon.",
      icon: <Sparkles size={42} className="text-gray-400 mx-auto" />,
      available: false,
    },
  ];

  const upcomingTools = [
    {
      title: "Email Writer AI",
      desc: "Generate professional emails in seconds.",
      icon: <Mail size={40} className="text-gray-400 mx-auto" />,
    },
    {
      title: "Social Media Content AI",
      desc: "Create posts for Instagram, LinkedIn, and Twitter.",
      icon: <Share2 size={40} className="text-gray-400 mx-auto" />,
    },
    {
      title: "Automation AI",
      desc: "Create workflows that automate tasks — without coding.",
      icon: <Bot size={40} className="text-gray-400 mx-auto" />,
    },
  ];

  const targetUsers = [
    { title: "Students", icon: <School className="text-[#FF7F50]" size={38} /> },
    { title: "Job Seekers", icon: <UserSearch className="text-[#FF7F50]" size={38} /> },
    { title: "Employees", icon: <Users className="text-[#FF7F50]" size={38} /> },
    { title: "Businesses", icon: <Building2 className="text-[#FF7F50]" size={38} /> },
    { title: "Recruiters / HR", icon: <Briefcase className="text-[#FF7F50]" size={38} /> },
    { title: "Schools / Colleges", icon: <School className="text-[#FF7F50]" size={38} /> },
  ];

  return (
    <section className="px-8 py-20 bg-gradient-to-br from-[#FFECE5] to-[#FFD6C9] min-h-screen">

      <h2 className="text-4xl text-center mb-4">
        Explore <span className="text-[#FF7F50]">AI Tools</span>
      </h2>

      <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto mb-14">
        Startogen brings multiple AI tools into one place.
        <strong> Resume Analyzer</strong> is now live — others are launching soon!
      </p>

      {/* Available + Main Tools */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={tool.available ? { scale: 1.05, y: -8 } : {}}
            className={`p-8 rounded-xl shadow-xl border text-center transition 
              ${tool.available
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
                rel="noreferrer"
                className="mt-6 bg-[#FF7F50] hover:bg-[#ff6a36] text-white px-6 py-2 rounded-full inline-block transition shadow-md"
              >
                Use Tool
              </a>
            ) : (
              <span className="mt-6 inline-block bg-gray-300 text-gray-600 px-6 py-2 rounded-full text-sm shadow-sm">
                Coming Soon
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional Coming Soon Tools */}
      <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {upcomingTools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="p-8 rounded-xl shadow-md bg-gray-100 border border-gray-300 opacity-60 text-center cursor-not-allowed"
          >
            {tool.icon}
            <h3 className="text-xl font-semibold mt-4">{tool.title}</h3>
            <p className="text-gray-600 mt-3">{tool.desc}</p>
            <span className="mt-6 inline-block bg-gray-300 text-gray-600 px-5 py-2 rounded-full text-sm shadow-sm">
              Coming Soon
            </span>
          </motion.div>
        ))}
      </div>

      {/* Who Can Use Startogen? */}
      <h3 className="text-3xl text-center mt-24 mb-10 text-gray-900">
        Who Can Use Startogen?
      </h3>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {targetUsers.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-[#FFD2C1]"
          >
            <div className="flex justify-center mb-3">{user.icon}</div>
            <p className="text-lg font-semibold text-gray-800">{user.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
