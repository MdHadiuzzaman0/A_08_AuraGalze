import Marquee from "react-fast-marquee";
import { HiOutlineSparkles } from "react-icons/hi";
import { GiDiamondRing } from "react-icons/gi";
import { TbDiscountFilled } from "react-icons/tb";
import { MdNewReleases } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import "animate.css";

const LatestProductsShowingInMarquee = () => {
    const alerts = [
        { icon: <MdNewReleases className="text-amber-400 text-lg" />, text: "New Arrival — Azure Blue Glaze Ceramic Tile" },
        { icon: <TbDiscountFilled className="text-emerald-400 text-lg" />, text: "Flash Sale — Up to 20% Off on Premium Tiles" },
        { icon: <GiDiamondRing className="text-rose-400 text-lg" />, text: "Limited Edition — Calacatta Golden Marble Effect" },
        { icon: <BsStars className="text-sky-400 text-lg" />, text: "Weekly Pick — Moroccan Star Encaustic Collection" },
        { icon: <HiOutlineSparkles className="text-violet-400 text-lg" />, text: "Just Dropped — Rose Quartz Polished Porcelain" },
        { icon: <TbDiscountFilled className="text-emerald-400 text-lg" />, text: "Bundle Offer — Mix & Match Any 3 Categories" },
    ];

    return (
        <div
            className="relative py-3 overflow-hidden animate__animated animate__fadeIn"
            style={{
                background: "linear-gradient(90deg, #0f0a05 0%, #1a1008 40%, #0f0a05 100%)",
                borderTop: "1px solid rgba(212,169,74,0.25)",
                borderBottom: "1px solid rgba(212,169,74,0.25)",
                animationDuration: "1s",
            }}
        >
            {/* Left fade overlay */}
            <div
                className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0f0a05, transparent)" }}
            />
            {/* Right fade overlay */}
            <div
                className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #0f0a05, transparent)" }}
            />

            <Marquee speed={45} gradient={false} pauseOnHover={true}>
                <div className="flex items-center">
                    {[...alerts, ...alerts].map((item, index) => (
                        <div key={index} className="flex items-center mx-6 group cursor-default">
                            {/* Icon with Pulse animation */}
                            <div
                                className="flex items-center justify-center w-7 h-7 rounded-full mr-3 flex-shrink-0 animate__animated animate__pulse animate__infinite animate__slower"
                                style={{
                                    background: "rgba(212,169,74,0.12)",
                                    border: "1px solid rgba(212,169,74,0.2)",
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Text with Hover Flash */}
                            <span
                                className="text-sm font-light tracking-widest uppercase transition-colors duration-300 group-hover:text-amber-400 group-hover:animate__animated group-hover:animate__flash group-hover:animate__faster"
                                style={{
                                    color: "rgba(255,255,255,0.75)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                {item.text}
                            </span>

                            {/* Divider with HeartBeat */}
                            <div className="ml-6 flex items-center gap-1 animate__animated animate__heartBeat animate__infinite animate__slower">
                                <div className="w-1 h-1 rotate-45 bg-amber-500 opacity-40" />
                                <div className="w-1.5 h-1.5 rotate-45 bg-amber-400 opacity-60" />
                                <div className="w-1 h-1 rotate-45 bg-amber-500 opacity-40" />
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default LatestProductsShowingInMarquee;