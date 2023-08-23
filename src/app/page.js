import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Header />
      <Hero />
      <Tech />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
