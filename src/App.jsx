import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors">
      <Navbar />
      <Hero />
      <Features />
      <Banner />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
