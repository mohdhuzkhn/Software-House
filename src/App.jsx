import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import StepSection from './components/StepsSection'
import Inquire from './components/Inquire'
import Choose from './components/Choose'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Choose />
      <StepSection />
      <Inquire />
    </div>
  )
}

export default App
