import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const MainLayout = () => {
    return (
        <div className="min-h-screen relative">
            <div className="film-grain" />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export const Navbar = () => {
    const location = useLocation();
    const [orderModalOpen, setOrderModalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-amber-50/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10 transition-all duration-500 ${scrolled ? 'py-3 shadow-sm' : 'py-6'}`}
        >
            <nav className="flex justify-between items-center px-6 max-w-screen-2xl mx-auto">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`transition-all duration-500 ${scrolled ? 'text-2xl' : 'text-3xl'}`}
                    style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontWeight: 400, color: '#2c2a22', letterSpacing: '-0.01em' }}
                >
                    Moonage Files
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                   {[
    { label: 'home', href: '/', hash: '' },
    { label: 'the process', href: '#the-process', hash: '#the-process' },
    { label: 'pricing', href: '#pricing', hash: '#pricing' },
    { label: 'archives', href: '#archives', hash: '#archives' },
    { label: 'ratings', href: '#ratings', hash: '#ratings' },
].map((item) => (
    <button
        key={item.label}
        onClick={() => {
            if (item.hash === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
            }
            // Update the URL hash
            window.location.hash = item.hash;
        }}
        className="relative group"
        style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: scrolled ? '15px' : '18px', color: '#4a4438', transition: 'font-size 0.5s ease', background: 'none', border: 'none', cursor: 'pointer' }}
    >
        {item.label}
        <span
            className="absolute bottom-[-2px] left-0 h-[1px] bg-[#526447] transition-all duration-300"
            style={{ width: location.hash === item.hash || (location.hash === '' && item.hash === '') ? '100%' : '0%' }}
        />
        <span className="absolute bottom-[-2px] left-0 h-[1px] bg-[#526447] w-0 group-hover:w-full transition-all duration-300" />
    </button>
))}
                </div>

                <div className="flex items-center gap-4">
                    <button 
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="text-on-surface md:hidden p-2 hover:opacity-70 transition-opacity"
    aria-label="Toggle menu"
>
    <Menu size={24} />
</button>
                    <button
                        onClick={() => setOrderModalOpen(true)}
                        className="hidden md:block transition-all duration-500 bg-[#526447] text-[#fbf9f2] rounded-full hover:opacity-90 active:scale-95"
                        style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '13px', padding: '8px 20px', border: 'none', cursor: 'pointer', letterSpacing: '0.02em' }}
                    >
                        order now
                    </button>
                </div>
            </nav>
        </motion.header>

        {orderModalOpen && (
              <div
                onClick={() => setOrderModalOpen(false)}
                style={{ backgroundColor: 'rgba(44,42,34,0.5)', animation: 'fadeIn 0.2s ease' }}
                className="fixed inset-0 z-50 flex items-center justify-center px-6"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#fbf9f2] rounded-2xl p-8 w-full max-w-sm relative"
                  style={{ animation: 'popIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                >
                  <button
                    onClick={() => setOrderModalOpen(false)}
                    className="absolute top-8 right-8 text-[#8a8070] hover:text-[#4a4438] text-lg leading-none"
                  >
                    ✕
                  </button>
                  <h2 style={{ fontFamily: 'Newsreader, serif' }} className="text-2xl text-[#3a3a2e] mb-1">
                    ready to order?
                  </h2>
                  <p style={{ fontFamily: 'Work Sans, sans-serif' }} className="text-sm text-[#8a8070] mb-6">
                    pick how you'd like to reach us!
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
                  <p style={{ fontFamily: 'Newsreader, serif' }} className="text-xs text-[#b0a898] italic text-center mt-6">
                    click anywhere outside to close
                  </p>
                </div>
              </div>
            )}

        {/* Mobile Menu - Bottom Sheet */}
{mobileMenuOpen && (
    <>
        {/* Overlay */}
        <div
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'rgba(44,42,34,0.4)' }}
            onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Bottom Sheet */}
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden rounded-t-[24px] bg-[#f9f3e6]"
        >
            {/* Drag Handle */}
            <div className="flex justify-center pt-4 pb-2">
                <div className="w-8 h-1 bg-[#d9d8ce] rounded-full" />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col divide-y divide-[#e9e9de]">
                {[
    { label: 'home', hash: '' },
    { label: 'the process', hash: '#the-process' },
    { label: 'pricing', hash: '#pricing' },
    { label: 'archives', hash: '#archives' },
    { label: 'ratings', hash: '#ratings' },
].map((item) => {
    const isActive = location.hash === item.hash || (location.hash === '' && item.hash === '');
    return (
        <button
            key={item.label}
            onClick={() => {
                if (item.hash === '') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' });
                }
                window.location.hash = item.hash;
                setMobileMenuOpen(false);
            }}
            className="w-full py-4 text-center hover:bg-[#f0ebe0] transition-colors"
            style={{
                fontFamily: 'Newsreader, serif',
                fontStyle: 'italic',
                fontSize: '16px',
                color: '#2c2a22',
                borderLeft: isActive ? '3px solid #526447' : '3px solid transparent',
                backgroundColor: isActive ? '#f9f3e6' : '#fbf9f2',
                fontWeight: isActive ? '500' : '400',
            }}
        >
            {item.label}
        </button>
    );
})}
            </div>

            {/* Order Now Button */}
            <div className="px-6 py-4">
                <button
                    onClick={() => {
                        setOrderModalOpen(true);
                        setMobileMenuOpen(false);
                    }}
                    className="w-full py-3 bg-[#526447] text-[#fbf9f2] rounded-lg font-medium"
                    style={{ fontFamily: 'Work Sans, sans-serif', fontSize: '14px' }}
                >
                    order now
                </button>
            </div>
        </motion.div>
    </>
)}
        </>
    );
};

export const Footer = () => {
    return (
        <footer className="w-full py-10 px-8 mt-12">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto items-center text-center">
                <span className="font-headline text-lg italic text-on-surface">Moonage Files</span>
                <div className="flex flex-wrap justify-center gap-6">
                    <a href="mailto:themoonagefiles@gmail.com" className="font-body text-sm text-[#8a8070] hover:text-primary transition-colors">
                        mail
                    </a>
                    <a href="https://facebook.com/moonagefiles" target="_blank" className="font-body text-sm text-[#8a8070] hover:text-primary transition-colors">
                        facebook
                    </a>
                    <a href="https://tiktok.com/@moonagefiles" target="_blank" className="font-body text-sm text-[#8a8070] hover:text-primary transition-colors">
                        tiktok
                    </a>
                    <a href="https://instagram.com/moonagefiles" target="_blank" className="font-body text-sm text-[#8a8070] hover:text-primary transition-colors">
                        instagram
                    </a>
                </div>
                <p className="font-body text-xs text-[#b0a898]">© 2025 moonage files</p>
            </div>
        </footer>
    );
};