// src/pages/Impact.jsx

import {
  UsersIcon,
  TrendingUpIcon,
  AcademicCapIcon,
  MapIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HeartIcon,
  GlobeIcon,
  BookOpenIcon,
  ChartBarIcon
} from '../components/Icons'

export default function Impact() {
  const achievements = [
    { label: "Total Beneficiaries", value: "3,267", sub: "Lives Transformed", Icon: UsersIcon, color: "from-blue-500 to-blue-600" },
    { label: "Investment Value", value: "R5.7M", sub: "Community Impact", Icon: TrendingUpIcon, color: "from-gold to-yellow-600" },
    { label: "Training Programmes", value: "25+", sub: "Diverse Offerings", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { label: "Training Centers", value: "3", sub: "Regional Coverage", Icon: MapIcon, color: "from-green-500 to-emerald-600" },
  ]

  const demographics = [
    { group: "Adults (18–55)", desc: "Career change and upskilling participants.", Icon: UserGroupIcon, color: "from-blue-500 to-blue-600" },
    { group: "Corporate", desc: "SMEs and public sector partners engaged in development.", Icon: BriefcaseIcon, color: "from-gold to-yellow-600" },
    { group: "School Leavers & Youth", desc: "Young people entering training and employment pathways.", Icon: AcademicCapIcon, color: "from-purple-500 to-purple-600" },
    { group: "Underemployed & Community Members", desc: "Individuals seeking reintegration and growth.", Icon: HeartIcon, color: "from-pink-500 to-pink-600" },
  ]

  const community = [
    { stat: "150K+", title: "Community Population Served", Icon: GlobeIcon, color: "from-cyan-500 to-cyan-600" },
    { stat: "29", title: "Villages Reached", Icon: MapIcon, color: "from-green-500 to-emerald-600" },
    { stat: "96.4%", title: "Literacy Rate", Icon: BookOpenIcon, color: "from-blue-500 to-blue-600" },
    { stat: "40.2%", title: "Post-Matric Study Rate", Icon: ChartBarIcon, color: "from-purple-500 to-purple-600" },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 py-16 space-y-20">
      {/* ===== HERO ===== */}
      <section className="relative text-center overflow-hidden py-12">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse animation-delay-400" />
        </div>

        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm animate-fade-in">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Results</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-fade-in-down">
          <span className="gradient-text">Impact and Community</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-200">
          Transforming lives through inclusive education and skills development.
          <br />
          Our results reflect years of consistent growth, partnerships, and a
          deep commitment to community empowerment.
        </p>
      </section>

      {/* ===== KEY ACHIEVEMENTS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Since 2016</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Key Achievements
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 text-center shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} rounded-t-3xl`} />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-5xl font-extrabold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">{item.value}</h3>
                <p className="text-charcoal font-bold text-lg mb-1">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.sub}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== LEARNER DEMOGRAPHICS ===== */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Who We Serve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Learner Demographics
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {demographics.map((demo, index) => {
            const Icon = demo.Icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${demo.color} rounded-t-2xl`} />

                {/* Icon */}
                <div className="w-12 h-12 mb-4 text-gold transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {demo.group}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {demo.desc}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== COMMUNITY STATS ===== */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/30 shadow-lg">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Community Reach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Community-Centered Approach
          </h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            We proudly serve a diverse range of learners, reflecting our commitment to inclusive education and accessible community development across multiple villages and regions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {community.map((stat, index) => {
            const Icon = stat.Icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 text-center shadow-2xl shadow-black/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Colored top accent */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color} rounded-t-3xl`} />

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 text-gold transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-5xl font-extrabold text-gold mb-3 group-hover:scale-110 transition-transform duration-300">{stat.stat}</h3>
                <p className="text-charcoal font-bold text-lg">{stat.title}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </div>
            )
          })}
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
