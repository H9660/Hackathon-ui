import { useState } from "react";
import { Card, CardContent } from "../ui/Card";

const availableLanguages = [
  "English", "Hindi", "Spanish", "French", "German",
  "Mandarin", "Arabic", "Japanese", "Korean", "Portuguese"
];

export default function LanguageSection() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLanguages = availableLanguages.filter(lang =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLanguage = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    );
  };

  const handleSave = () => setIsEditing(false);

  return (
    <Card className="bg-white shadow-md rounded-lg mb-5">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Preferred Language</h2>
          <button
            className="text-black-500 hover:underline"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {selectedLanguages.length > 0 ? (
            selectedLanguages.map((language) => (
              <div
                key={language}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                {language}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No languages preferred</p>
          )}
        </div>

        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Languages</h2>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
              />

              {/* Language Selection with Checkboxes */}
              <div className="max-h-40 overflow-y-auto">
                {filteredLanguages.map((language) => (
                  <div key={language} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => toggleLanguage(language)}
                    />
                    <label>{language}</label>
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-black text-white px-6 py-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
