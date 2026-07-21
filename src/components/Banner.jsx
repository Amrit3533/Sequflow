const Banner = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-2xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
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
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-2.5 rounded-lg border border-slate-700 text-sm transition-colors">
            Learn More About Time Tracking
          </button>
        </div>

        {/* Time Tracking Chips Preview */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-3">
            <span className="text-blue-400 font-bold text-lg">5:45</span>
            <span className="text-slate-300 text-sm italic">Project A</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-3">
            <span className="text-blue-400 font-bold text-lg">3:30</span>
            <span className="text-slate-300 text-sm italic">Client Call</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-3">
            <span className="text-blue-400 font-bold text-lg">8:00</span>
            <span className="text-slate-300 text-sm italic">Development</span>
          </div>
          <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 flex items-center space-x-3">
            <span className="text-blue-400 font-bold text-lg">2:15</span>
            <span className="text-slate-300 text-sm italic">Meeting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;