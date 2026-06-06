import { motion } from 'motion/react';
import { MessageSquare, Edit3, CheckCircle, Package2, ArrowRight, Star, Sparkles, Clock, Send, Mail } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Chatbox } from '../components/Chatbox';
import heroImage1 from "../assets/moonagephotos/hero1.png";
import heroImage2 from "../assets/moonagephotos/hero2.png";
import studioImage from "../assets/moonagephotos/studio.png";
import review1 from "../assets/moonagephotos/review1.jpg";
import review2 from "../assets/moonagephotos/review2.jpeg";
import review3 from "../assets/moonagephotos/review3.jpeg";
import comic1 from "../assets/moonagephotos/cases/comic1.png";
import comic2 from "../assets/moonagephotos/cases/comic2.png";
import comic3 from "../assets/moonagephotos/cases/comic3.png";
import comic4 from "../assets/moonagephotos/cases/comic4.png";
import comic5 from "../assets/moonagephotos/cases/comic5.png";
import album1 from "../assets/moonagephotos/cases/album1.png";
import pet1 from "../assets/moonagephotos/cases/pet1.png";
import character1 from "../assets/moonagephotos/cases/character1.png";
import character2 from "../assets/moonagephotos/cases/character2.png";
import character3 from "../assets/moonagephotos/cases/character3.png";
import character4 from "../assets/moonagephotos/cases/character4.png";
import character5 from "../assets/moonagephotos/cases/character5.png";
import character6 from "../assets/moonagephotos/cases/character6.png";
import character7 from "../assets/moonagephotos/cases/character7.png";
import bw1 from "../assets/moonagephotos/cases/bw1.png";
import bw2 from "../assets/moonagephotos/cases/bw2.png";
import bw3 from "../assets/moonagephotos/cases/bw3.png";
import else1 from "../assets/moonagephotos/cases/else1.png";

