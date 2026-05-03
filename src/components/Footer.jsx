import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaPinterest, FaYoutube, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import ScrollToTopInFooter from "./ScrollToTopInFooter";

const Footer = () => {

  const socialLinks = [
    { name: "Facebook", href: "/", icon: <FaFacebookF /> },
    { name: "Instagram", href: "/", icon: <FaInstagramSquare /> },
    { name: "Pinterest", href: "/", icon: <FaPinterest /> },
    { name: "YouTube", href: "/", icon: <FaYoutube /> },
    { name: "LinkedIn", href: "/", icon: <FaLinkedinIn /> },
  ];

  const exploreLinks = ["Home", "All Tiles", "Ceramic", "Porcelain", "Marble Effect", "Mosaic", "Terracotta"];

  return (
    <footer className="animate__animated animate__fadeIn bg-[#0f0a05] text-white/70 font-sans font-light mt-80">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-0">

        {/* Upper Footer: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-amber-400/15">

          {/* Brand & Description (5 Columns) */}
          <div className="md:col-span-5">
            <div className="text-3xl font-serif font-light text-white tracking-widest mb-2">
              Glaze<span className="text-[#d4a94a] italic">Grid</span>
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
                  <div className='w-4 h-4'>
                    {s.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Links (3 Columns) */}
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a94a] mb-5">Explore</div>
            <ul className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <Link href="/" className="text-sm text-white/50 hover:text-amber-400 transition-colors duration-200">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section (4 Columns) - একদম ডানে */}
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4a94a] mb-5">Connect Us</div>

            <form className="flex flex-col gap-4">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-amber-400/20 rounded-sm py-3 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 transition-all duration-300"
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Your message"
                rows="3"
                className="w-full bg-white/5 border border-amber-400/20 rounded-sm py-3 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 transition-all duration-300 resize-none"
              ></textarea>

              {/* Send Email Button */}
              <button
                type="submit"
                className="w-full bg-amber-400/10 border border-amber-400/30 text-amber-400 py-3 text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-all duration-500 font-medium flex items-center justify-center gap-2"
              >
                Send Email <FaPaperPlane size={12} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:row items-center justify-between py-6 gap-4">
          <p className="text-[11px] text-white/30 tracking-wider">
            © 2025 <span className="text-amber-400/50">GlazeGrid</span>. All rights reserved.[cite: 1]
          </p>

          {/* Back to Top Button */}
          <ScrollToTopInFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;