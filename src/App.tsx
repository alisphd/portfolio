import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail, Phone, MapPin, Linkedin, BookOpen, Briefcase,
  Award, GraduationCap, Code, FileText, User, ChevronRight, ChevronLeft,
  ArrowUpRight, Library, ShieldCheck, Microscope, Database,
  ExternalLink, Sprout, Dna, FlaskConical, Leaf, Trophy,
  Binary, Search, FileSearch, Image, Layers, Sparkles, X,
  Globe, Activity, Brain, FlaskRound, Atom
} from 'lucide-react';
import { cvData } from './data';

type TabId = 'about' | 'experience' | 'education' | 'publications' | 'skills' | 'courses' | 'honors' | 'references' | 'gallery';

interface Punch {
  id: number;
  x: number;
  y: number;
}

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ElementType;
}

const TABS: TabConfig[] = [
  { id: 'about', label: 'About Me', icon: User },
  { id: 'experience', label: 'Experience', icon: FlaskConical },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'publications', label: 'Publications', icon: FileSearch },
  { id: 'skills', label: 'Skills', icon: Binary },
  { id: 'gallery', label: 'Research Gallery', icon: Image },
  { id: 'courses', label: 'Courses', icon: Library },
  { id: 'honors', label: 'Honors & Awards', icon: Trophy },
  { id: 'references', label: 'References', icon: Briefcase },
];

