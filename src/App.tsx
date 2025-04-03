import { Video } from "lucide-react"
import ContactInformation from "./component/ContactInformation"
import Footer from "./component/Footer"
import Founders from "./component/Founders"
import HeroPage from "./component/HeroPage"
import KeyFeatures from "./component/KeyFeatures"
import LatestProperties from "./component/LateseProperties"
import Navbar from "./component/NavBar"
import PropertyCards from "./component/PropertyCards"
import ReviewsFromClients from "./component/ReviewsFromClients"



function App() {


  return (
    <>  
    <Navbar />
    <HeroPage />
    <LatestProperties />
    <PropertyCards />
    <KeyFeatures />
    <Founders />
    <Video />
    <ReviewsFromClients />
    <ContactInformation />
    <Footer />
    </>
  )
}

export default App
