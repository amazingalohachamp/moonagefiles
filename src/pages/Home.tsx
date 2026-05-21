import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, UploadCloud, Palette, Package, Leaf, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { Chatbox } from '../components/Chatbox';

export const Home = () => {
    const [isChatClicked, setIsChatClicked] = useState(false);
    return (
        <div className="pt-20 overflow-x-hidden">
            {/* Hero Section */}
            {isChatClicked && <Chatbox isChatClicked={isChatClicked} setIsChatClicked={setIsChatClicked} />}

            {!isChatClicked &&
                <button className="z-[9999] w-28 h-28 fixed right-[4rem] bottom-[4rem] rounded-full bg-amber-50/70 border-solid border-8 border-primary flex justify-center items-center hover:scale-120 hover:transition-all duration-200" onClick={() => { setIsChatClicked(true); console.log("clicked") }}><Mail size={50} className='color-primary'></Mail>
                </button>}
            <section className="relative px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 space-y-6"
                >
                    <div className="inline-block px-3 py-1 bg-secondary-container/30 text-secondary text-sm font-script -rotate-2 mb-2">
                        Preserving moments
                    </div>
                    <h1 className="text-5xl md:text-7xl font-headline italic tracking-tight leading-tight">
                        Your life, <br />
                        <span className="text-primary">beautifully</span> <br />
                        archived.
                    </h1>
                    <p className="text-on-surface-variant max-w-[320px] leading-relaxed text-lg">
                        Thoughtfully hand-tacked files and memories turned into physical keepsakes.
                    </p>
                    <div className="flex gap-4 items-center">
                        <button className="px-8 py-3 bg-primary text-on-primary rounded-lg font-medium shadow-sm hover:opacity-90 active:scale-95 transition-all">
                            Order Now
                        </button>
                        <Sparkles className="text-tertiary animate-pulse" size={24} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -top-4 -right-2 washi-tape bg-secondary-container/60 w-32 h-8 rotate-12 z-20"></div>
                    <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden rotate-1 shadow-sm border-[8px] border-white">
                        <img
                            alt="Vintage aesthetic overhead shot of developed analog film photos and a Leica camera on soft cream linen fabric"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUdUzPtjR00h6YUJkKVoi1bagOk_0gLoY1BiOrmUilpa8Y4H9v0ITqxNzFNe3Nz34WKHkmDGEHGPdKYxkow91mPfGG9rDLsB50Js1aOnKYUy494vVAurSpKT1Zc5xUVFcjpH78qfxWnRBTpBux0OgHs7Iev-zWXsCOUuKwoxCJkJdC-deLsRbcEaLAoOH9GZzE0dT7bYLvmvtfIbqiy7Kj6afNT5ioA8OzekfAwoY2u6D_i7_Rs_PBkOk4bWTkzPdZNSTqCT-vqdds"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-4 bg-tertiary-container p-4 rounded-full rotate-[-15deg] shadow-md flex items-center justify-center border-2 border-surface">
                        <Mail className="text-on-tertiary-container" size={24} />
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 py-20 max-w-4xl mx-auto">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden border border-outline-variant/10"
                >
                    <div className="journal-lines absolute inset-0 opacity-10 mt-16 mx-8"></div>
                    <h2 className="font-headline text-3xl italic mb-6 relative z-10">About Us</h2>
                    <div className="space-y-4 font-body leading-relaxed text-on-surface-variant relative z-10 text-lg">
                        <p>Moonage Files began in a small apartment flooded with late-afternoon sun and old shoeboxes of polaroids.</p>
                        <p>We believe that digital isn't enough. Your favorite memories deserve the weight of paper, the texture of linen, and the intimacy of a handwritten note.</p>
                        <p className="font-script text-3xl text-secondary pt-4 -rotate-1">With love, M.</p>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-20">
                        <Heart className="text-6xl" size={64} />
                    </div>
                </motion.div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="px-6 py-20 bg-surface">
                <div className="max-w-7xl mx-auto space-y-16">
                    <h2 className="font-headline text-4xl md:text-5xl italic text-center">How it Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center relative">
                                <UploadCloud className="text-primary" size={32} />
                            </div>
                            <h3 className="font-headline text-2xl italic">1. Upload your files</h3>
                            <p className="text-on-surface-variant px-8">Send us your digital photos, scanned notes, or voice memos.</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center relative">
                                <Palette className="text-secondary" size={32} />
                            </div>
                            <h3 className="font-headline text-2xl italic">2. Custom Curation</h3>
                            <p className="text-on-surface-variant px-8">We hand-select materials and layout your file with artistic intent.</p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-20 h-20 bg-tertiary-container rounded-full flex items-center justify-center relative">
                                <Package className="text-tertiary" size={32} />
                            </div>
                            <h3 className="font-headline text-2xl italic">3. Receive by Mail</h3>
                            <p className="text-on-surface-variant px-8">A physical archive arrives at your door, wrapped in vellum.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section */}
            <section className="px-6 py-20 bg-surface-container-low">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="flex justify-between items-end">
                        <h2 className="font-headline text-4xl italic">The Archive Box</h2>
                        <span className="font-script text-2xl text-secondary">A keepsake.</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/5">
                            <div className="aspect-video rounded-xl overflow-hidden mb-6">
                                <img
                                    alt="Handcrafted linen-covered archive box with a vintage wax seal and raw silk ribbon on a rustic wooden table"
                                    className="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnAQNLKxWLkCwWUSrVmZFEa3SXSf18KR5Gnr0GWjlNB77msVrStmAHY0VKK6XybyUyk4G71OWJMDGsHpMtJeKDB6R6hPQosiuXQAy88nT5PxWPTGxWFwigbMKUUDtWM25kRz7sHBtcPJwCi5WpOSWrIt80ivCd7BCJsNkc1hLPCV0DasOVWcS6VOLXh5sxcJTEmRyRneju7lEyOhZ5_zjFrsCfSeTPrDEqgeZC5rkadRF_hx9W53lVOQMmbntsMrhsUhyMJWpPXQrF"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-headline text-2xl italic">Premium Collection</p>
                                    <p className="text-on-surface-variant">Linen Finish & Acid-free paper</p>
                                </div>
                                <span className="text-primary font-bold text-2xl">$124</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="h-1/2 bg-primary-container/30 p-8 rounded-2xl flex flex-col justify-center items-center text-center gap-4">
                                <Leaf className="text-primary" size={40} />
                                <span className="text-xs uppercase tracking-widest font-semibold">Sustainable</span>
                            </div>
                            <div className="h-1/2 bg-secondary-container/30 p-8 rounded-2xl flex flex-col justify-center items-center text-center gap-4">
                                <Star className="text-secondary" size={40} />
                                <span className="text-xs uppercase tracking-widest font-semibold">Handmade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="px-6 py-20 max-w-7xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="font-headline text-5xl italic">Gallery</h2>
                    <p className="font-script text-3xl text-secondary mt-2">Captured by you, curated by us.</p>
                </div>
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    <div className="relative group">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 washi-tape bg-secondary-container/40 w-24 h-6 z-10"></div>
                        <img
                            alt="Soft focus vertical photograph of a field of wild daisies in warm afternoon light, film grain style"
                            className="w-full rounded-xl shadow-sm rotate-[-1deg]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAal_pzWhre81vzSHqrN6zemSpBN8yP8UReXEtEumYnzml_18yhJZen-48iIG0h7qIJbtj_JAlcmQXv3gtWHQlEpgqpTT0F2qA1hkqzqje-w4EX4u5b7olp5T9o5z0DpKzGGFY7M3zrhr2LKdhagA7K1ph0ZXaxzDK9F1ZIZcj2goCeUnXy4evUF5KTZUVCDVo_cHJiRXKbkEQsQ4XTiqUMXfRGj-Bqsg1yxvNRZL2agKYQAZFWHGI4Y_8GCWPYm0KBJ-THRYMTNrSj"
                            referrerPolicy="no-referrer"
                        />
                        <p className="font-script text-2xl text-on-surface-variant mt-4 px-1">Spring '23</p>
                    </div>
                    <div className="relative group">
                        <img
                            alt="A stack of polaroid photos tied with twine sitting on a window sill with soft shadows"
                            className="w-full rounded-xl shadow-sm rotate-[2deg]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFvbRHbKAbXzjuOWcDdsz_P39oRV_uwpeTi9oLEnvVFifwrZ0V83qLqFkwtx4Alhd2zok2A7c_xI7-oG7E7euuHVV-xKKfrV4c0E96SLWIz9jB0hr4bT7AN1mmB43Am6u3HHXCY_wGA6xqksRte0bDccl8mod8m5LrTYmrCWQxOD3KgBRAyrLe98P0flenIWpz4xYRKM4tk1seIHMtB01ikDlMFbm4F2Lo3AQKQWIUi7mk0V_daTsZJXJ7DPHVyIkC9mxs9wANMHiz"
                            referrerPolicy="no-referrer"
                        />
                        <p className="font-script text-2xl text-on-surface-variant mt-4 px-1 text-right">The Details</p>
                    </div>
                    <div className="relative group">
                        <img
                            alt="Dreamy silhouette of a couple holding hands against a hazy orange and pink sunset sky"
                            className="w-full rounded-xl shadow-sm rotate-[-2deg]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdnPiSJfKfBHSHw7yKlOTKg-1LUVMVUCBT74ujW1_P3Uwu0feGdV1X3dv8euuPmOTVRSd3ku2rfYRupjIzbJlnKSpIkGQmOnEZfZQQV-C2G4Q23KAzP5EL7-HLsfcYyLXxL_LZJwuZQefOVKjytpWoSUj42foIEUdRsSuWFrQH6A93WcOo5ffd9oLiwU_9D2Nyzt7ofHXpXSY7LLVYmiusoVoyrpHo9uTWu5n3A0mC6H6FjN_rgHwhyg1qtGVSa01uZ7BEFYM_Tcs9"
                            referrerPolicy="no-referrer"
                        />
                        <p className="font-script text-2xl text-on-surface-variant mt-4 px-1">Golden hour</p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -top-3 right-4 washi-tape bg-primary-container/40 w-20 h-8 rotate-45 z-10"></div>
                        <img
                            alt="Close up texture of raw beige linen fabric and a single pressed lavender flower"
                            className="w-full rounded-xl shadow-sm rotate-[1deg]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMmcmHn6eY4FAEL0V3C4N-VB21C8v6Zk91LF50zDfIjnYQGgPJ0sdLnzlLwaeByFswV_YFa7nrAddbPz_hOys4sMrRpDBar1dLVS18F1JT6iKkaf-ojmwYqsRjcyRmsgWJ99Oe7o9LVumEN9RaLEK6KLg6Tq6KMtLQPPr6_nQ8gLZxsISM98ATvg2P0ghzEzg8hhYNhcWV67e_q_HKnSpkUr34s3utXyLyUplWC9ztC0I736cbrVqDglWZDiDKxR16Ti2yhoIdHqoR"
                            referrerPolicy="no-referrer"
                        />
                        <p className="font-script text-2xl text-on-surface-variant mt-4 px-1">Tactile memories</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20">
                <div className="max-w-5xl mx-auto bg-primary p-12 md:p-20 rounded-3xl text-center text-on-primary space-y-8 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <h2 className="font-headline text-4xl md:text-6xl italic relative z-10">Ready to start <br />your archive?</h2>
                    <button className="relative z-10 px-10 py-4 bg-on-primary text-primary rounded-full font-bold uppercase tracking-widest text-sm shadow-lg hover:scale-105 active:scale-95 transition-all">
                        Order Your File
                    </button>
                </div>
            </section>
        </div>
    );
};
