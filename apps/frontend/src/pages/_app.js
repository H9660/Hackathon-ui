import "../styles/globals.css";
import Navbar from "../components/Navbar"; // Import the new Navbar
import SidebarNavigation from "../components/SidebarNavigation";
import PersonalInfo from "../components/PersonalInfo";
import ContactInfo from "../components/ContactInfo";
import BioSection from "../components/BioSection";
import LanguageSection from "../components/LanguageSection";
import InterestCard from "../components/InterestsSection";
import EducationCard from "../components/EducationCard";
import WorkExperienceCard from "../components/WorkExperienceCard";
import SocialMediaLinks from "../components/SocialMediaLinks";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="p-6">
        <div className="flex max-w-5xl mx-auto gap-6">
          <SidebarNavigation />

          {/* Main Content */}
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 border">

            <section id="personal-info">
              <PersonalInfo />
            </section>

            <section id="contact-info">
              <ContactInfo />
            </section>

            <section id="bio">
              <BioSection />
            </section>

            <section id="language">
              <LanguageSection />
            </section>

            <section id="interests">
              <InterestCard />
            </section>

            <section id="education">
              <EducationCard />
            </section>

            <section id="work-experience">
              <div className="mt-6">
                <WorkExperienceCard
                  role="Software Engineer"
                  company="Amazon"
                  duration="July 2018 - Present"
                />
              </div>
            </section>

            <section id="social-media">
              <SocialMediaLinks />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