// Clean, minimalist section heading
const SectionHeading = ({ title, icon: Icon }: { title: string, icon?: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
    {Icon && <Icon className="w-5 h-5 text-slate-400" />}
    <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{title}</h3>
  </div>
);

const getSpecColor = (spec: string) => {
  const colors: Record<string, string> = {
    "Bioinformatics": "text-blue-600 bg-blue-50 border-blue-100",
    "Plant Bioinformatic Methods": "text-emerald-600 bg-emerald-50 border-emerald-100",
    "Agroforestry": "text-lime-600 bg-lime-50 border-lime-100",
    "Agribusiness & Sustainable Food": "text-orange-600 bg-orange-50 border-orange-100",
    "GIS Specialization": "text-violet-600 bg-violet-50 border-violet-100",
    "Python for Everybody": "text-amber-600 bg-amber-50 border-amber-100",
    "Data Visualization in R": "text-cyan-600 bg-cyan-50 border-cyan-100",
    "Digital Marketing & E-commerce": "text-rose-600 bg-rose-50 border-rose-100",
  };
  return colors[spec] || "text-slate-600 bg-slate-100 border-slate-200";
};

const GALLERY_CATEGORY_ICONS: Record<string, React.ElementType> = {
  protein: Atom,
  dna: Dna,
  search: Search,
  flask: FlaskRound,
  globe: Globe,
  activity: Activity,
  brain: Brain,
  layers: Layers,
  database: Database,
  sparkles: Sparkles,
};

const GALLERY_CATEGORY_COLORS: Record<string, string> = {
  "Phylogenomics & Molecular Evolution": "from-sky-500 to-blue-600",
  "Comparative Genomics & Synteny": "from-indigo-500 to-purple-600",
  "Transcriptomics & Network Analysis": "from-pink-500 to-rose-600",
  "Protein Structure & Docking": "from-blue-500 to-indigo-600",
  "Population Genetics": "from-emerald-500 to-teal-600",
  "Promoter & Codon Analysis": "from-amber-500 to-orange-600",
  "Wet-Lab & Field Research": "from-lime-500 to-green-600",
  "GIS, Genomics & Networks": "from-violet-500 to-purple-600",
  "Evolutionary Selection & RNA-seq": "from-rose-500 to-pink-600",
  "Machine Learning & Multi-omics": "from-cyan-500 to-blue-600",
  "Structural Biology & Deep Evolution": "from-fuchsia-500 to-purple-600",
  "Pangenome, GWAS & SDM": "from-orange-500 to-red-600",
  "Frontier & Emerging Methods": "from-teal-500 to-cyan-600",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [galleryCategory, setGalleryCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ file: string; title: string, desc: string, tags: string[] } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  const scrollMenu = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans pb-24 selection:bg-slate-900 selection:text-white">

      {/* Static Hero Background for better performance */}
      <div className="h-64 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">

        {/* Profile Card - Solid Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-8 mb-10 flex flex-col md:flex-row gap-8 items-center md:items-start"
        >
          {/* Picture - Modern Frame with Shake Effect */}
          <div className="shrink-0 relative group">
            <motion.div
              whileTap={{
                rotate: [0, -2, 2, -2, 2, 0],
                x: [0, -2, 2, -2, 2, 0]
              }}
              transition={{ duration: 0.4 }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-100 cursor-pointer relative z-10"
            >
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt={cvData.name}
                className="w-full h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Decorative ring behind image */}
            <div className="absolute -inset-4 bg-teal-500/5 rounded-[3rem] blur-2xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg border border-slate-100 z-20"
            >
              <div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" title="Available for work"></div>
            </motion.div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left pt-2">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight"
            >
              {cvData.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-medium text-slate-500 mb-3"
            >
              {cvData.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              Seeking PhD & Research positions | Available 2026
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <a href={`mailto:${cvData.contact.email}`} className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl transition-all shadow-lg shadow-slate-900/20 text-sm font-medium group">
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                {cvData.contact.email}
              </a>
              <a href={`tel:${cvData.contact.phone}`} className="flex items-center gap-2.5 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 transition-all shadow-sm text-sm font-medium">
                <Phone className="w-4 h-4 text-slate-400" />
                {cvData.contact.phone}
              </a>
              <a href={`https://linkedin.com/in/${cvData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-2xl border border-slate-200 transition-all shadow-sm text-sm font-medium hover:border-blue-200 hover:text-blue-700 group">
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Tabs Navigation */}
        <div className="mb-12 sticky top-6 z-30 flex justify-center w-full px-4 sm:px-0">
          <div className="relative max-w-full group">
            {/* Left fade/button */}
            <AnimatePresence>
              {canScrollLeft && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-40 rounded-l-full pointer-events-none hidden md:flex items-center pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button
                    onClick={(e) => { e.preventDefault(); scrollMenu('left'); }}
                    className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 hover:scale-110 pointer-events-auto backdrop-blur-sm transition-all shadow-lg"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="bg-slate-900/90 backdrop-blur-xl rounded-full p-1.5 shadow-xl shadow-slate-900/10 border border-slate-800 flex overflow-x-auto hide-scrollbar gap-1 w-full max-w-[88vw] md:max-w-4xl snap-x scroll-smooth relative z-20"
            >
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      snap-start relative flex items-center gap-2 py-2.5 px-5 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap shrink-0
                      ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_16px_rgba(37,99,235,0.6)] border border-blue-400/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right fade/button */}
            <AnimatePresence>
              {canScrollRight && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-40 rounded-r-full pointer-events-none hidden md:flex items-center justify-end pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button
                    onClick={(e) => { e.preventDefault(); scrollMenu('right'); }}
                    className="p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 hover:scale-110 pointer-events-auto backdrop-blur-sm transition-all shadow-lg"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-14 relative overflow-hidden"
            >
              {/* Subtle background graphic for content area */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2"></div>

              {/* ABOUT TAB */}
              {activeTab === 'about' && (
                <div className="max-w-4xl">
                  <SectionHeading title="Professional Summary" icon={User} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-50 border-l-4 border-teal-500 p-6 md:p-8 rounded-r-2xl text-slate-700 font-medium italic shadow-sm mb-12 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: cvData.about }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { icon: Sprout, title: "Wet-Lab Expertise", desc: ["Molecular diagnostics & PCR", "SSR genotyping & MAS", "Biochemical stress screening"] },
                      { icon: Dna, title: "Computational Biology", desc: ["Genome-wide & synteny mapping", "Protein structure & dynamics", "Phylogenomics & evolution"] },
                      { icon: Leaf, title: "Data Workflows", desc: ["R/Python pipelines", "Plant-pathogen interactions", "Stress-responsive gene discovery"] }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:bg-teal-50 hover:shadow-md hover:border-teal-200 transition-all duration-300 group"
                      >
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                          <item.icon className="w-7 h-7 text-slate-400 group-hover:text-teal-500 transition-colors group-hover:scale-110 duration-300" />
                        </div>
                        <h4 className="font-extrabold text-slate-900 mb-4 text-[19px]">{item.title}</h4>
                        <ul className="space-y-2">
                          {item.desc.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0"></div>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* EXPERIENCE TAB */}
              {activeTab === 'experience' && (
                <div>
                  <SectionHeading title="Work Experience" icon={FlaskConical} />
                  <div className="space-y-16 mt-12">
                    {cvData.experience.map((exp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group"
                      >
                        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                          {/* Left Column: Date & Location */}
                          <div className="md:w-[200px] shrink-0 md:text-right pt-2">
                            <div className="text-lg font-bold text-slate-900 mb-2">
                              {exp.period}
                            </div>
                            <div className="flex items-center md:justify-end gap-2 text-slate-400 text-sm font-medium">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Right Column: Content */}
                          <div className="flex-1 pb-4 relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute -left-5 top-4 bottom-0 w-px bg-slate-200 group-last:bg-transparent"></div>
                            {/* Timeline dot */}
                            <div className="hidden md:block absolute -left-[25px] top-3.5 w-3 h-3 rounded-full bg-slate-300 group-hover:bg-teal-500 group-hover:scale-125 transition-all duration-300"></div>

                            <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">{exp.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                              <p className="text-slate-500 font-semibold text-lg">{exp.organization}</p>
                              {exp.certificateUrl && (
                                <a
                                  href={exp.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-lg text-xs font-bold hover:bg-teal-100 transition-colors"
                                >
                                  <FileText className="w-3 h-3" />
                                  View PDF
                                </a>
                              )}
                            </div>

                            <div className="space-y-6">
                              {(exp.supervisor || exp.thesis) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {exp.supervisor && (
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <User className="w-5 h-5 text-slate-400" />
                                      </div>
                                      <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Supervisor</div>
                                        {(exp as any).supervisorUrl ? (
                                          <a href={(exp as any).supervisorUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-700 hover:text-teal-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                                            {exp.supervisor}
                                          </a>
                                        ) : (
                                          <div className="text-sm font-bold text-slate-700">{exp.supervisor}</div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                  {exp.thesis && (
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <BookOpen className="w-5 h-5 text-slate-400" />
                                      </div>
                                      <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thesis</div>
                                        <div className="text-sm font-bold text-slate-700">{exp.thesis}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {exp.projects ? (
                                <div className="space-y-8">
                                  {exp.projects.map((proj, pIdx) => (
                                    <div key={pIdx} className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                                      <h4 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-3">
                                        <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
                                        {proj.name}
                                      </h4>
                                      <ul className="space-y-4">
                                        {proj.details.map((detail, dIdx) => (
                                          <li key={dIdx} className="flex items-start gap-4 text-slate-600 text-base">
                                            <ChevronRight className="w-5 h-5 text-teal-400 mt-1 shrink-0" />
                                            <span className="leading-relaxed">{detail}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-4">
                                  {exp.details?.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-4 text-slate-600 text-base">
                                      <ChevronRight className="w-5 h-5 text-teal-400 mt-1 shrink-0" />
                                      <span className="leading-relaxed">{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION TAB */}
              {activeTab === 'education' && (
                <div>
                  <SectionHeading title="Academic Background" icon={GraduationCap} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {cvData.education.map((edu, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col h-full hover:bg-slate-50 hover:shadow-md hover:border-teal-200 transition-all duration-500 group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        <div className="text-xs font-bold text-teal-700 mb-6 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full w-max shadow-sm tracking-wide">{edu.period}</div>
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-teal-700 transition-colors">{edu.degree}</h3>
                        <p className="text-slate-600 font-medium mb-8 flex-1 text-lg flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-slate-400 shrink-0" />
                          {(edu as any).institutionUrl ? (
                            <a href={(edu as any).institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded">
                              {edu.institution}
                            </a>
                          ) : (
                            <span>{edu.institution}</span>
                          )}
                        </p>

                        {(edu as any).thesis && (
                          <div className="mb-8 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Thesis Topic</span>
                            <p className="text-slate-700 text-sm font-medium leading-relaxed">{(edu as any).thesis}</p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="bg-slate-800 text-white px-4 py-1.5 rounded-xl text-sm font-bold shadow-md">
                            CGPA: {edu.cgpa}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* PUBLICATIONS TAB */}
              {activeTab === 'publications' && (
                <div>
                  <SectionHeading title="Research Publications" icon={FileSearch} />
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-4 px-6 py-4 bg-teal-50 text-teal-700 rounded-2xl text-lg font-bold border border-teal-100 shadow-sm">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <FileText className="w-5 h-5 text-teal-500" />
                      </div>
                      {cvData.publications.summary}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {[
                      { title: "Submitted / Under Review", items: cvData.publications.submitted },
                      { title: "Published / Accepted", items: cvData.publications.published },
                      { title: "Review Articles", items: cvData.publications.reviews },
                      { title: "Conference Abstracts", items: cvData.publications.conferences }
                    ].map((group, gIdx) => (
                      <motion.div
                        key={gIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: gIdx * 0.1 }}
                      >
                        <h3 className="text-xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                          <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
                          {group.title}
                        </h3>
                        <ul className="space-y-6">
                          {group.items.map((pub: any, idx) => (
                            <li key={idx} className="flex flex-col gap-3 group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-teal-100 transition-all duration-300">
                              <div className="flex items-start gap-4 text-slate-600 text-base leading-relaxed">
                                <div className="mt-1 w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:bg-teal-50 group-hover:border-teal-100 transition-all duration-300">
                                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                                </div>
                                <span dangerouslySetInnerHTML={{ __html: (typeof pub === 'string' ? pub : pub.text).replace(/Ali, S\./g, '<strong class="text-slate-900 font-bold">Ali, S.</strong>') }} />
                              </div>
                              {pub.pdfUrl && (
                                <div className="ml-12">
                                  <a
                                    href={pub.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-50 border border-teal-100 text-teal-700 rounded-lg text-xs font-bold hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    View PDF Attachment
                                  </a>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div>
                  <SectionHeading title="Technical Skills" icon={Binary} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {cvData.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-100 transition-all duration-500"
                      >
                        <h3 className="text-xs font-black text-teal-500 mb-6 uppercase tracking-[0.2em]">{skill.category}</h3>
                        <ul className="space-y-3">
                          {(Array.isArray(skill.details) ? skill.details : [skill.details]).map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-slate-700 text-base font-medium">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></div>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* COURSES TAB */}
              {activeTab === 'courses' && (
                <div>
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <Library className="w-6 h-6 text-slate-400" />
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Completed Courses</h3>
                    </div>
                    <div className="bg-slate-900 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg shadow-slate-900/20">
                      {cvData.courses.length} Total
                    </div>
                  </div>

                  <div className="space-y-10">
                    {Object.entries(
                      cvData.courses.reduce((acc, course) => {
                        const spec = (course as any).spec || 'Independent Coursework';
                        if (!acc[spec]) acc[spec] = [];
                        acc[spec].push(course);
                        return acc;
                      }, {} as Record<string, typeof cvData.courses>)
                    ).map(([spec, courses], specIdx) => (
                      <motion.div
                        key={specIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: specIdx * 0.1 }}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                      >
                        <div className={`px-6 py-4 border-b flex items-center justify-between ${getSpecColor(spec).split(' ')[1]} ${getSpecColor(spec).split(' ')[0]}`}>
                          <h4 className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                            <Library className="w-4 h-4" />
                            {spec}
                          </h4>
                          <span className="text-xs font-bold px-2 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm">
                            {courses.length} Courses
                          </span>
                        </div>
                        <div className="divide-y divide-slate-100">
                          {courses.map((course, idx) => (
                            <div key={idx} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors group">
                              <div className="flex-1">
                                <h5 className="font-bold text-slate-900 text-base mb-1 group-hover:text-teal-600 transition-colors">{course.name}</h5>
                                <div className="flex items-center gap-3 text-sm text-slate-500">
                                  <span className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                                    {course.provider}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 sm:justify-end">
                                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">
                                  {(course as any).grade || 'Completed'}
                                </span>
                                {course.certificateUrl && course.certificateUrl !== '#' && (
                                  <a
                                    href={course.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-50 border border-teal-100 text-teal-700 rounded-lg text-xs font-bold hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all shadow-sm"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    PDF Certificate
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* HONORS TAB */}
              {activeTab === 'honors' && (
                <div className="space-y-20">
                  <div>
                    <SectionHeading title="Honors & Fellowships" icon={Trophy} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      {[...cvData.honors, ...cvData.fellowships].map((item: any, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex gap-6 p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-100 transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                            <Award className="w-7 h-7 text-teal-500" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between gap-4 mb-1">
                              <h4 className="font-extrabold text-slate-900 text-xl">{item.title}</h4>
                              {item.certificateUrl && (
                                <a
                                  href={item.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="shrink-0 p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-teal-600 hover:border-teal-100 transition-all shadow-sm"
                                  title="View PDF"
                                >
                                  <FileText className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-slate-500 font-semibold text-base">{item.organization}</p>
                            <div className="text-xs font-black text-slate-400 mt-3 uppercase tracking-widest">{item.period}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <SectionHeading title="Certifications" icon={ShieldCheck} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {cvData.certifications.map((cert: any, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -5 }}
                          className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-100 transition-all duration-500 flex flex-col h-full group"
                        >
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <h4 className="font-bold text-slate-900 text-lg leading-snug flex-1 group-hover:text-teal-600 transition-colors">{cert.title}</h4>
                            {cert.certificateUrl && (
                              <a
                                href={cert.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-teal-600 hover:border-teal-100 transition-all shadow-sm"
                                title="View PDF"
                              >
                                <FileText className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider truncate pr-4">{cert.organization}</span>
                            <span className="shrink-0 font-black text-slate-900 text-xs bg-slate-100 px-3 py-1 rounded-lg">{cert.period}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Service Section */}
                  {cvData.professionalService && cvData.professionalService.length > 0 && (
                    <div className="pt-10 border-t border-slate-200 mt-12">
                      <SectionHeading title="Professional Service & Peer Review" icon={ShieldCheck} />
                      <div className="grid grid-cols-1 gap-4 mt-8">
                        {cvData.professionalService.map((service, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.01 }}
                            className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-teal-50 transition-colors duration-300">
                              <ShieldCheck className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                            </div>
                            <span dangerouslySetInnerHTML={{ __html: service.replace(/Ad-hoc Reviewer,/g, '<strong class="text-slate-900 font-bold">Ad-hoc Reviewer,</strong>') }} className="text-slate-700 font-medium leading-relaxed mt-2" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* REFERENCES TAB */}
              {activeTab === 'references' && (
                <div>
                  <SectionHeading title="Professional References" icon={Briefcase} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {cvData.recommendations.map((rec: any, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-teal-100 transition-all duration-500 relative overflow-hidden group"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/20 rounded-bl-full -z-10 opacity-50 group-hover:bg-teal-50 transition-colors duration-500"></div>
                        <div className="w-14 h-14 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm mb-6 group-hover:border-teal-200 transition-all duration-300">
                          <User className="w-6 h-6 text-slate-400 group-hover:text-teal-500 transition-colors" />
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-snug">{rec.name}</h3>
                        <p className="text-sm font-bold text-teal-600 mb-1">{rec.title}</p>
                        <p className="text-sm font-medium text-slate-500 mb-6">{rec.organization}</p>

                        <div className="pt-6 border-t border-slate-200/60 flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-bold text-slate-700">{rec.relationship}</span>
                          </div>
                          <div className="flex items-center gap-3 bg-slate-100/50 p-3 rounded-xl border border-slate-200/50 mt-2">
                            <Mail className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium text-slate-500 italic">Contact info available upon request</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* RESEARCH GALLERY TAB */}
              {activeTab === 'gallery' && (
                <div>
                  {/* Header with count */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <Image className="w-6 h-6 text-slate-400" />
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Research Gallery</h3>
                    </div>
                    <div className="bg-slate-900 text-white px-5 py-2 rounded-2xl text-sm font-bold shadow-lg shadow-slate-900/20">
                      {cvData.gallery.reduce((sum, cat) => sum + cat.figures.length, 0)} Figures
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-slate-500 mb-8 text-base font-medium leading-relaxed max-w-3xl">
                    Publication-quality visualizations generated with <strong className="text-slate-700">R</strong> and <strong className="text-slate-700">Python</strong>,
                    showcasing analytical skills across bioinformatics, genomics, machine learning, and field research.
                  </p>

                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    <button
                      onClick={() => setGalleryCategory('All')}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${galleryCategory === 'All'
                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20'
                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300'
                        }`}
                    >
                      All
                    </button>
                    {cvData.gallery.map((cat) => {
                      const CatIcon = GALLERY_CATEGORY_ICONS[cat.icon] || Layers;
                      return (
                        <button
                          key={cat.category}
                          onClick={() => setGalleryCategory(cat.category)}
                          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 border flex items-center gap-1.5 ${galleryCategory === cat.category
                            ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20'
                            : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300'
                            }`}
                        >
                          <CatIcon className="w-3.5 h-3.5" />
                          {cat.category}
                        </button>
                      );
                    })}
                  </div>

                  {/* Gallery Content */}
                  <div className="space-y-14">
                    {cvData.gallery
                      .filter(cat => galleryCategory === 'All' || cat.category === galleryCategory)
                      .map((cat, catIdx) => {
                        const CatIcon = GALLERY_CATEGORY_ICONS[cat.icon] || Layers;
                        const gradientClass = GALLERY_CATEGORY_COLORS[cat.category] || 'from-slate-500 to-slate-600';
                        return (
                          <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIdx * 0.08 }}
                          >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-md`}>
                                <CatIcon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="text-lg font-extrabold text-slate-900">{cat.category}</h4>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{cat.figures.length} Figures</p>
                              </div>
                            </div>

                            {/* Figures Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                              {cat.figures.map((fig, figIdx) => (
                                <motion.div
                                  key={fig.id}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: catIdx * 0.08 + figIdx * 0.05 }}
                                  whileHover={{ y: -6, scale: 1.02 }}
                                  onClick={() => setLightboxImage(fig)}
                                  className="group cursor-pointer bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-500"
                                >
                                  {/* Image Container */}
                                  <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden">
                                    <img
                                      src={`${import.meta.env.BASE_URL}gallery/${fig.file}`}
                                      alt={fig.title}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                      <span className="text-white text-xs font-bold flex items-center gap-1.5">
                                        <Search className="w-3.5 h-3.5" />
                                        Click to expand
                                      </span>
                                    </div>
                                    {/* Figure number badge */}
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm border border-white/50">
                                      Fig. {fig.id}
                                    </div>
                                  </div>

                                  {/* Card Body */}
                                  <div className="p-4">
                                    <h5 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug group-hover:text-teal-600 transition-colors">{fig.title}</h5>
                                    <p className="text-slate-500 text-xs leading-relaxed mb-3">{fig.desc}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {fig.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 border border-slate-100">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-slate-900/95 backdrop-blur-sm p-4 sm:p-8 overflow-y-auto"
            onClick={() => setLightboxImage(null)}
          >
            <div className="min-h-full flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                className="relative w-full max-w-5xl bg-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col overflow-hidden pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between bg-slate-900 px-6 py-4 border-b border-slate-800">
                  <h4 className="text-white font-bold text-lg">{lightboxImage.title}</h4>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Viewer relative max-h */}
                <div className="w-full bg-slate-100 flex items-center justify-center border-b border-slate-200">
                  {/* Force image to scale correctly using absolute positioning if needed, or flex */}
                  <img
                    src={`${import.meta.env.BASE_URL}gallery/${lightboxImage.file}`}
                    alt={lightboxImage.title}
                    className="max-w-full"
                    style={{ maxHeight: 'calc(80vh - 160px)', objectFit: 'contain' }}
                  />
                </div>

                {/* Legend */}
                <div className="w-full bg-white p-6 sm:p-8">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">{lightboxImage.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {lightboxImage.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-100 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer className="mt-16 py-8 border-t border-slate-200 bg-slate-50 text-center relative z-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 {cvData.name}. All rights reserved.
          </p>
          <span className="text-xs text-slate-400 font-medium">Last updated: February 28, 2026</span>
        </div>
      </footer>
    </div>
  );
}