const CollapsibleNoteA = ({ label = "before you order", notes = [
    "cancellations are not accepted once an order has been confirmed. please make sure you are happy with your design before finalizing.",
    "some designs may be slightly adjusted or cropped to fit your specific phone model's dimensions.",
    "minor imperfections and slight color variations are normal given the handmade nature of each case.",
] }: { label?: string; notes?: string[] }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="hover:opacity-70 transition-opacity"
                style={{
                    fontFamily: 'Newsreader, serif',
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: '#526447',
                    border: '1px solid #526447',
                    borderRadius: '20px',
                    padding: '7px 20px',
                    background: 'transparent',
                    cursor: 'pointer',
                }}
            >
                {label} {open ? '↑' : '↓'}
            </button>
            {open && (
                <div
                    className="mt-4 mx-auto text-left"
                    style={{
                        maxWidth: '480px',
                        background: '#f5f4eb',
                        border: '0.5px solid #e0ddd5',
                        borderRadius: '16px',
                        padding: '16px 20px',
                        animation: 'fadeIn 0.2s ease',
                    }}
                >
                    {notes.map((note, i) => (
                        <div key={i} className="flex gap-3 mb-2">
                            <span className="text-[#b0a898] text-xs mt-0.5 shrink-0">—</span>
                            <p className="text-xs text-[#4a4438] leading-relaxed" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                                {note}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const processSteps = [
  {
    num: "step 01",
    title: "begin",
    bg: "#d4e8c8",
    body: [
      "reach out to us on instagram, facebook, or send an email with your phone model, your design idea or reference photo, and whether you want a full set or insert only. not sure yet? just describe your idea and we’ll figure it out together.",
    ],
  },
  {
    num: "step 02",
    title: "confirmation",
    bg: "#f5d0d8",
    body: [
      "once we've received your details, we'll go back and forth to nail down the design direction. we'll confirm the final price before anything goes into production.",
      "final price may vary depending on the complexity of the design.",
    ],
    note: "everything gets confirmed before anything gets made.",
  },
  {
    num: "step 03",
    title: "production",
    bg: "#f0e0a8",
    body: [
      "each piece is drawn, cut, and assembled by hand. which means every single one is a little different.",
      "orders can take up to 2 weeks, but are often ready sooner. we'll keep you updated along the way.",
    ],
    note: "somewhere between started and done.",
  },
  {
    num: "step 04",
    title: "fulfillment",
    bg: "#e0ded6",
    body: [
      "once your order is ready, we'll arrange how to get it to you. options include meetup (metro manila), pickup, or delivery via j&t or similar.",
      "delivery fees are shouldered by the buyer. we'll confirm the most convenient option for you.",
    ],
    note: "it'll find its way to you.",
  },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
} as const;

export const Inserts = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null)
    const [orderModalOpen, setOrderModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [archiveScrolled, setArchiveScrolled] = useState(false);
    const [isChatClicked, setIsChatClicked] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setLightboxImg(null);
                setActiveStep(null);
                setOrderModalOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <div className="pt-20">
            {isChatClicked && <Chatbox setIsChatClicked={setIsChatClicked} />}

            {!isChatClicked &&
                <button className="z-[9999] w-16 h-16 md:w-20 md:h-20 fixed right-6 bottom-6 md:right-16 md:bottom-16 rounded-full bg-amber-50/70 border-solid border-4 border-primary flex justify-center items-center hover:scale-110 transition-all duration-200" onClick={() => { setIsChatClicked(true); console.log("clicked") }}><Mail size={28} className='color-primary' />
                </button>}
            {/* Hero Section */}
            <section className="relative min-h-[80vh] pt-20 pb-20 px-8 flex items-center overflow-hidden" style={{ backgroundColor: '#fff9ec' }}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-start">                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative z-10"
                    >
                       <h1 className="font-headline text-6xl md:text-7xl text-on-surface leading-[0.95] mb-6">
    every piece starts as a{" "}
    <span className="italic text-primary">daydream</span>
</h1>
                        <p className="text-on-surface-variant text-lg max-w-md mb-8 font-body leading-relaxed text-justify">
                            a growing archive of handmade and handpicked things. phone cases for now, with more finding its way into this space.
                        </p>
                        <div className="flex flex-row gap-4 items-center mb-8">
                            <button onClick={() => setOrderModalOpen(true)} className="bg-primary text-on-primary px-5 py-2.5 md:px-7 md:py-3 rounded-lg text-sm md:text-base font-medium shadow-lg hover:translate-y-[-2px] transition-all active:scale-95 whitespace-nowrap">
                                order now
                            </button>
                            <button className="text-tertiary font-script text-lg md:text-xl px-2 py-2 flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap" onClick={() => { if (sectionRef.current) sectionRef.current.scrollIntoView({ behavior: 'smooth' }); }}>
                                view the archive <ArrowRight size={28} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Collage */}
<motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
    className="relative"
>
    <div className="relative w-full aspect-square max-w-md mx-auto">

        {/* HERO 2 (RIGHT - BACK) */}
        <div className="absolute top-0 right-0 w-2/3 aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden rotate-2 shadow-md border-[8px] border-white z-10">
            <img
                className="w-full h-full object-cover"
                src={heroImage2}
                alt="hero image 2"
            />
        </div>

        {/* HERO 1 (LEFT - FRONT) */}
        <div className="absolute top-6 left-0 w-2/3 aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden rotate-[-4deg] shadow-lg border-[8px] border-white z-20">
            <img
                className="w-full h-full object-cover"
                src={heroImage1}
                alt="hero image 1"
            />
        </div>

        {/* WASHI TAPE */}
        <div className="absolute -top-4 right-10 w-24 h-6 washi-tape bg-secondary-container/60 rotate-12 z-30"></div>

        {/* DECOR */}
        <Star className="absolute top-1/4 -left-6 text-secondary animate-pulse z-30" size={48} fill="currentColor" />
        <Sparkles className="absolute bottom-1/4 -right-6 text-tertiary z-30" size={40} />

    </div>
</motion.div>
                </div>
            </section>

            {/* Studio Note */}
<section className="py-20 relative" style={{ backgroundColor: '#fff9ec' }}>
  <div className="max-w-3xl mx-auto px-8">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="p-8 md:p-10 rounded-[2rem] shadow-sm relative overflow-visible"
      style={{ backgroundColor: '#f9f3e6' }}
    >
      {/* washi tapes */}
      <div className="absolute -top-3 left-16 w-20 h-5 rounded-sm rotate-[-2deg] z-10" style={{ background: 'rgba(253,217,226,0.75)' }}></div>
      <div className="absolute -top-3 right-24 w-16 h-5 rounded-sm rotate-[3deg] z-10" style={{ background: 'rgba(212,232,200,0.75)' }}></div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="font-headline italic text-3xl mb-3 text-primary">a note from the studio</h2>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant text-justify">
            some things start as daydreams. this one did. the name comes from david bowie's{" "}<span className="italic">moonage daydream</span>, and he said it best.
          </p>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant italic text-justify">
            "i don't know where i'm going from here, but i promise it won't be boring."
          </p>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant text-justify">
            everything here is handmade or handpicked. more coming soon. we're glad you're here.
          </p>
          <div className="pt-1">
            <span className="font-script text-2xl text-secondary -rotate-3 inline-block">xoxo, gelene</span>
          </div>
        </div>

        <div className="relative group flex justify-center">
  <div className="relative">
    {/* washi tape */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-sm z-10" style={{ background: 'rgba(253,217,226,0.8)', transform: 'translateX(-50%) rotate(-1deg)' }}></div>

    {/* photo */}
    <div className="w-full aspect-square bg-surface-container-highest p-1 rounded-sm rotate-2 shadow-inner group-hover:rotate-0 transition-transform duration-500">
      <img
        className="w-full h-full object-cover opacity-90"
        src={studioImage}
        alt="Moonage Files studio workspace with handcrafted materials and design tools"
      />
    </div>

    {/* stickers */}
    <div className="absolute -top-5 -left-5 text-2xl">⭐</div>
    <div className="absolute -top-3 -right-4 text-xl">⚡</div>
    <div className="absolute -bottom-4 -left-3 text-base" style={{ color: '#7e535f' }}>★</div>
    <div
      className="absolute -bottom-3 -right-8 text-xs px-2 py-1 rounded-full"
      style={{ fontFamily: 'Beth Ellen, cursive', background: 'white', color: '#526447', border: '1px solid #d4e8c8', whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
    >
      handmade ✦
    </div>
  </div>
</div>
      </div>
    </motion.div>
  </div>
</section>

{/* Process Modal */}
{activeStep !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    style={{ backgroundColor: 'rgba(44,42,34,0.5)', animation: 'fadeIn 0.2s ease' }}
    onClick={() => setActiveStep(null)}
  >
    <div
      className="relative rounded-lg p-8 max-w-md w-full mx-4"
      style={{ backgroundColor: '#fbf9f2', animation: 'popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* close button */}
      <button
        onClick={() => setActiveStep(null)}
        className="absolute top-8 right-8 text-[#8a8070] hover:text-[#4a4438] text-lg leading-none"
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* top row: colored icon + step label + title */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: processSteps[activeStep].bg }}
        >
          {activeStep === 0 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#526447" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>}
          {activeStep === 1 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7e535f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4z"/></svg>}
          {activeStep === 2 && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#695f38" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
          {activeStep === 3 && <Package2 size={22} stroke="#5a574e" strokeWidth={1.7} />}
        </div>
        <div>
          <p className="text-xs text-[#8a8070] mb-0.5" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            {processSteps[activeStep].num}
          </p>
          <h3 className="text-xl text-[#2c2a22]" style={{ fontFamily: 'Newsreader, serif', fontWeight: 400 }}>
            {processSteps[activeStep].title}
          </h3>
        </div>
      </div>

      {/* body paragraphs */}
      <div className="space-y-3 mb-4">
        {processSteps[activeStep].body.map((para, i) => (
          <p key={i} className="text-sm text-[#4a4438] leading-relaxed" style={{ fontFamily: 'Work Sans, sans-serif' }}>
            {para}
          </p>
        ))}
      </div>

      {/* social links — only show on step 01 */}
      {activeStep === 0 && (
        <p
          className="text-sm leading-loose mt-2"
          style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#526447' }}
        >
          find us on{' '}
          <button
            onClick={() => window.open('https://instagram.com/moonagefiles', '_blank')}
            className="underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            instagram
          </button>
          ,{' '}
          <button
            onClick={() => window.open('https://facebook.com/themoonagefiles', '_blank')}
            className="underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            facebook
          </button>
          , or drop us an{' '}
          <button
            onClick={() => window.open('mailto:themoonagefiles@gmail.com')}
            className="underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            email
          </button>
          .
        </p>
      )}

      {/* italic closing note */}
      <p className="text-sm text-[#7e535f] mt-4" style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic' }}>
        {processSteps[activeStep].note}
      </p>
    </div>
  </div>
)}

           {/* Process */}
            <motion.section
                id="the-process"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="py-32 px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-5xl mb-4">the process</h2>
                        <div className="w-24 h-1 bg-secondary-container mx-auto rounded-full mb-4"></div>
                        <p
                            className="text-xs text-[#b0a898]"
                            style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic' }}
                        >
                            click any icon to learn more ↓
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center text-center group">
                          <div
                           onClick={() => setActiveStep(0)}
                            className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer"
>
                            <MessageSquare className="text-primary" size={36} />
                        </div>
                            <h3 className="font-headline text-2xl mb-2">1. begin</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">message us on instagram, <br/> facebook, or email.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                           <div
                                onClick={() => setActiveStep(1)}
                                 className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer"
>
                                 <Edit3 className="text-secondary" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">2. confirmation</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">we'll finalize the design and <br/>confirm  the price together.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div
                                onClick={() => setActiveStep(2)}
                                className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer"
>
                                <CheckCircle className="text-tertiary" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">3. production</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">your case is handmade and <br/>designed around your style.</p>
                        </div>
                        <div className="flex flex-col items-center text-center group">
                            <div
                                onClick={() => setActiveStep(3)}
                                className="w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer"
>
                                <Package2 className="text-on-surface" size={36} />
                            </div>
                            <h3 className="font-headline text-2xl mb-2">4. fulfillment</h3>
                            <p className="text-on-surface-variant font-body px-4 text-base">we'll arrange pickup, meetup, <br/>or delivery once it's ready.</p>
                        </div>
                    </div>


                    {/* collapsible notes */}
                    <div className="mt-10 text-center">
                        <CollapsibleNoteA />
                    </div>
                </div>
            </motion.section>

            {/* Pricing */}
<motion.section
    id="pricing"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="py-24 px-8"
>
    <div className="max-w-4xl mx-auto p-12 rounded-[2rem] shadow-sm relative overflow-visible" style={{ backgroundColor: '#f9f3e6' }}>
        {/* washi tapes */}
        <div className="absolute -top-3 left-16 w-20 h-5 rounded-sm rotate-[-2deg] z-10" style={{ background: 'rgba(212,232,200,0.75)' }}></div>
        <div className="absolute -top-3 right-24 w-16 h-5 rounded-sm rotate-[3deg] z-10" style={{ background: 'rgba(253,217,226,0.75)' }}></div>

        {/* Heading */}
        <div className="text-center mb-10">
            <h2 className="font-headline text-4xl mb-3">pricing</h2>
            <span
                className="text-xs"
                style={{
                    fontFamily: 'Work Sans, sans-serif',
                    color: '#695f38',
                    border: '0.5px solid #d4c89a',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    background: '#f7f0d8',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                }}
            >
                base prices only
            </span>
        </div>

        {/* Two polaroid cards */}
        <div className="grid grid-cols-2 gap-10">

            {/* Insert Only */}
            <div className="flex flex-col items-center text-center">
                <div className="relative group flex justify-center mb-5" style={{ maxWidth: '280px', margin: '0 auto' }}>
                    {/* washi tape - centered on image */}
<div className="absolute -top-2 left-1/2 w-16 h-4 rounded-sm z-10 pointer-events-none" style={{ background: 'rgba(253,217,226,0.8)', transform: 'translateX(-50%) rotate(-1deg)' }}></div>
                    
                    <div
    className="w-full bg-surface-container-lowest p-1 rounded-sm group-hover:rotate-0 transition-transform duration-500 cursor-pointer"
    style={{
        background: 'white',
        padding: '10px 10px 32px 10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        borderRadius: '2px',
    }}
    onClick={() => setLightboxImg(character1)}
>
    <img
        src={character1}
        className="w-full aspect-[4/5] object-cover"
        alt="Custom insert design for phone case"
    />
</div>

                    {/* stickers */}
                    <div className="absolute -top-5 -left-5 text-2xl">⭐</div>
                    <div className="absolute -top-3 -right-4 text-xl">✨</div>
                    <div className="absolute -bottom-4 -left-3 text-base" style={{ color: '#7e535f' }}>★</div>
                </div>
                <p className="font-headline text-xl mb-1 mt-4">insert only</p>
                <p
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Newsreader, serif', color: '#526447' }}
                >
                    ₱100
                </p>
                <p
                    className="text-xs text-[#8a8070] leading-relaxed max-w-[180px]"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                    custom artwork for your existing clear case.
                </p>
            </div>

            {/* Full Set */}
            <div className="flex flex-col items-center text-center">
               <div className="relative group flex justify-center mb-5" style={{ maxWidth: '280px', margin: '0 auto' }}>
                    {/* washi tape - centered on image */}
<div className="absolute -top-2 left-1/2 w-16 h-4 rounded-sm z-10 pointer-events-none" style={{ background: 'rgba(212,232,200,0.8)', transform: 'translateX(-50%) rotate(-1deg)' }}></div>
                    
                    <div
    className="w-full bg-surface-container-lowest p-1 rounded-sm group-hover:rotate-0 transition-transform duration-500 cursor-pointer"
    style={{
        background: 'white',
        padding: '10px 10px 32px 10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        borderRadius: '2px',
    }}
    onClick={() => setLightboxImg(comic3)}
>
    <img
        src={comic3}
        className="w-full aspect-[4/5] object-cover"
        alt="Full phone case set with custom design"
    />
</div>

                    {/* stickers */}
                    <div className="absolute -top-5 -left-5 text-2xl">💫</div>
                    <div className="absolute -top-3 -right-4 text-xl">⚡</div>
                    <div className="absolute -bottom-4 -right-3 text-base" style={{ color: '#7e535f' }}>★</div>
                </div>
                <p className="font-headline text-xl mb-1 mt-4">full set</p>
                <p
                    className="text-2xl mb-2"
                    style={{ fontFamily: 'Newsreader, serif', color: '#526447' }}
                >
                    ₱150
                </p>
                <p
                    className="text-xs text-[#8a8070] leading-relaxed max-w-[180px]"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                    clear case plus your custom insert.
                </p>
            </div>

        </div>

        {/* bottom note */}
<div className="mt-10 text-center">
    <CollapsibleNoteA
        label="pricing notes"
        notes={[
            "+₱100 for each additional insert.",
            "insert only orders require borrowing your case for sizing.",
            "simpler or more detailed designs may affect pricing.",
        ]}
    />
</div>
    </div>
</motion.section>

            {/* Archives */}
            <motion.section
                id="archives"
                ref={sectionRef}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="py-32 px-8"
            >
                <div className="max-w-7xl mx-auto">
    <div className="mb-8 flex justify-between items-center gap-4">
        <h2 className="font-headline text-6xl italic">past inserts</h2>
        <p className="font-script text-2xl text-secondary">the archives</p>
    </div>

                    {/* filter pills */}
                    <div className="flex gap-2 flex-wrap mb-8">
                        {[
                            { key: 'all', label: 'all' },
                            { key: 'comics', label: 'comics' },
                            { key: 'album', label: 'album art' },
                            { key: 'characters', label: 'characters' },
                            { key: 'ink', label: 'ink & contrast' },
                            { key: 'pets', label: 'pet portraits' },
                            { key: 'else', label: 'everything else' },
                        ].map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => setActiveCategory(cat.key)}
                                style={{
                                    fontFamily: 'Newsreader, serif',
                                    fontStyle: 'italic',
                                    fontSize: '13px',
                                    padding: '5px 16px',
                                    borderRadius: '20px',
                                    border: activeCategory === cat.key ? 'none' : '0.5px solid #d9d8ce',
                                    background: activeCategory === cat.key ? '#526447' : 'transparent',
                                    color: activeCategory === cat.key ? '#fbf9f2' : '#4a4438',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* scrollable strip */}
                    <div className="relative">
                        {/* left arrow */}
                        <button
                            onClick={() => {
                                const el = document.getElementById('archive-strip');
                                if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                            }}
                            className="absolute left-0 top-1/2 w-10 h-10 rounded-full bg-[#fbf9f2] border border-[#d9d8ce] shadow-md flex items-center justify-center hover:bg-[#e9e9de] transition-all z-10"
                            style={{
                                transform: 'translateY(-50%)',
                                opacity: archiveScrolled ? 1 : 0,
                                pointerEvents: archiveScrolled ? 'auto' : 'none',
                                transition: 'opacity 0.3s ease',
                            }}
                            aria-label="Scroll archive left"
                        >
                            <ArrowRight size={16} className="text-[#526447] rotate-180" />
                        </button>

                        {/* right arrow */}
                        <button
                            onClick={() => {
                                const el = document.getElementById('archive-strip');
                                if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                            }}
                            className="absolute right-0 top-1/2 w-10 h-10 rounded-full bg-[#fbf9f2] border border-[#d9d8ce] shadow-md flex items-center justify-center hover:bg-[#e9e9de] transition-all z-10"
                            style={{ transform: 'translateY(-50%)' }}
                            aria-label="Scroll archive right"
                        >
                            <ArrowRight size={16} className="text-[#526447]" />
                        </button>

                        {/* two-row strip */}
                        <div
                            id="archive-strip"
                            className="overflow-x-auto pb-4"
                            style={{ scrollbarWidth: 'none' }}
                            onScroll={(e) => setArchiveScrolled((e.target as HTMLElement).scrollLeft > 10)}
                        >
                            {(() => {
                                const allCases = [
                                    { src: comic1, cat: 'comics' },
                                    { src: bw3, cat: 'ink' },
                                    { src: comic2, cat: 'comics' },
                                    { src: pet1, cat: 'pets' },
                                    { src: comic3, cat: 'comics' },
                                    { src: album1, cat: 'album' },
                                    { src: comic5, cat: 'comics' },
                                    { src: character1, cat: 'characters' },
                                    { src: character2, cat: 'characters' },
                                    { src: character3, cat: 'characters' },
                                    { src: character4, cat: 'characters' },
                                    { src: character5, cat: 'characters' },
                                    { src: comic4, cat: 'comics' },
                                    { src: character7, cat: 'characters' },
                                    { src: bw1, cat: 'ink' },
                                    { src: bw2, cat: 'ink' },
                                    { src: character6, cat: 'characters' },
                                    { src: else1, cat: 'else' },
                                ];

                                const filtered = activeCategory === 'all'
                                    ? allCases
                                    : allCases.filter(c => c.cat === activeCategory);

                                const row1 = filtered.filter((_, i) => i % 2 === 0);
                                const row2 = filtered.filter((_, i) => i % 2 !== 0);

                                return (
                                    <motion.div
    key={activeCategory}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="flex flex-col gap-6"
    style={{ width: 'max-content', willChange: 'opacity' }}
>
                                        <div className="flex gap-6">
    {row1.map((item, i) => (
        <div
            key={i}
            onClick={() => setLightboxImg(item.src)}
            className="shrink-0 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 cursor-pointer"
            style={{
                background: 'white',
                padding: '6px 6px 24px 6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                borderRadius: '2px',
                transform: `rotate(${i % 2 === 0 ? '-1.5deg' : '1deg'})`,
                width: '160px',
            }}
        >
                                                    <img src={item.src} className="w-full aspect-[3/4] object-cover" alt={`Archive insert design ${i + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-6">
    {row2.map((item, i) => (
        <div
            key={i}
            onClick={() => setLightboxImg(item.src)}
            className="shrink-0 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 cursor-pointer"
            style={{
                background: 'white',
                padding: '6px 6px 24px 6px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                borderRadius: '2px',
                transform: `rotate(${i % 2 === 0 ? '1.5deg' : '-1deg'})`,
                width: '160px',
            }}
        >
                                                    <img src={item.src} className="w-full aspect-[3/4] object-cover" alt={`Archive insert design ${row1.length + i + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/*Ratings*/}
            <section
                id="ratings"
                className="py-24 px-8"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <h2 className="font-headline text-6xl italic">ratings</h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-6"
                    >

                        {/* Leo — with photo */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#f9f3e6] rounded-2xl overflow-hidden border border-[#e9e9de]"
                        >
                            <div className="w-full aspect-square bg-[#d0cec8] cursor-pointer" onClick={() => setLightboxImg(review1)}>
    <img
        src={review1}
        className="w-full h-full object-cover"
        alt="Leo's custom phone case design"
    />
</div>
                            <div className="p-4">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} style={{ color: '#695f38' }}>★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-[#3a3a2e] italic mb-2" style={{ fontFamily: 'Newsreader, serif' }}>
                                    "i loved how accurate it was to the reference and how awesome it looks on my phone!!"
                                </p>
                                <p className="text-xs text-[#8a8070]" style={{ fontFamily: 'Work Sans, sans-serif' }}>— Leo</p>
                            </div>
                        </motion.div>

                        {/* Anonymous 1 — with photo */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#f9f3e6] rounded-2xl overflow-hidden border border-[#e9e9de]"
                        >
                            <div className="w-full aspect-square bg-[#d0cec8] overflow-hidden cursor-pointer" onClick={() => setLightboxImg(review2)}>
    <img
        src={review2}
        className="w-full h-full object-cover"
        alt="Anonymous customer's custom phone case with Snoopy design"
    />
</div>
                            <div className="p-4">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} style={{ color: '#695f38' }}>★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-[#3a3a2e] italic mb-2" style={{ fontFamily: 'Newsreader, serif' }}>
                                    "(i loved) everything broooo, esp snoopyyy, i love snoopy, and ang accurate nung drawing sa reference 💯"
                                </p>
                                <p className="text-xs text-[#8a8070]" style={{ fontFamily: 'Work Sans, sans-serif' }}>— anonymous</p>
                            </div>
                        </motion.div>

                        {/* Anonymous 2 — no photo */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#f9f3e6] rounded-2xl border border-[#e9e9de] p-4"
                        >
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ color: '#695f38' }}>★</span>
                                ))}
                            </div>
                            <p className="text-sm text-[#3a3a2e] italic mb-2" style={{ fontFamily: 'Newsreader, serif' }}>
                                "loved the coloring, art, and how everything looked in general!"
                            </p>
                            <p className="text-xs text-[#8a8070]" style={{ fontFamily: 'Work Sans, sans-serif' }}>— anonymous</p>
                        </motion.div>

                        {/* Henry — with photo */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-[#f9f3e6] rounded-2xl overflow-hidden border border-[#e9e9de]"
                        >
                            <div className="w-full aspect-square bg-[#d0cec8] cursor-pointer" onClick={() => setLightboxImg(review3)}>
    <img
        src={review3}
        className="w-full h-full object-cover"
        alt="Henry's custom phone case with accurate design"
    />
</div>
                            <div className="p-4">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} style={{ color: '#695f38' }}>★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-[#3a3a2e] italic mb-2" style={{ fontFamily: 'Newsreader, serif' }}>
                                    "(i loved) the design because the art is accurate."
                                </p>
                                <p className="text-xs text-[#8a8070]" style={{ fontFamily: 'Work Sans, sans-serif' }}>— henry 🪩</p>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* leave a review link */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        className="mt-10 text-center"
                    >
                        <button
                            onClick={() => window.open('https://forms.gle/G2EV9Q8qHAa4i7rz8', '_blank')}
                            className="text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
                            style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#526447' }}
                        >
                            leave a review →
                        </button>
                    </motion.div>
                </div>
            </section>

           {/* Final CTA */}
<motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="py-32 px-8"
>
    <div className="max-w-2xl mx-auto bg-primary text-on-primary rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-on-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-on-primary/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
            <h2 className="font-headline text-2xl md:text-5xl mb-4">open for custom orders</h2>
<p className="font-body text-xs md:text-base opacity-80 mb-8">
    tell us what you're daydreaming about.
</p>
            <div className="flex flex-col gap-4 items-center">
                <button
                    onClick={() => setOrderModalOpen(true)}
                    className="bg-surface text-primary px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center gap-3 shadow-xl active:scale-95 w-full max-w-xs justify-center"
                >
                    DM to order
                    <Send size={20} />
                </button>
                <div className="flex items-center gap-2 text-on-primary/70 font-script text-2xl">
                    <Sparkles size={20} />
                    starting at ₱100
                </div>
            </div>
        </div>
    </div>
</motion.section>

           {/* Order Modal */}
            {orderModalOpen && (
              <div
                onClick={() => setOrderModalOpen(false)}
               style={{ backgroundColor: 'rgba(44,42,34,0.5)', animation: 'fadeIn 0.2s ease' }}
                className="fixed inset-0 z-50 flex items-center justify-center px-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#f9f3e6] rounded-2xl p-8 w-full max-w-sm relative"
                  style={{ animation: 'popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <button
                    onClick={() => setOrderModalOpen(false)}
                    className="absolute top-8 right-8 text-[#8a8070] hover:text-[#4a4438] text-lg leading-none"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>

                  <h2
                    style={{ fontFamily: 'Newsreader, serif' }}
                    className="text-2xl text-[#3a3a2e] mb-1"
                  >
                    ready to order?
                  </h2>
                  <p
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                    className="text-sm text-[#8a8070] mb-6"
                  >
                    pick how you'd like to reach us !
                  </p>

                 <div className="flex flex-col gap-3">
                    <button
                      onClick={() => window.open('https://instagram.com/moonagefiles', '_blank')}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#d9d8ce] bg-[#f5f4eb] hover:bg-[#e9e9de] transition-colors w-full text-left"
                    >
                      <span className="text-[#526447] text-lg">📷</span>
                      <span style={{ fontFamily: 'Work Sans, sans-serif' }} className="text-sm text-[#4a4438] flex-1">instagram</span>
                      <span style={{ fontFamily: 'Beth Ellen, cursive' }} className="text-xs text-[#7e535f]">@moonagefiles</span>
                    </button>

                    <button
                      onClick={() => window.open('https://facebook.com/moonagefiles', '_blank')}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#d9d8ce] bg-[#f5f4eb] hover:bg-[#e9e9de] transition-colors w-full text-left"
                    >
                      <span className="text-[#526447] text-lg">💬</span>
                      <span style={{ fontFamily: 'Work Sans, sans-serif' }} className="text-sm text-[#4a4438] flex-1">facebook</span>
                      <span style={{ fontFamily: 'Beth Ellen, cursive' }} className="text-xs text-[#7e535f]">moonagefiles</span>
                    </button>

                    <button
                      onClick={() => window.open('mailto:themoonagefiles@gmail.com')}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#d9d8ce] bg-[#f5f4eb] hover:bg-[#e9e9de] transition-colors w-full text-left"
                    >
                      <span className="text-[#526447] text-lg">✉️</span>
                      <span style={{ fontFamily: 'Work Sans, sans-serif' }} className="text-sm text-[#4a4438] flex-1">send an email</span>
                      <span style={{ fontFamily: 'Beth Ellen, cursive' }} className="text-xs text-[#7e535f]">themoonagefiles@gmail.com</span>
                    </button>
                  </div>

                  <p
                    style={{ fontFamily: 'Newsreader, serif' }}
                    className="text-xs text-[#b0a898] italic text-center mt-6"
                  >
                    click anywhere outside to close
                  </p>
                </div>
              </div>
            )}

            {/* Lightbox */}
{lightboxImg && (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ backgroundColor: 'rgba(44,42,34,0.85)', animation: 'fadeIn 0.2s ease' }}
        onClick={() => setLightboxImg(null)}
    >
        <div
            className="relative"
            style={{ width: 'fit-content', maxWidth: '90vw' }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* pink sticker close button */}
            <button
                onClick={() => setLightboxImg(null)}
                className="absolute -top-4 -right-4 hover:scale-105 transition-transform z-10"
                style={{
                    background: '#f5d0d8',
                    color: '#7e535f',
                    fontSize: '12px',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontFamily: 'Newsreader, serif',
                    fontStyle: 'italic',
                    border: 'none',
                    cursor: 'pointer',
                    transform: 'rotate(3deg)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
                aria-label="Close lightbox"
            >
                ✕ close
            </button>

            {/* polaroid frame */}
<div style={{
    background: 'white',
    padding: '12px 12px 48px 12px',
    borderRadius: '2px',
    boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
    transform: 'rotate(-1deg)',
}}>
    <img
        src={lightboxImg}
        style={{
            maxHeight: '70vh',
            maxWidth: '80vw',
            objectFit: 'contain',
            display: 'block',
        }}
        alt="Expanded design preview"
    />
</div>

            <p className="text-center mt-4 text-xs italic"
                style={{ color: 'rgba(251,249,242,0.5)', fontFamily: 'Newsreader, serif' }}>
                tap anywhere to close
            </p>
        </div>
    </div>
)}
        </div>
    );
};