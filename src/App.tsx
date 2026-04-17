import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Hero />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
