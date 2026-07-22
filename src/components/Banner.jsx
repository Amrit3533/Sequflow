import "../assets/css/animations.css";
import { useScrollReveal } from "../assets/js/useScrollReveal";

const chips = [
  { time: "5:45", label: "Project A" },
  { time: "3:30", label: "Client Call" },
  { time: "8:00", label: "Development" },
  { time: "2:15", label: "Meeting" },
];

const Banner = () => {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section ref={sectionRef} className="px-6 py-20 max-w-7xl mx-auto">
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-2xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-950/30">
        <div
          className={`max-w-xl ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Track Time Like Never Before
          </h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Our intuitive timesheet module makes logging hours a breeze. Whether
            you're billing clients or tracking internal projects, every minute
            counts.
          </p>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Integrate seamlessly with invoicing, get automatic reminders, and
            generate detailed reports with just a few clicks.
          </p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2.5 rounded-lg border border-slate-700 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40">
            Learn More About Time Tracking
          </button>
        </div>

        {/* Time Tracking Chips Preview */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          {chips.map(({ time, label }, i) => (
            <div
              key={label}
              className={`bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-3 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 hover:bg-slate-900 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: isVisible ? `${0.15 + i * 0.1}s` : "0s" }}
            >
              <span className="text-blue-400 font-bold text-lg">{time}</span>
              <span className="text-slate-300 text-sm italic">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;