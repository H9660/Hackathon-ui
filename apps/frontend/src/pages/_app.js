import "../styles/globals.css";
import { useUserContext } from "../context/userContext"; // Import Context
import { updateUser } from "../services/userService";   // Import Service
import Navbar from "../components/Navbar";
import SidebarNavigation from "../components/SidebarNavigation";
import PersonalInfo from "../components/PersonalInfo";
import ContactInfo from "../components/ContactInfo";
import BioSection from "../components/BioSection";
import LanguageSection from "../components/LanguageSection";
import InterestCard from "../components/InterestsSection";
import EducationCard from "../components/EducationCard";
import WorkExperienceCard from "../components/WorkExperienceCard";
import SocialMediaLinks from "../components/SocialMediaLinks";
import { UserProvider } from "../context/userContext";
export default function App() {
  const { userData } = useUserContext(); // Access data from context

  // Final Save Function
  const handleFinalSave = async () => {
    const cleanData = Object.entries(userData).reduce((acc, [key, value]) => {
      const filteredData = Object.fromEntries(
        Object.entries(value).filter(([_, v]) => v !== null && v !== "")
      );
      if (Object.keys(filteredData).length > 0) {
        acc[key] = filteredData;
      }
      return acc;
    }, {});

    try {
      await updateUser(cleanData);
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Failed to update data:", error);
      alert("Failed to update information.");
    }
  };

  return (
    <UserProvider>
    <div className="bg-gray-100 min-h-screen mb-10">
      <Navbar />
      <div className="p-6">
        <div className="flex max-w-5xl mx-auto gap-6 mt-12">
          <SidebarNavigation />

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

            {/* Save Button */}
            <div className="flex justify-end mt-6">
              <button
                className="bg-black text-white px-6 py-2 rounded"
                onClick={handleFinalSave} // Correctly referenced here
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </UserProvider>
  );
}
