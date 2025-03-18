import { useState } from "react";

export default function SidebarNavigation() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const sections = [
    { name: "Profile", href: "#profile" },
    { name: "Education", href: "#education" },
    { name: "Work Experience", href: "#work-experience" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-60 self-start">
      <div className="flex flex-col items-center gap-4 mb-4">
      <div className="relative w-24 h-24 rounded-full border-4 border-gray-300 overflow-hidden">

          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs">
              Upload
            </div>
          )}

          {/* Pencil Icon */}
          <label
            htmlFor="image-upload"
            className="absolute bottom-0 right-0 bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center cursor-pointer shadow-md text-xs"
          >
            🖉
          </label>
        </div>

        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />

        <div>
          <h1 className="text-base font-bold">Rohan Roshan</h1>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        {sections.map((section) => (
          <a
            key={section.name}
            href={section.href}
            className="cursor-pointer p-2 rounded-md hover:bg-gray-200"
          >
            {section.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
