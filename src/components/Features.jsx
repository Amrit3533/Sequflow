import { BarChart3, CheckSquare, Clock, MessageSquare } from "lucide-react";

const Features = () => {
  return (
    <section className="px-6 py-20 bg-slate-950/40 border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">
            Everything You Need
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Powerful features designed to streamline your workflow and maximize
            team productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <CheckSquare className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Smart Task Management
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Organize, prioritize, and track tasks with intelligent automation.
              Set dependencies, milestones, and never miss a deadline.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <Clock className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Precision Time Tracking
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Log billable and non-billable hours effortlessly. Automatic
              timesheets with manual and timer options for perfect accuracy.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <BarChart3 className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Real-Time Analytics
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Visualize project progress with dynamic dashboards. Make
              data-driven decisions with comprehensive reporting tools.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <MessageSquare className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Seamless Collaboration
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Connect your team with integrated chat, file sharing, and
              real-time updates. Work together, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
