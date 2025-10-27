// src/pages/Programs.jsx

import Students1 from "../assets/programs/Students1.jpg"
import Students2 from "../assets/programs/Students2.jpg"
import Students3 from "../assets/programs/Students3.jpg"
import Students4 from "../assets/programs/Students4.jpg"
import InspiringTalkVideo from "../assets/videos/InspiringTalkDrKoketso_optimized.mp4"
import EnterpriseVideo from "../assets/videos/focus-enterprise-marabo_optimized.mp4"
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  ComputerIcon,
  UsersIcon,
  BriefcaseIcon,
  LightBulbIcon,
  HeartIcon,
  ClockIcon,
  TrophyIcon,
  CheckCircleIcon
} from '../components/Icons'

export default function Programs() {
  const services = [
    { title: "Accredited Skills Programmes & Qualifications", Icon: BadgeCheckIcon, color: "from-blue-500 to-blue-600" },
    { title: "Recognition of Prior Learning (RPL)", Icon: TrophyIcon, color: "from-gold to-yellow-600" },
    { title: "Community Workshops & Short Courses", Icon: UsersIcon, color: "from-green-500 to-emerald-600" },
    { title: "Career Guidance and Mentorship", Icon: HeartIcon, color: "from-pink-500 to-pink-600" },
    { title: "Support for Trainers: Assessors, Moderators, and Facilitators", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { title: "Project Design & Implementation Support for Development Initiatives", Icon: LightBulbIcon, color: "from-orange-500 to-orange-600" },
  ]

  const whoFor = [
    "Unemployed Youth",
    "Adults looking to upskill or reskill",
    "Community organizations and cooperatives",
    "Education and training professionals",
    "Corporate teams and working professionals",
    "Entrepreneurs and small business owners",
  ]

  const programs = [
    {
      title: "IT & Digital Skills Training",
      overview:
        "Comprehensive training in modern IT skills including web development, software applications, and digital tools essential for today's workplace.",
      target: "Youth, adults, and career changers",
      duration: "3–6 months",
      certification: "SETA Accredited IT Certificate",
      outcome:
        "Industry-ready digital competencies and certifications.",
      curriculum: [
        "Web Development Fundamentals",
        "Microsoft Office Suite",
        "Cloud Computing Basics",
        "Cybersecurity Awareness",
        "Data Analytics Introduction",
      ],
    },
    {
      title: "Business Administration Programs",
      overview:
        "Master essential business administration skills including office management, communication, and organizational systems for corporate environments.",
      target: "Aspiring administrators and office professionals",
      duration: "4 months",
      certification: "Business Administration Certificate",
      outcome:
        "Professional administrative skills and workplace readiness.",
      curriculum: [
        "Office Management",
        "Business Communication",
        "Records Management",
        "Financial Administration",
        "Customer Relations",
      ],
    },
    {
      title: "Corporate Upskilling Workshops",
      overview:
        "Tailored workshops for organizations looking to upskill their workforce with cutting-edge industry practices and emerging technologies.",
      target: "Employed professionals and corporate teams",
      duration: "2–4 weeks",
      certification: "Professional Development Certificate",
      outcome:
        "Enhanced workplace productivity and leadership capabilities.",
      curriculum: [
        "Leadership Development",
        "Project Management",
        "Digital Transformation",
        "Team Collaboration",
        "Innovation Strategies",
      ],
    },
    {
      title: "Digital Literacy Classes",
      overview:
        "Friendly, accessible training for those new to technology, covering basics of computers, internet usage, and digital communication.",
      target: "Beginners, seniors, and community members",
      duration: "6 weeks",
      certification: "Digital Literacy Certificate",
      outcome:
        "Confidence in using digital devices and online services.",
      curriculum: [
        "Computer Basics",
        "Internet Navigation",
        "Email Communication",
        "Social Media Safety",
        "Online Banking Basics",
      ],
    },
    {
      title: "Soft Skills Development",
      overview:
        "Build essential workplace soft skills including communication, teamwork, problem-solving, and emotional intelligence for career success.",
      target: "Job seekers and young professionals",
      duration: "2 months",
      certification: "Soft Skills Certificate",
      outcome:
        "Enhanced interpersonal and professional competencies.",
      curriculum: [
        "Professional Communication",
        "Teamwork & Collaboration",
        "Problem Solving",
        "Time Management",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Employment Readiness Programs",
      overview:
        "Comprehensive program combining skills training, job search strategies, and placement assistance to get you employment-ready.",
      target: "Unemployed youth and job seekers",
      duration: "3 months",
      certification: "Employment Readiness Certificate + Job Placement Support",
      outcome:
        "Job-ready skills and successful placement.",
      curriculum: [
        "CV Writing",
        "Interview Skills",
        "Job Search Strategies",
        "Workplace Etiquette",
        "Personal Branding",
      ],
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ===== HERO ===== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Offerings</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Services & Programs</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
          Empowering individuals, communities, and organizations through accredited training, workshops, and skills development initiatives that drive sustainable transformation.
        </p>
      </section>

      {/* ===== SERVICES WE PROVIDE ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Services We Provide
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Colored top border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className="w-14 h-14 mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-charcoal font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== WHO IT IS FOR ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Target Audience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Who It's For
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {whoFor.map((target, index) => (
            <li
              key={index}
              className="group relative bg-white border-2 border-gold/30 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-medium flex items-center gap-3"
            >
              <CheckCircleIcon className="w-6 h-6 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-gold transition-colors duration-300">{target}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== LEARNING IN ACTION ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Student Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Learning in Action
          </h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            See our students thriving in their educational journey — building skills, confidence, and brighter futures.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: Students1, alt: "Students engaged in computer training" },
            { img: Students2, alt: "Collaborative learning environment" },
            { img: Students3, alt: "Skills development workshop" },
            { img: Students4, alt: "Hands-on practical training" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20 group cursor-pointer animate-fade-in-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-semibold text-charcoal">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Training Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Our Programs
          </h2>
        </div>

        <div className="space-y-12">
          {programs.map((prog, index) => (
            <div key={index}>
              {/* Program Card */}
              <div className="group relative bg-gradient-to-br from-white to-gray-50 border-l-4 border-gold rounded-3xl p-10 shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Program icon badge */}
                <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl shadow-lg shadow-gold/50 flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <ComputerIcon className="w-8 h-8" />
                </div>

                <h3 className="text-3xl font-bold text-charcoal mb-4 mt-4 group-hover:text-gold transition-colors duration-300">
                  {prog.title}
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {prog.overview}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
                  <div className="flex items-start gap-3">
                    <UsersIcon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-charcoal">Target Group:</strong>
                      <p className="text-gray-700 text-sm">{prog.target}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-charcoal">Duration:</strong>
                      <p className="text-gray-700 text-sm">{prog.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BadgeCheckIcon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-charcoal">Certification:</strong>
                      <p className="text-gray-700 text-sm">{prog.certification}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrophyIcon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-charcoal">Outcome:</strong>
                      <p className="text-gray-700 text-sm">{prog.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gold/5 rounded-xl p-6 border border-gold/20">
                  <h4 className="font-bold text-charcoal text-lg mb-4 flex items-center gap-2">
                    <AcademicCapIcon className="w-6 h-6 text-gold" />
                    Curriculum Highlights
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {prog.curriculum.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>

              {/* Video Integration: After Corporate Upskilling Workshops (index 2) */}
              {index === 2 && (
                <div className="mt-8 max-w-4xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-2 border-gold/30">
                    <video
                      src={InspiringTalkVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">Dr. Koketso Rakhudu — Inspiring Leadership & Mentorship</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Integration: After Employment Readiness Programs (index 5) */}
              {index === 5 && (
                <div className="mt-8 max-w-4xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-2 border-gold/30">
                    <video
                      src={EnterpriseVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">Enterprise Development in Action — Community Training Excellence</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== ACCREDITATION FOOTER ===== */}
      <footer className="text-center text-sm text-gray-600 border-t pt-8">
        <p>
          Primary SETA: ETDP SETA · Accreditation Number: ETDP011394 | Code: 581
          · SAQA Provider Code: ETDP2368 · Reg No. 177-109 NPO
        </p>
        <p>
          <span className="font-semibold text-charcoal">
            +27 63 644 5723 · admin@koketsorakhudufoundation.com
          </span>{" "}
          · www.drkoketsorakhudufoundation.com
        </p>
      </footer>
    </main>
  )
}
