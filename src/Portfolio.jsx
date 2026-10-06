import React, { useCallback } from "react";



import { motion, useScroll } from "framer-motion";



import Navbar from "./Navbar";

import AnimationLayer from "./AnimationLayer";



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
return (



    <>



      {/* Scroll progress */}



      <motion.div



        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[9999] origin-left"



        style={{ scaleX: scrollYProgress }}



      />







      {/* Background particles */}



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



            links: {



              enable: true,



              color: "#60a5fa",



            },



          },



        }}



      />







      <Navbar />

      <AnimationLayer />





      <main className="relative z-10 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen font-sans scroll-smooth">







        {/* ==================== HERO ==================== */}



        <motion.section



          id="home"



          initial={{ opacity: 0, y: 40 }}



          whileInView={{ opacity: 1, y: 0 }}



          transition={{ duration: 0.6 }}



          viewport={{ once: true }}



          className="text-center py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 shadow-md"



        >



          <div className="max-w-4xl mx-auto">







            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">



              AI • Data • Machine Learning



            </p>







            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">



              Sunidhi Singh



            </h1>







            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">



              📍 Passau, Germany · Available for Werkstudent & Internship opportunities



            </p>







            <p className="text-lg sm:text-xl md:text-2xl mb-4">



              AI & Data Science | Machine Learning | Business Intelligence



            </p>







            <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">



              MSc Artificial Intelligence student at the University of Passau,



              building data-driven solutions with Python, SQL, machine learning,



              and business intelligence.



            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="mailto:sunidhi2043@gmail.com"
                className={buttonStyle}
              >
                Contact Me
              </a>

              <a
                href="public/Sunidhi_Singh__Resume.pdf"



                target="_blank"

                rel="noopener noreferrer"

                className={outlineButton}
              >

                View Resume

              </a>

              <a



                href="https://github.com/Sunidhi2043"



                target="_blank"



                rel="noopener noreferrer"



                className={outlineButton}



              >



                GitHub



              </a>







            </div>



          </div>



        </motion.section>











        {/* ==================== ABOUT ==================== */}



        <motion.section



          id="about"



          initial={{ opacity: 0, y: 30 }}



          whileInView={{ opacity: 1, y: 0 }}



          transition={{ duration: 0.5, delay: 0.1 }}



          viewport={{ once: false, amount: 0.2 }}



          className="py-16 px-4 sm:px-6 max-w-4xl mx-auto"



        >



          <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">



            About Me



          </h2>







          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">







            <p>



              I'm an MSc Artificial Intelligence student at the University of



              Passau with a B.Tech in Computer Science and Engineering. My



              interests lie at the intersection of artificial intelligence,



              data analytics, business intelligence, and software development.



            </p>







            <p>



              I enjoy turning raw data and complex problems into practical,



              understandable solutions. My technical work spans Python, SQL,



              machine learning, NLP, data visualization, Power BI, and



              database technologies.



            </p>







            <p>



              I've gained professional experience through roles in market



              research, data analysis, and software development, where I worked



              with structured datasets, reporting workflows, technical



              solutions, and cross-functional teams.



            </p>







            <p>



              I'm currently interested in opportunities where I can apply my



              analytical and technical skills while continuing to grow in



              artificial intelligence and data-driven problem solving.



            </p>







          </div>



        </motion.section>











        {/* ==================== PROJECTS ==================== */}



        <motion.section



          id="projects"



          initial={{ opacity: 0, y: 30 }}



          whileInView={{ opacity: 1, y: 0 }}



          transition={{ duration: 0.6, delay: 0.2 }}



          viewport={{ once: true }}



          className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900"



        >



          <div className="max-w-6xl mx-auto">







            <div className="text-center mb-12">







              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">



                What I've Built



              </p>







              <h2 className="text-3xl sm:text-4xl font-bold">



                Featured Projects



              </h2>







              <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">



                A selection of projects across artificial intelligence,



                data analytics, business intelligence, machine learning,



                and software development.



              </p>







            </div>







            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">







              <ProjectCard



                icon="🧠"



                title="Excel Insight Master"



                tech="Python · NLP · Machine Learning · spaCy · Excel"



                desc="An AI-powered tool that allows users to interact with Excel datasets using natural-language queries. It processes uploaded spreadsheets, interprets user questions using NLP and machine learning, performs data operations, and generates visual results."



                github="https://github.com/Sunidhi2043/Excel-Insight-Master"
              />







              <ProjectCard



                icon="📊"



                title="Sentiment Analysis Dashboard"



                tech="Python · Machine Learning · NLP · Data Analysis"



                desc="A machine-learning and NLP project focused on analyzing sentiment in social media data and presenting the resulting patterns and insights through an interactive dashboard."



                github="https://github.com/Sunidhi2043/Sentiment-Analysis-Dashboard-on-Social-Media"



              />







              <ProjectCard



                icon="💼"



                title="IT Asset Management Dashboard"



                tech="Power BI · Excel · Data Visualization · Business Intelligence"



                desc="An interactive business intelligence dashboard designed to transform IT asset data into clear KPIs, reports, and visual insights for monitoring and data-driven decision-making."



                github="https://github.com/Sunidhi2043"



              />







              <ProjectCard



                icon="🎓"



                title="E-Learning Platform"



                tech="Flask · Python · JavaScript · Web Development"



                desc="A web-based learning platform built with Flask and frontend technologies, providing structured course content and video-based learning functionality."



                github="https://github.com/Sunidhi2043/My-Learning-Platform"



                live="http://my-learning-platform.onrender.com"



              />







            </div>



          </div>



        </motion.section>











        {/* ==================== EXPERIENCE ==================== */}



        <motion.section



          id="experience"



          initial={{ opacity: 0, y: 30 }}



          whileInView={{ opacity: 1, y: 0 }}



          transition={{ duration: 0.6 }}



          viewport={{ once: false, amount: 0.2 }}



          className="py-14 sm:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950"



        >



          <div className="max-w-5xl mx-auto">







            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">



                Experience

              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">



                My Journey



              </p>

              <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">



                Professional experience across market research, data analysis,



                software development, and data-driven problem solving.



              </p>







            </div>







            <div className="space-y-10">







              <ExperienceItem



                title="Market Research Project Manager"



                company="QuestionLab"



                dates="Oct 2025 – Apr 2026"



                points={[



                  "Managed data-driven market research projects from planning through execution and delivery.",



                  "Worked with structured datasets and reporting workflows to generate actionable research insights.",



                  "Coordinated project activities and collaborated across teams to ensure timely and accurate deliverables.",



                ]}



              />







              <ExperienceItem



                title="Web Development & Data Analysis Intern"



                company="Larsen & Toubro (L&T)"



                dates="Jan 2025 – Apr 2025"



                points={[



                  "Worked on web development and data analysis tasks using Python and related technologies.",



                  "Analyzed structured datasets and supported data reporting and visualization workflows.",



                  "Collaborated with teams to develop technical solutions and improve data-driven processes.",



                ]}



              />

            </div>



          </div>



        </motion.section>

        {/* ==================== EDUCATION ==================== */}
