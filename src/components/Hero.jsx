import { ClipboardList, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-20 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Manage Projects.
        <br />
        Track Every Minute.
      </h1>
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-normal">
        Transform your workflow with intelligent project management and precise
        time tracking. Collaborate seamlessly and boost productivity.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors shadow-md">
          Start Free Trial
        </button>
        <button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-3.5 rounded-lg text-base transition-colors">
          Watch Demo
        </button>
      </div>

      {/* METRICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-8 backdrop-blur-sm">
          <ClipboardList className="w-8 h-8 text-slate-400 mx-auto mb-4" />
          <div className="text-4xl font-extrabold text-white mb-1">150K+</div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Projects Managed
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-8 backdrop-blur-sm">
          <Clock className="w-8 h-8 text-slate-400 mx-auto mb-4" />
          <div className="text-4xl font-extrabold text-white mb-1">800K+</div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Hours Tracked
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-8 backdrop-blur-sm">
          <Users className="w-8 h-8 text-slate-400 mx-auto mb-4" />
          <div className="text-4xl font-extrabold text-white mb-1">50K+</div>
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Teams Collaborating
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
