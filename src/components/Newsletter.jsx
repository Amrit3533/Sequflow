import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="px-6 py-16 bg-slate-950/60 border-t border-slate-800 text-center">
      <div className="max-w-xl mx-auto">
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
            className="flex-1 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 placeholder-slate-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors"
          >
            <span>Subscribe</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
