import { BarChart3, CheckSquare, Clock, MessageSquare } from "lucide-react";
import "../assets/css/animations.css";
import { useScrollReveal } from "../assets/js/useScrollReveal";

const features = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description:
      "Organize, prioritize, and track tasks with intelligent automation. Set dependencies, milestones, and never miss a deadline.",
  },
  {
    icon: Clock,
    title: "Precision Time Tracking",
    description:
      "Log billable and non-billable hours effortlessly. Automatic timesheets with manual and timer options for perfect accuracy.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Visualize project progress with dynamic dashboards. Make data-driven decisions with comprehensive reporting tools.",
  },
  {
    icon: MessageSquare,
    title: "Seamless Collaboration",
    description:
      "Connect your team with integrated chat, file sharing, and real-time updates. Work together, anywhere.",
  },
];

const Features = () => {
  const [headingRef, headingVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <section className="px-6 py-20 bg-slate-950/40 border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 ${headingVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-3">
            Everything You Need
          </h2>
          <span className="block h-1 w-14 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 mb-5 accent-underline" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Powerful features designed to streamline your workflow and maximize
            team productivity.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`group p-6 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-950/40 ${gridVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: gridVisible ? `${i * 0.1}s` : "0s" }}
            >
              <div className="w-fit rounded-lg bg-blue-500/10 p-3 mb-4 transition-colors duration-300 group-hover:bg-blue-500/20">
                <Icon className="w-6 h-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;