<motion.section
  id="education"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900"

>

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold">
        Education
      </h2>

      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
        Academic Background
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
        Building a strong foundation in computer science, artificial
        intelligence, and data-driven technologies.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* MSc */}
      <motion.div
        whileHover={{ y: -5 }}



        transition={{ duration: 0.2 }}



        className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border border-gray-100 dark:border-gray-700"



      >







        <div className="flex items-start gap-5">







          <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl">



            🤖



          </div>







          <div>







            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">



              2026 – 2028



            </p>







            <h3 className="text-xl sm:text-2xl font-bold">



              MSc Artificial Intelligence



            </h3>







            <p className="text-gray-600 dark:text-gray-300 mt-2">



              University of Passau



            </p>







            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">



              Passau, Germany



            </p>







          </div>







        </div>







      </motion.div>











      {/* BTech */}



      <motion.div



        whileHover={{ y: -5 }}



        transition={{ duration: 0.2 }}



        className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border border-gray-100 dark:border-gray-700"



      >







        <div className="flex items-start gap-5">







          <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl">



            🎓



          </div>







          <div>







            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">



              2021 – 2025



            </p>







            <h3 className="text-xl sm:text-2xl font-bold">



              B.Tech Computer Science & Engineering



            </h3>







            <p className="text-gray-600 dark:text-gray-300 mt-2">



              SRM Institute of Science & Technology



            </p>







            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">



              India · CGPA: 8.62 / 10



            </p>







          </div>







        </div>







      </motion.div>







    </div>



  </div>



</motion.section>











        {/* ==================== SKILLS ==================== */}



<motion.section



  id="skills"



  initial={{ opacity: 0, y: 30 }}



  whileInView={{ opacity: 1, y: 0 }}



  transition={{ duration: 0.6 }}



  viewport={{ once: true }}



  className="py-14 sm:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950"



