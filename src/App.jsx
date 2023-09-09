import ContactForm from "./components/ContactForm"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mentors from "./components/Mentors"
import Nav from "./components/Nav"
import Testimonials from "./components/Testimonials"
import Accordion from "./components/Accordion"

const App = () => {
  return (
    <div className="overflow-hidden box-border">
      <div className=" w-[97%] mx-auto ">
      <Nav />
      <Hero />
      </div>
      <Features />
      <Mentors />
      <Testimonials />
     <Accordion />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App