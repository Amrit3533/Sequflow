import "../assets/css/animations.css";
import { useScrollReveal } from "../assets/js/useScrollReveal";

const linkColumns = [
  {
    heading: "Products",
    links: [
      "Task Management",
      "Core suite",
      "Vertical Solutions",
      "Daily APPa",
      "SequMail",
      "SequConnect",
      "SequHub",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Case Studies", "Contact Us", "Support"],
  },
  {
    heading: "Legal & Compliance",
    links: [
      "Terms of service",
      "Privacy Policy",
      "Cookie Policy",
      "GDPR",
      "Trademark Policy",
    ],
  },
  {
    heading: "Security & Safety",
    links: [
      "Security Policy",
      "IPR Complaints",
      "Anti Spam Policy",
      "Compliance",
      "Abuse Policy",
    ],
  },
];

const bottomLinks = ["Sitemap", "Accessibility", "Status"];

const FooterLink = ({ children }) => (
  <a
    href="#"
    className="relative text-slate-400 hover:text-slate-200 transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-slate-300 after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </a>
);

const Footer = () => {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <footer
      ref={ref}
      className={`bg-slate-950 px-6 py-16 text-sm border-t border-slate-900 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 text-white font-bold text-lg mb-3">
            <span><svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="17.5"
          viewBox="0 0 448 512"
        >
          <path
            fill="rgb(99, 230, 190)"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg></span>
            <span>SequFlow</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Complete suite of enterprise and consumer products — unified design,
            consistent experience, built for scale.
          </p>
        </div>

        {linkColumns.map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              {heading}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {links.map((link) => (
                <li key={link}>
                  <FooterLink>{link}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 SequSpace Pvt. Ltd. All Rights Reserved.</div>
        <div className="flex items-center space-x-4">
          {bottomLinks.map((link) => (
            <FooterLink key={link}>{link}</FooterLink>
          ))}
          <span>•</span>
          <span className="flex items-center">
            A <strong className="text-yellow-400 mx-1">LEMON</strong> Group
            initiative.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;