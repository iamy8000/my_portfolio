import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  { title: "Github", href: "https://github.com/ianwu0915" },
  { title: "Instagram", href: "https://www.instagram.com/ianwu0915/" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/ianwu0915/" },
];
export const Footer = () => {
  const maskStyle = {
    WebkitMaskImage:
      "radial-gradient(50% 50% at bottom center, black, transparent)",
    maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
  };

  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={maskStyle}
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
