import "../styles/globals.css";
import PersonalInfo from "../components/Personalnfo";
import ProfileCard from "../components/ProfileCard.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import BioSection from "../components/BioSection.jsx";
import LanguageSection from "../components/LanguageSection.jsx";
import InterestCard from "../components/InterestsSection.jsx";
import EducationCard from "../components/EducationCard.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function App() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border">
      <ProfileCard />
      <PersonalInfo />
      <ContactInfo />
      <BioSection />
      <LanguageSection />
      <InterestCard />
   
        <EducationCard />
        <div className="mt-6">
          
          <WorkExperienceCard
            role="Software Engineer"
            company="Amazon"
            duration="July 2018 - Present"
          />
        </div>
        <SocialMediaLinks/>
        </div>

      
      </div>
    </>
  );
}