>



  <div className="max-w-6xl mx-auto">







    {/* Section Heading */}



    <div className="text-center mb-12">

      <h2 className="text-3xl sm:text-4xl font-bold">

        Skills & Certifications

      </h2>

      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">

        Technical Expertise
      </p>


      <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">



        A practical toolkit built around artificial intelligence, data



        analytics, business intelligence, programming, and software development.



      </p>



    </div>







    {/* ==================== SKILL CATEGORIES ==================== */}



    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">







      {/* AI & Data */}



      <SkillCategory



        icon="🤖"



        title="AI & Data"



        skills={[



          "Machine Learning",



          "Natural Language Processing",



          "Data Analysis",



          "Business Intelligence",



          "Data Visualization",



        ]}



      />







      {/* Programming */}



      <SkillCategory



        icon="💻"



        title="Programming"



        skills={[



          "Python",



          "SQL",



          "JavaScript",



          "C++",



          "C",



        ]}



      />







      {/* Analytics & BI */}



      <SkillCategory



        icon="📊"



        title="Analytics & Business Intelligence"



        skills={[



          "Power BI",



          "Microsoft Excel",



          "Dashboard Development",



          "Data Transformation",



          "ETL Fundamentals",



        ]}



      />







      {/* Databases & Tools */}



          <SkillCategory
      icon="🗄️"
      title="Databases & Tools"
      skills={[
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git & GitHub",
        "Jupyter Notebook",
        "VS Code",
      ]}
    />

    <div className="md:col-span-2">
      <SkillCategory
        icon="🤝"
        title="Soft Skills"
        skills={[
          "Analytical Thinking",
          "Problem Solving",
          "Communication",
          "Project Management",
          "Team Collaboration",
          "Adaptability",
          "Attention to Detail",
          "Continuous Learning",
        ]}
      />
    </div>
  </div>

    {/* ==================== CERTIFICATIONS ==================== */}



    <div className="mb-14">



      <div className="text-center mb-8">

        <h3 className="text-2xl sm:text-3xl font-bold">



          Certifications



        </h3>

        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">



                Continuous Learning

              </p>
        



      </div>







      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">







        <CertificationCard



          title="Machine Learning"



          issuer="Stanford University · Coursera"



        />







        <CertificationCard



          title="AI For Everyone"



          issuer="DeepLearning.AI"



        />







        <CertificationCard



          title="Data Science Math Skills"



          issuer="Duke University · Coursera"



        />







        <CertificationCard



          title="Complete Web Development Bootcamp"



          issuer="Udemy"



        />







        <CertificationCard



          title="Back-End Application Development Capstone"



          issuer="IBM"



        />







        <CertificationCard



          title="Data Fundamentals"



          issuer="IBM"



        />







      </div>



    </div>







    {/* ==================== LANGUAGES ==================== */}



    <div>



      <div className="text-center mb-8">

        <h3 className="text-2xl sm:text-3xl font-bold">
          Languages
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          Communication
        </p>


      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <LanguageBadge

          language="English"



          level="Fluent"



        />







        <LanguageBadge



          language="Hindi"



          level="Native"



        />







        <LanguageBadge



          language="German"



          level="A1 · Currently Learning"



        />







      </div>



    </div>







  </div>



</motion.section>











        {/* ==================== EXTRACURRICULAR ==================== */}

<motion.section

  id="extracurricular"

  initial={{ opacity: 0, y: 30 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.6 }}

  viewport={{ once: true }}

  className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900"

>

  <div className="max-w-5xl mx-auto">



    {/* Section Heading */}

    <div className="text-center mb-12">

      <h2 className="text-3xl sm:text-4xl font-bold">

        Interests & Activities

      </h2>

        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">

        Beyond Technology

      </p>

      <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">

        A few interests and activities that reflect my creative side,

        curiosity, and life beyond technical work.

      </p>

    </div>



    {/* Interest Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">



      <motion.div

        whileHover={{ y: -5 }}

        transition={{ duration: 0.2 }}

        className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border border-gray-100 dark:border-gray-700 text-center"

      >

        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl mb-5">

          🎨

        </div>



        <h3 className="text-xl font-bold mb-2">

          Creativity

        </h3>



        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">

          Sketching, visual creativity, and exploring design ideas.

        </p>

      </motion.div>





      <motion.div

        whileHover={{ y: -5 }}

        transition={{ duration: 0.2 }}

        className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border border-gray-100 dark:border-gray-700 text-center"

      >

        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl mb-5">

          👗

        </div>



        <h3 className="text-xl font-bold mb-2">

          Fashion & Styling

        </h3>



        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">

          An interest in fashion, styling, and visual aesthetics.

        </p>

      </motion.div>





      <motion.div

        whileHover={{ y: -5 }}

        transition={{ duration: 0.2 }}

        className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-md border border-gray-100 dark:border-gray-700 text-center"

      >

        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl mb-5">

          🌱

        </div>



        <h3 className="text-xl font-bold mb-2">

          Continuous Learning

        </h3>



        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">

          Continuously learning new technologies and expanding my

          knowledge in artificial intelligence and data.

        </p>

      </motion.div>



    </div>

  </div>

</motion.section>



        {/* ==================== CONTACT ==================== */}

