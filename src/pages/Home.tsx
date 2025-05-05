// pages/Home.tsx
import HeroPage from "../component/HeroPage";
import LatestProperties from "../component/LateseProperties";
import PropertyCards from "../component/PropertyCards";
import KeyFeatures from "../component/KeyFeatures";
import Founders from "../component/Founders";
import Video from "../component/Video";
import ReviewsFromClients from "../component/ReviewsFromClients";
import ContactInformation from "../component/ContactInformation";

const Home = () => {
  return (
    <>
      <HeroPage />
      <LatestProperties />
      <PropertyCards />
      <KeyFeatures />
      <Founders />
      <Video />
      <ReviewsFromClients />
      <ContactInformation />
    </>
  );
};

export default Home;
