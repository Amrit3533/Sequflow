import { ClipboardList, Clock, Users } from "lucide-react";
import "../assets/css/animations.css";

const metrics = [
  { icon: ClipboardList, value: "150K+", label: "Projects Managed" },
  { icon: Clock, value: "800K+", label: "Hours Tracked" },
  { icon: Users, value: "50K+", label: "Teams Collaborating" },
];

const Hero = () => {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight animate-fade-in-up">
        Manage Projects.
        <br />
        Track Every Minute.
      </h1>
      <p
        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-normal animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        Transform your workflow with intelligent project management and precise
        time tracking. Collaborate seamlessly and boost productivity.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0">
          Start Free Trial
        </button>
        <button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
          Watch Demo
        </button>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
        {metrics.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className="group bg-slate-800/50 border border-slate-700/60 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:bg-slate-800/80 animate-fade-in-up"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            <Icon className="w-8 h-8 text-slate-400 mx-auto mb-4 transition-colors duration-300 group-hover:text-blue-400" />
            <div className="text-4xl font-extrabold text-white mb-1">
              {value}
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;