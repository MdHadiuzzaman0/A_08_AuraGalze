"use client";
import Link from "next/link";
import "animate.css";
import { FaFacebookF, FaInstagramSquare, FaPinterest, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Facebook",   href:"/",  icon: <FaFacebookF />},
    { name: "Instagram",  href:"/",  icon: <FaInstagramSquare /> },
    { name: "Pinterest",  href:"/",  icon: <FaPinterest /> },
    { name: "YouTube",    href:"/", icon: <FaYoutube />  },
    { name: "LinkedIn",   href:"/",  icon: <FaLinkedinIn />},
  ];

  const exploreLinks = ["Home", "All Tiles", "Ceramic", "Porcelain", "Marble Effect", "Mosaic", "Terracotta"];
  const companyLinks = ["About AuraGlaze", "Our Story", "Design Studio", "Trade Program", "Sustainability", "Careers", "Privacy Policy"];

  return (
    <footer className="animate__animated animate__fadeIn bg-[#0f0a05] text-white/70 font-sans font-light">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-0">
        
        {/* Upper Footer: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-amber-400/15">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-serif font-light text-white tracking-widest mb-2">
              Aura<span className="text-[#d4a94a] italic">Glaze</span>
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-amber-400/60 mb-4">
              Premium Tile Collection
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Crafting surfaces that tell stories — where artisanal tradition meets modern elegance, one tile at a time.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <Link key={s.name} href={s.href}
                  className="w-10 h-10 flex items-center justify-center border border-amber-400/25 rounded-sm text-white/50 transition-all duration-300 hover:text-amber-400 hover:border-amber-400"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    {s.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a94a] mb-5">Explore</div>
            <ul className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <h3 className="text-sm text-white/50 hover:text-amber-400 transition-colors duration-200">
                    {link}
                  </h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a94a] mb-5">Company</div>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/50 hover:text-amber-400 transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-[11px] text-white/30 tracking-wider">
            © 2025 <span className="text-amber-400/50">AuraGlaze</span>. All rights reserved.
          </p>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center border border-amber-400/30 rounded-sm bg-amber-400/5 text-[#d4a94a] transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black group"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;