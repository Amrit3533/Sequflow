import { Send } from "lucide-react";
import "../assets/css/animations.css";
import { useScrollReveal } from "../assets/js/useScrollReveal";

const Newsletter = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="px-6 py-16 bg-slate-950/60 border-t border-slate-800 text-center">
      <div
        ref={ref}
        className={`max-w-xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
        <p className="text-slate-400 text-sm mb-6">
          Get the latest product updates and company news delivered to your
          inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email*"
            required
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-slate-500"
          />
          <button
            type="submit"
            className="group bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Subscribe</span>
            <Send className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;