<motion.section

  id="contact"

  initial={{ opacity: 0, y: 30 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{ duration: 0.6 }}

  viewport={{ once: true }}

  className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-900 text-white"

>

  <div className="max-w-5xl mx-auto">



    {/* Heading */}

    <div className="text-center mb-12">

      <p className="text-blue-400 font-medium mb-2">

        Get In Touch

      </p>



      <h2 className="text-3xl sm:text-4xl font-bold mb-4">

        Let's Connect

      </h2>



      <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">

        I'm open to Werkstudent and internship opportunities in AI,

        data analytics, machine learning, and business intelligence.

        Feel free to reach out.

      </p>

    </div>



    {/* Contact Content */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">



      {/* Left Side */}

      <div className="space-y-6">



        <div>

          <h3 className="text-2xl font-bold mb-3">

            Have an opportunity?

          </h3>



          <p className="text-gray-300 leading-relaxed">

            Whether you're looking for an AI enthusiast, data analyst,

            or someone who enjoys turning data into practical solutions,

            I'd be happy to hear from you.

          </p>

        </div>



        {/* Email */}

        <a

          href="mailto:sunidhi2043@gmail.com?subject=Portfolio%20Inquiry"

          className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"

        >

          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 text-xl">

            ✉️

          </div>



          <div>

            <p className="text-sm text-gray-400">

              Email

            </p>



            <p className="font-medium text-white">

              sunidhi2043@gmail.com

            </p>

          </div>

        </a>



        {/* LinkedIn */}

        <a

          href="https://linkedin.com/in/sunidhi-singh-bb7806222"

          target="_blank"

          rel="noopener noreferrer"

          className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"

        >

          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 text-xl">

            in

          </div>



          <div>

            <p className="text-sm text-gray-400">

              LinkedIn

            </p>



            <p className="font-medium text-white">

              Connect with me on LinkedIn

            </p>

          </div>

        </a>



        {/* GitHub */}

        <a

          href="https://github.com/Sunidhi2043"

          target="_blank"

          rel="noopener noreferrer"

          className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"

        >

          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-600 text-xl">

          </div>



          <div>

            <p className="text-sm text-gray-400">

              GitHub

            </p>



            <p className="font-medium text-white">

              View my projects

            </p>

          </div>

        </a>



      </div>



      {/* Right Side - Contact Form */}

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">



        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">

          Send me a message

        </h3>



        <form

          action="https://formsubmit.co/sunidhi2043@gmail.com"

          method="POST"

          className="space-y-5"

        >



          {/* FormSubmit settings */}

          <input

            type="hidden"

            name="_subject"

            value="New Portfolio Contact"

          />



          <input

            type="hidden"

            name="_captcha"

            value="true"

          />



          <input

            type="hidden"

            name="_template"

            value="table"

          />



          {/* Name */}

          <div>

            <label

              htmlFor="contact-name"

              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"

            >

              Name

            </label>



            <input

              id="contact-name"

              type="text"

              name="name"

              placeholder="Your name"

              required

              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"

            />

          </div>



          {/* Email */}

          <div>

            <label

              htmlFor="contact-email"

              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"

            >

              Email

            </label>



            <input

              id="contact-email"

              type="email"

              name="email"

              placeholder="your@email.com"

              required

              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"

            />

          </div>



          {/* Message */}

          <div>

            <label

              htmlFor="contact-message"

              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"

            >

              Message

            </label>



            <textarea

              id="contact-message"

              name="message"

              rows="5"

              placeholder="Tell me a little about the opportunity..."

              required

              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"

            />

          </div>



          {/* Submit */}

          <button

            type="submit"

            className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"

          >

            Send Message ↗

          </button>



        </form>



        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">

          I'll get back to you as soon as possible.

        </p>



      </div>



    </div>



    {/* Footer */}

    <div className="border-t border-gray-700 mt-14 pt-8 text-center">



      <p className="text-gray-400 text-sm">

        © {new Date().getFullYear()} Sunidhi Singh. Built with React.

      </p>



    </div>



  </div>

</motion.section>







      </main>



    </>



  );



}



