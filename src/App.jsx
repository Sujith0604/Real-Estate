import ClientSection from "./Sections/ClientSection";
import Contact from "./Sections/Contact";
import CustomerSection from "./Sections/CustomerSection";
import FeatureSection from "./Sections/FeatureSection";
import FeatureSectionAnother from "./Sections/FeatureSectionAnother";
import FooterSection from "./Sections/FooterSection";
import HeaderSection from "./Sections/HeaderSection";
import HowWeWorkSection from "./Sections/HowWeWorkSection";
import LaunchingSoon from "./Sections/LaunchingSoon";
import WhatsappIconFixed from "./Sections/WhatsappIconFixed";

const App = () => {
  return (
    <div className=" flex flex-col gap-5">
      <WhatsappIconFixed />
      <HeaderSection />
      <LaunchingSoon />
      <ClientSection />
      <main>
        <HowWeWorkSection />
        <FeatureSection />
        <CustomerSection />
      </main>
      <FeatureSectionAnother />
      <Contact />
      <FooterSection />
    </div>
  );
};

export default App;
