import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
      <NavigationBar />
      <Header />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