/* ==================== EXPERIENCE ITEM ==================== */



function ExperienceItem({ title, company, dates, points }) {

  return (

    <motion.div

      initial={{

        opacity: 0,

        x: -70,

      }}

      whileInView={{

        opacity: 1,

        x: 0,

      }}

      viewport={{

        once: false,

        amount: 0.25,

      }}

      transition={{

        duration: 0.7,

        ease: [0.22, 1, 0.36, 1],

      }}

      className="relative pl-8 sm:pl-10 border-l-2 border-blue-200 dark:border-blue-900"

    >

      {/* Timeline dot */}

      <motion.div

        initial={{

          scale: 0,

        }}

        whileInView={{

          scale: 1,

        }}

        viewport={{

          once: false,

        }}

        transition={{

          delay: 0.25,

          type: "spring",

          stiffness: 250,

          damping: 15,

        }}

        className="

          absolute

          -left-[9px]

          top-1

          w-4 h-4

          rounded-full

          bg-blue-600

          border-4

          border-white

          dark:border-gray-950

        "

      />



      <motion.div

        whileHover={{

          x: 8,

          scale: 1.01,

        }}

        transition={{

          duration: 0.25,

        }}

        className="

          bg-gray-50 dark:bg-gray-900

          rounded-2xl

          p-6 sm:p-7

          shadow-sm

          hover:shadow-xl

          transition-shadow duration-300

        "

      >

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">

          <div>

            <h3 className="text-xl sm:text-2xl font-bold">

              {title}

            </h3>



            <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">

              {company}

            </p>

          </div>



          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">

            {dates}

          </span>

        </div>



        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">

          {points.map((point, index) => (

            <motion.li

              key={index}

              initial={{

                opacity: 0,

                x: -15,

              }}

              whileInView={{

                opacity: 1,

                x: 0,

              }}

              viewport={{

                once: true,

              }}

              transition={{

                delay: 0.3 + index * 0.12,

                duration: 0.4,

              }}

              className="flex gap-3"

            >

              <span className="text-blue-600 mt-1">

                ▹

              </span>



              <span>{point}</span>

            </motion.li>

          ))}

        </ul>

      </motion.div>

    </motion.div>

  );

}







function SkillCategory({ icon, title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: "0 20px 50px rgba(37, 99, 235, 0.12)",
      }}
      className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-7 border border-gray-100 dark:border-gray-800 shadow-sm transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ y: [0, -4, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-2xl"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
            whileHover={{ scale: 1.06, y: -2 }}
            className="px-3.5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ title, issuer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.12 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/30 text-xl"
        >
          📜
        </motion.div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
            {title}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            {issuer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function LanguageBadge({ language, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      whileHover={{ scale: 1.08, y: -5 }}
      className="flex items-center gap-3 px-5 py-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg"
    >
      <span className="font-semibold text-gray-900 dark:text-gray-100">
        {language}
      </span>
      <span className="text-sm text-blue-600 dark:text-blue-400">
        {level}
      </span>
    </motion.div>
  );
}

/* ==================== PROJECT CARD ==================== */

function ProjectCard({ icon, title, tech, desc, github, live }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -12,
        rotateX: 3,
        rotateY: -3,
        scale: 1.02,
        boxShadow: "0 28px 70px rgba(37, 99, 235, 0.18)",
      }}
      style={{ transformPerspective: 1000 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md p-7 border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden"
    >
      <motion.div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.15, rotate: [0, -8, 8, -4, 0] }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-3xl mb-6"
        >
          {icon}
        </motion.div>

        <motion.h3
          whileHover={{ x: 4 }}
          className="text-xl sm:text-2xl font-bold mb-3"
        >
          {title}
        </motion.h3>

        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium leading-relaxed mb-4">
          {tech}
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          {desc}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium"
            >
              GitHub
              <motion.span whileHover={{ x: 3, y: -3 }}>↗</motion.span>
            </motion.a>
          )}

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 text-sm font-medium"
            >
              Live Demo
              <motion.span whileHover={{ x: 3, y: -3 }}>↗</motion.span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
