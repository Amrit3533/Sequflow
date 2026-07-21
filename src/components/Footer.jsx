const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 px-6 py-16 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 text-white font-bold text-lg mb-3">
            <span className="text-blue-500">≡</span>
            <span>SequFlow</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Complete suite of enterprise and consumer products — unified design,
            consistent experience, built for scale.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Products
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Task Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Core suite
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Vertical Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Daily APPa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                SequMail
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                SequConnect
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                SequHub
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Legal & Compliance
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                GDPR
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Trademark Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Security & Safety */}
        <div>
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Security & Safety
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Security Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                IPR Complaints
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Anti Spam Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Compliance
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200 transition-colors">
                Abuse Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 SequSpace Pvt. Ltd. All Rights Reserved.</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Sitemap
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Accessibility
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Status
          </a>
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
