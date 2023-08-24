import { ToastContainer } from "react-toastify";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between overflow-x-hidden ">
      <ToastContainer position="top-center" autoClose={3000} />
      <Header />
      <Hero />
      <Tech />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
