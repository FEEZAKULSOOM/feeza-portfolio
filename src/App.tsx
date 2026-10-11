/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Award,
  GraduationCap,
  Code2,
  Database,
  Server,
  Terminal,
  Check,
  Copy,
  Sparkles,
  ChevronRight,
  MapPin,
  Calendar,
  Send,
  Eye,
  X,
  ShieldCheck,
  Globe,
  Boxes,
  Lock,
  Cpu,
  Home,
  Briefcase
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Production Full-Stack' | 'In Progress / Active R&D';
  statusColor: 'amber' | 'indigo';
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  architecture: string;
  links: {
    github?: string;
    live?: string;
    admin?: string;
  };
}

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'education' | 'skills' | 'projects' | 'contact'>('hero');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imgError, setImgError] = useState(false);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 280;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId as any);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('feezakulsoom42@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 600);
  };

  const projects: Project[] = [
    {
      id: 'feroza',
      title: 'Feroza',
      subtitle: 'Scalable Multi-Vendor E-Commerce Platform',
      category: 'E-Commerce / Distributed Architecture',
      status: 'Production Full-Stack',
      statusColor: 'amber',
      description: 'Engineered a resilient multi-tenant retail ecosystem with decoupled storefront and merchant admin backoffices.',
      highlights: [
        'Architected a decoupled dual-portal full-stack application isolating merchant workflows from consumer storefront traffic, sustaining concurrent user sessions with zero cross-portal state leakage.',
        'Accelerated catalog media ingestion latency by 45% while eliminating server disk I/O bottlenecks by engineering a memory-buffered streaming upload pipeline using Multer and Cloudinary CDN.',
        'Decreased complex multi-attribute database query response times by 35% by implementing indexed MongoDB aggregation pipelines and securing endpoints with stateless JWT authentication and bcrypt hashing.'
      ],
      technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary', 'Multer', 'Tailwind CSS', 'JWT Auth'],
      metrics: [
        { label: 'Catalog Ingestion Speedup', value: '+45%' },
        { label: 'Aggregation Query Latency', value: '-35%' },
        { label: 'Cross-Portal State Isolation', value: '100%' }
      ],
      architecture: 'Dual-portal architecture decoupling customer browsing from vendor admin management. Features asynchronous media streaming to Cloudinary via RAM buffers and compound indexes in MongoDB.',
      links: {
        live: 'https://feroza-ecommerce-app-frontend.onrender.com/',
        admin: 'https://feroza-ecommerce-app-admin.onrender.com/',
        github: 'https://github.com/FEEZAKULSOOM/feroza-ecommerce-app'
      }
    },
    {
      id: 'habitatx',
      title: 'HabitatX',
      subtitle: 'Real Estate & Property Rental Platform',
      category: 'Real Estate / Search & Geo Indexing',
      status: 'Production Full-Stack',
      statusColor: 'amber',
      description: 'Comprehensive property listing and rental management platform with compound indexing and hybrid token authorization.',
      highlights: [
        'Accelerated property discovery query response times by 40% across high-dimensional filtering parameters (pricing, category, location) by structuring compound MongoDB indexes and sanitizing query pipelines.',
        'Fortified platform route security by bridging client-side Firebase Authentication tokens with custom Express middleware authorization, eliminating unauthorized resource mutations across tenant and landlord accounts.',
        'Reduced redundant API network roundtrips by 60% and achieved instantaneous UI transitions by deploying TanStack Query client-side cache hydration and automated background revalidation.'
      ],
      technologies: ['React 19', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Firebase Auth', 'TanStack Query', 'Tailwind CSS', 'Axios'],
      metrics: [
        { label: 'Query Search Response', value: '-40%' },
        { label: 'Network Roundtrips Cut', value: '-60%' },
        { label: 'Role-Based Endpoint Shield', value: '100%' }
      ],
      architecture: 'Multi-tiered RESTful architecture pairing TanStack Query client cache invalidation with Firebase Auth bearer tokens validated server-side by custom Express JWT/Firebase Admin middleware.',
      links: {
        live: 'https://habitatx-nine.vercel.app/',
        github: 'https://github.com/FEEZAKULSOOM/habitatx'
      }
    },
    {
      id: 'geomorph',
      title: 'GeoMorph AI',
      subtitle: 'Procedural 3D Spatial Engine',
      category: 'Spatial Graphics / Generative Geometry',
      status: 'In Progress / Active R&D',
      statusColor: 'indigo',
      description: 'Experimental procedural spatial exploration engine generating real-time browser meshes with runtime schema validation.',
      highlights: [
        'Elevated browser 3D rendering framerates from 22 FPS to a stable 60 FPS by designing a procedural wall-slicing algorithm in Three.js that isolates apertures without heavy Constructive Solid Geometry (CSG) overhead.',
        'Eliminated runtime spatial generation crashes by 100% by enforcing strict type-safe schema validation with Zod to parse, sanitize, and validate generative coordinate payloads from the Google Gen AI SDK (Gemini Pro).',
        'Enabled seamless first-person spatial walkthroughs with real-time collision detection and fluid physics by engineering browser navigation via Three.js PointerLockControls and custom bounding-box traversal.'
      ],
      technologies: ['TypeScript', 'Three.js (In Progress)', 'Google Gen AI SDK', 'Zod', 'Node.js', 'Vite'],
      metrics: [
        { label: 'Browser Render Framerate', value: '60 FPS' },
        { label: 'Runtime Parsing Faults', value: '0%' },
        { label: 'Memory CSG Overhead', value: '-70%' }
      ],
      architecture: 'Web-first spatial rendering pipeline bypassing costly CSG booleans via coordinate slicing, enforcing zero-crash generative geometry with strict Zod contracts and Gemini Pro AI coordinates.',
      links: {
        github: 'https://github.com/FEEZAKULSOOM'
      }
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#07080b] text-zinc-300 selection:bg-amber-500/30 selection:text-amber-200 text-sm antialiased overflow-x-hidden font-sans">
      
      {/* Background Atmosphere & Monospace Code Stream */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.38, 0.52, 0.38] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute -top-32 right-[-5%] w-[380px] sm:w-[800px] h-[380px] 
  sm:h-[800px] rounded-full bg-gradient-to-br from-amber-400/35 
  via-yellow-500/20 to-transparent blur-[60px] sm:blur-[160px] transform-gpu pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[42%] left-[-10%] w-[320px] sm:w-[680px] h-[320px]
         sm:h-[680px] rounded-full bg-amber-500/20 
        blur-[50px] sm:blur-[150px] transform-gpu pointer-events-none"
        />

        <div className="absolute inset-0 select-none pointer-events-none overflow-hidden font-mono text-[11px] leading-relaxed text-amber-300/[0.045] flex flex-col justify-around p-8 sm:p-14">
          <div className="space-y-1">
            <p className="text-amber-400/[0.09]">// Kernel Initialization</p>
            <p>console.log("Hello World! Initializing Feeza Kulsoom systems architecture...");</p>
            <p>const cluster = require('cluster'); const express = require('express');</p>
            <p>const db = await mongoose.connect(process.env.MONGODB_URI);</p>
          </div>
          <div className="space-y-1 pl-12 sm:pl-32">
            <p className="text-amber-400/[0.09]">// Indexed MongoDB Aggregation Flow</p>
            <p>const pipeline = [ &#123; $match: &#123; category: 'ecommerce', active: true &#125; &#125;, &#123; $sort: &#123; latency: -1 &#125; &#125; ];</p>
            <p>const results = await db.collection('orders').aggregate(pipeline).toArray();</p>
          </div>
          <div className="space-y-1 pl-4 sm:pl-16">
            <p className="text-amber-400/[0.09]">// State Cache Hydration Engine</p>
            <p>export const useHydratedTenant = (id) =&gt; useQuery(['tenant', id], fetchTenantState);</p>
            <p>while (status === 200) &#123; streamBuffer.pipe(cloudinary.uploader.upload_stream()); &#125;</p>
          </div>
          <div className="space-y-1 pl-20 sm:pl-48">
            <p className="text-amber-400/[0.09]">// Procedural 3D Spatial Mesh Generation</p>
            <p>const leftBox = new THREE.BoxGeometry(spec.offset, spec.height, spec.depth);</p>
            <p>console.log("Status: 60 FPS Procedural Mesh Rendered with zero CSG overhead.");</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#07080b]/30 via-transparent to-[#07080b]/90" />
      </div>

      {/* Top Header */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-zinc-800/80 bg-[#07080b]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/30 via-zinc-900 to-black border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-xs shadow-[0_0_18px_rgba(245,158,11,0.35)] group-hover:border-amber-400 transition-all">
              FK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Feeza Kulsoom
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
                Full-Stack Engineer
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-[#181a20] text-zinc-200 border border-zinc-700/80 hover:border-amber-400 hover:text-amber-400 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-44">
        
        {/* HERO SECTION */}
        <section id="hero" className="pt-10 sm:pt-16 pb-12 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a20] border border-amber-500/40 text-[11px] text-zinc-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Software Engineering Internships</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Transforming Ideas Into Robust Web Systems{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.45)]">
                  That Scale
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl font-normal">
                Software Engineering student specializing in production-ready full-stack applications with Node.js, Express, MongoDB, and React.
              </p>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(245,158,11,0.45)]"
                >
                  <span>Explore Featured Projects</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Centerpiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center items-center relative py-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
className="absolute w-[300px] h-[300px] rounded-full border border-amber-400/35 
shadow-[0_0_35px_rgba(245,158,11,0.25)] pointer-events-none transform-gpu"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
             className="absolute w-[260px] h-[260px] rounded-full border border-dashed
              border-amber-400/25 pointer-events-none transform-gpu"
              />

              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-b from-amber-400/50 via-zinc-800 to-black shadow-[0_0_55px_rgba(245,158,11,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#181a20] border-2 border-amber-400/60 relative flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src="/profile.png"
                      alt="Feeza Kulsoom"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#181a20] text-center">
                      <span className="text-3xl font-extrabold text-amber-400">FK</span>
                      <span className="text-[11px] text-zinc-400 mt-1">Feeza Kulsoom</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-zinc-700/80 shadow-lg backdrop-blur-md"
              >
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-white">Node.js</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0], rotate: [0, -1.5, 1.5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-2 right-2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-zinc-700/80 shadow-lg backdrop-blur-md"
              >
                <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                <span className="text-[11px] font-semibold text-white">Express</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 1.2, -1.2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute top-[48%] -left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-cyan-500/40 shadow-lg backdrop-blur-md"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-semibold text-white">React 19</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -1.2, 1.2, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute top-[48%] -right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-emerald-500/40 shadow-lg backdrop-blur-md"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-white">MongoDB</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0], rotate: [0, 1.5, -1.5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute bottom-2 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-zinc-700/80 shadow-lg backdrop-blur-md"
              >
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-semibold text-white">Tailwind</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0], rotate: [0, -1.5, 1.5, 0] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                className="absolute bottom-2 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181a20]/95 border border-amber-500/40 shadow-lg backdrop-blur-md"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-semibold text-white">Firebase</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Metrics Strip in #181a20 */}
          <div className="mt-12 mb-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {[
              {
                icon: <GraduationCap className="w-4 h-4 text-amber-300" />,
                metric: '4.00 / 4.00',
                label: 'Cumulative GPA • 5th Semester'
              },
              {
                icon: <Boxes className="w-4 h-4 text-amber-300" />,
                metric: '2+ Full-Stack',
                label: 'Deployed Production Platforms'
              },
              {
                icon: <Award className="w-4 h-4 text-amber-300" />,
                metric: '100%',
                label: 'Academic Merit & Honors (CM & PM Awards)'
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, borderColor: 'rgba(245, 158, 11, 0.45)' }}
                className="rounded-2xl p-4 bg-[#181a20] border border-zinc-800/80 flex items-center gap-3.5 transition-all shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <div className="text-base font-bold text-white font-mono">
                    {card.metric}
                  </div>
                  <p className="text-[11px] text-zinc-400 font-medium">
                    {card.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 1: ACADEMIC EXCELLENCE */}
        <section id="education" className="py-14 scroll-mt-24 border-t border-zinc-800/60">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Track</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Academic Excellence & Institutional Merit
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 rounded-2xl p-6 bg-[#181a20] border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-500/30">
                    BS SE • 5th Semester
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>Oct 2024 – Oct 2028</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  The University of Azad Jammu and Kashmir, Muzaffarabad
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mt-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>Muzaffarabad / Mirpur, AJK, Pakistan</span>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-black/40 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Current Standing:</span>
                  <span className="text-sm font-bold text-white font-mono">
                    CGPA: 4.00 <span className="text-amber-400">/ 4.00</span>
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-semibold text-zinc-400 block mb-2 uppercase tracking-wider">
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Data Structures & Algorithms',
                      'Relational Database Systems (SQL)',
                      'Object-Oriented Software Engineering',
                      'Computer Networks',
                      'Operating Systems',
                      'Web Technologies'
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-5 bg-[#181a20] border border-zinc-800/80"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    State Merit
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-3">
                  Honhaar Merit Scholarship
                </h4>
                <p className="text-[11px] text-amber-400/90 mt-0.5">
                  Chief Minister Punjab Undergraduate Program
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                  Conferred in recognition of top-tier institutional academic standing and engineering excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-5 bg-[#181a20] border border-zinc-800/80"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    2025 Award
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-3">
                  Prime Minister National Laptop Scheme
                </h4>
                <p className="text-[11px] text-amber-400/90 mt-0.5">
                  Exceptional Academic Performance Awardee
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                  Conferred on competitive national merit for outstanding scholarly performance in software engineering.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TECH STACK */}
        <section id="skills" className="py-14 scroll-mt-24 border-t border-zinc-800/60">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>Competencies</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Core Tech Stack & Systems Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Code2 className="w-4 h-4 text-cyan-400" />,
                title: 'Frontend',
                skills: ['React 19', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Vite']
              },
              {
                icon: <Server className="w-4 h-4 text-amber-400" />,
                title: 'Backend',
                skills: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets', 'JWT Auth', 'Bcrypt Security']
              },
              {
                icon: <Database className="w-4 h-4 text-emerald-400" />,
                title: 'Databases & Cloud',
                skills: ['MongoDB Atlas', 'Mongoose ORM', 'Firebase Auth', 'Cloudinary CDN', 'Multer Buffers', 'SQL (Relational)']
              },
              {
                icon: <Terminal className="w-4 h-4 text-sky-400" />,
                title: 'Tools & Practices',
                skills: ['Git & GitHub', 'Postman Testing', 'Linux / Bash', 'Render PaaS', 'Vercel Deployment', 'Three.js (In Progress)']
              }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-4 rounded-2xl bg-[#181a20] border border-zinc-800/80"
              >
                <div className="flex items-center gap-2 mb-3.5 text-white font-semibold text-xs">
                  {group.icon}
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-medium text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FEATURED PROJECTS */}
        <section id="projects" className="py-14 scroll-mt-24 border-t border-zinc-800/60">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Boxes className="w-3.5 h-3.5" />
              <span>Work</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ borderColor: 'rgba(245, 158, 11, 0.45)' }}
                className="rounded-2xl p-6 bg-[#181a20] border border-zinc-800/80 shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          project.statusColor === 'amber'
                            ? 'bg-amber-400/10 text-amber-300 border-amber-500/30'
                            : 'bg-indigo-400/10 text-indigo-300 border-indigo-500/30'
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 shadow-sm"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.links.admin && (
                      <a
                        href={project.links.admin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 border border-zinc-700 hover:border-amber-400 text-zinc-200"
                      >
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>Admin</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300"
                      >
                        <Github className="w-3 h-3" />
                        <span>Repo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                    >
                      <Eye className="w-3 h-3 text-zinc-400" />
                      <span>Spec</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-zinc-800/70 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400">{m.label}</span>
                      <span className="text-xs font-bold text-amber-400 font-mono">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: ELEVATED BENTO CONTACT LAYOUT */}
        <section id="contact" className="py-14 scroll-mt-24 border-t border-zinc-800/60">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Connect</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get In Touch & Career Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Bento Connect Dashboard */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Direct Mail Card */}
              <div className="rounded-2xl p-5 bg-[#181a20] border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold tracking-wider block">Email Address</span>
                    <a
                      href="mailto:feezakulsoom42@gmail.com"
                      className="text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      feezakulsoom42@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-amber-400 transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Status Meta Card */}
              <div className="rounded-2xl p-5 bg-[#181a20] border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Muzaffarabad, AJK, Pakistan (Open to Remote)</span>
                </div>
              </div>

              {/* Quick Connect Chips */}
              <div className="rounded-2xl p-5 bg-[#181a20] border border-zinc-800/80">
                <span className="text-[10px] text-zinc-400 uppercase font-semibold tracking-wider block mb-3">Professional Profiles</span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/FEEZAKULSOOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/feeza-kulsoom-82a801313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Message Console */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-6 bg-[#181a20] border border-zinc-800/90 shadow-lg">
                <h3 className="text-base font-bold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-zinc-400 mb-5">
                  Have an internship opening, software project, or technical question? Drop your details below.
                </p>

                {formSubmitted ? (
                  <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                    <Check className="w-6 h-6 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">Inquiry Received</h4>
                    <p className="text-xs text-zinc-300">
                      Thank you for reaching out! Feeza will review your message and reply promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Vance"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-400 mb-1">Subject / Opportunity</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Software Engineering Internship"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-400 mb-1">Message Content *</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about the role, team stack, or project goals..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-zinc-700/80 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-950 hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      {formLoading ? <span>Sending...</span> : <><span>Send Message</span><Send className="w-3.5 h-3.5" /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING BOTTOM DOCK: SUBTLE AMBER ACTIVE STATES + LUMINOUS AMBER EMAIL */}
      <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center items-center pointer-events-none px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#181a20]/95 border border-zinc-700/80 shadow-[0_20px_45px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
        >
          {/* Home */}
          <button
            onClick={() => scrollTo('hero')}
            aria-label="Home"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeSection === 'hero'
                ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60'
            }`}
          >
            <Home className="w-4 h-4" />
          </button>

          {/* Education */}
          <button
            onClick={() => scrollTo('education')}
            aria-label="Education & Merit"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeSection === 'education'
                ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
          </button>

          {/* Skills */}
          <button
            onClick={() => scrollTo('skills')}
            aria-label="Tech Stack"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeSection === 'skills'
                ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60'
            }`}
          >
            <Code2 className="w-4 h-4" />
          </button>

          {/* Projects */}
          <button
            onClick={() => scrollTo('projects')}
            aria-label="Featured Projects"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeSection === 'projects'
                ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/60'
            }`}
          >
            <Briefcase className="w-4 h-4" />
          </button>

          {/* Email Button (Always Prominent Solid Gold) */}
          <button
            onClick={() => scrollTo('contact')}
            aria-label="Contact Inquiry"
            className="w-9 h-9 ml-1 rounded-full flex items-center justify-center bg-amber-400 text-zinc-950 hover:bg-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.6)] transition-all"
          >
            <Mail className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 bg-[#050608] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-300">Feeza Kulsoom</span>
            <span>•</span>
            <span>Full-Stack Engineer</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/FEEZAKULSOOM" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/feeza-kulsoom-82a801313" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Resume PDF</a>
          </div>
        </div>
      </footer>

      {/* SPEC MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#181a20] border border-zinc-700 p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-500/30">
                    {selectedProject.status}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {selectedProject.title} — System Architecture
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-zinc-800">
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-semibold hover:bg-zinc-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}