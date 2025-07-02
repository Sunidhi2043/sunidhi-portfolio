import React, { useCallback, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const buttonStyle =
  "inline-block px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition-transform duration-300";
const outlineButton =
  "inline-block px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base border border-blue-600 text-blue-600 rounded-full hover:bg-blue-100 hover:scale-105 transition-transform duration-300";

export default function Portfolio() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const { scrollYProgress } = useScroll();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[9999] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#60a5fa" },
          },
        }}
      />

      <Navbar />

      <main className="relative z-10 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen font-sans scroll-smooth">
        {/* Hero Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 shadow-md"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Sunidhi Singh 👩‍💻
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              Full Stack Developer | Python | Flask | JavaScript | ML Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:sunidhi2043@gmail.com" className={buttonStyle}>
                Contact Me
              </a>
              <a
  href="/Sunidhi_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={outlineButton}
>
  View Resume
</a>

            </div>
          </div>
        </motion.section>

        {/* About Me */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hi, I'm Sunidhi Singh, a passionate and detail-oriented Software Developer with a strong foundation in Full Stack Web Development, Data Analysis, and Machine Learning. I'm currently pursuing my B.Tech in Computer Science from SRM Institute of Science & Technology with a CGPA of 8.62.

            I thrive at the intersection of technology and problem-solving whether it's building dynamic dashboards, creating scalable web apps, or mentoring juniors in programming. I've interned at Larsen & Toubro where I worked on full-stack applications and data-driven solutions, and developed several projects including an AI-powered Excel Insights Tool, a Sentiment Analysis Dashboard, and a video-based E-Learning platform.

            I'm skilled in Python, C++, Flask, JavaScript, SQL, and tools like Power BI, Git, and Google Cloud APIs. Outside of coding, I enjoy leading creative events and was actively involved in my college's Coding and Fashion Clubs organizing hackathons, mentoring peers, and managing campaigns.

            Currently, I'm looking for opportunities to bring innovative solutions to real-world problems and continue growing as a full-stack developer.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className=" dark:bg-gray-800 py-16 px-4 sm:px-6 text-gray-800 dark:text-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Excel Insight Master"
                tech="Python, Pandas, NLP"
                desc="A smart automation tool that transforms static Excel files into interactive dashboards using Natural Language Processing.

✅ Ask questions like “Top 5 sales regions” and get instant visual insights

📈 Auto-analyzes raw data to generate key stats and summaries

🎯 Visualizes results with dynamic graphs using Matplotlib and Seaborn

🤖 NLP-powered backend for conversational data interaction

Impact: Simplifies Excel data analysis for non-technical users—no formulas, just insights."
                github="https://github.com/Sunidhi2043/Excel-Insight-Master"
              />
              <ProjectCard
                title="Sentiment Analysis Dashboard"
                tech="Python, ML, SQL"
                desc="A web dashboard that analyzes and visualizes social media sentiment using NLP and Machine Learning.

🧠 Detects sentiment as Positive, Negative, or Neutral

🗂️ Real-time SQL-based data handling

📊 Visual insights via Matplotlib and Streamlit

⚙️ Custom filters by keyword, date, and sentiment

🌐 Clean, responsive user interface

Impact: Simplifies sentiment understanding for marketers, researchers, and campaign teams."
                github="https://github.com/Sunidhi2043/Sentiment-Analysis-Dashboard-on-Social-Media"
              />
              <ProjectCard
                title="E-Learning Platform"
                tech="Flask, Google Cloud, JS"
                desc="A scalable video-based learning app built with Flask and Google Cloud for seamless content management and playback.

📹 Secure video uploads via Google Cloud Storage

📁 Auto-generated course playlists

🌐 Responsive UI with HTML, CSS, and JavaScript

🔐 Role-based structure for future authentication

🚀 Live on Render for easy access

Impact: A solid foundation for digital learning—ideal for educators and institutions."
                github="http://my-learning-platform.onrender.com"
              />
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-16 px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Experience</h2>
          <div>
            <h3 className="text-xl font-semiboldtext-xl font-semibold text-gray-800 dark:text-gray-200">
              Larsen & Toubro – Software Developer Intern (Jan 2025 – Apr 2025)
            </h3>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              <li>🔧 Full-Stack Development: Built and integrated scalable features using Python and Flask for internal applications.</li>
              <li>📊 Data Analysis: Analyzed real-world datasets to extract actionable insights and improve internal processes.</li>
              <li>🤝 Cross-Functional Collaboration: Worked closely with multiple teams to deliver efficient tech solutions aligned with business needs.</li>
              <li>🧠 Skill Enhancement: Sharpened proficiency in back-end logic, API development, and clean code practices in a real-world setting.</li>
            </ul>
          </div>
        </motion.section>

        {/* Skills & Certifications */}
<motion.section
  id="skills"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 max-w-5xl mx-auto"
>
  <h2 className="text-3xl font-bold mb-6 text-center">Skills & Certifications</h2>

  <div className="grid sm:grid-cols-2 gap-8 text-base sm:text-lg text-gray-700 dark:text-gray-300">
    <div>
      <h3 className="text-xl font-semibold mb-2">⚙️ Technical Skills</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Frontend: HTML, CSS, JavaScript, React</li>
        <li>Backend: Python, Flask, Node.js (basic)</li>
        <li>Database: SQL, PostgreSQL</li>
        <li>Tools: Git, GitHub, Power BI, Vercel, Google Cloud API</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">💼 Soft Skills</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Strong Communication & Public Speaking</li>
        <li>Leadership & Team Collaboration</li>
        <li>Time Management & Deadline Handling</li>
        <li>Creative Event Planning</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">🗣️ Languages Known</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>English – Professional Proficiency</li>
        <li>Hindi – Native</li>
        <li>German – A2 level</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">📜 Certifications</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>AI for Everyone – DeepLearning.AI</li>
        <li>Full Stack Development – Udemy</li>
        <li>Back-End Application Development Capstone by IBM – Coursera</li>
        <li>Data Science Math Skills – Duke University</li>
      </ul>
    </div>
  </div>
</motion.section>

{/* Extracurricular Activities */}
<motion.section
  id="extracurricular"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  viewport={{ once: true }}
  className="py-16 px-4 sm:px-6 max-w-4xl mx-auto"
>
  <h2 className="text-3xl font-bold mb-6 text-center">Extracurricular Activities</h2>
  <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-2">
    <li>👗 Lead Designer & Coordinator – Fashion Club, SRM</li>
    <li>👩‍💻 Organized Hackathons – Coding Club, SRM</li>
    <li>🎤 Hosted technical & cultural college events</li>
    <li>✍️ Passionate about sketching & fashion styling</li>
    <li>🎯 Volunteered for social and campus initiatives</li>
  </ul>
</motion.section>


        {/* Contact Form */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-800 py-16 px-4 sm:px-6 text-center"
        >
          <h2 className=" dark:bg-gray-800 py-16 px-4 sm:px-6 text-3xl font-bold mb-4 text-white dark:text-white">Let's Connect</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300"
            />
            <button type="submit" className={buttonStyle}>
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-2 sm:gap-10 text-sm sm:text-lg flex-wrap">
            <a
              href="mailto:sunidhi2043@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sunidhi2043@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/sunidhi-singh-bb7806222"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Sunidhi2043"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}

function ProjectCard({ title, tech, desc, github }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{tech}</p>
      <p className="mb-4 text-gray-700 dark:text-gray-200 text-sm sm:text-base">{desc}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View Project
      </a>
    </motion.div>
  );
}
