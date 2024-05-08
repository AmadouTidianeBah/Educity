import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Programs from "./components/programs/Programs"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Campus from "./components/campus/Campus"
import Testitmonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subtitle="Our PROGRAM"/>
        <Programs />
        <About />
        <Title title="Campus Photos" subtitle="Gallery"/>
        <Campus />
        <Title title="What Student Says" subtitle="Testimonials"/>
        <Testitmonials />
        <Title title="Get in Touch" subtitle="Contact us"/>
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default App