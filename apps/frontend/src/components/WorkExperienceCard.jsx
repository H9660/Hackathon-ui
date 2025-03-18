import { useState } from "react";

export default function WorkExperienceForm() {
  const [experiences, setExperiences] = useState([
    {
      role: "Software Engineer",
      company: "Amazon",
      duration: "July 2018 - Present",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track if editing
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    duration: "",
  });

  const handleAddOrEditExperience = () => {
    const updatedExperiences = [...experiences];
    if (editingIndex !== null) {
      updatedExperiences[editingIndex] = newExperience; // Edit mode
    } else {
      updatedExperiences.push(newExperience); // Add mode
    }

    setExperiences(updatedExperiences);
    setNewExperience({ role: "", company: "", duration: "" });
    setEditingIndex(null);
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setNewExperience(experiences[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div id="work-experience" className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold ml-2">Work Experience</h2>
        <button
          className="text-black-500 hover:underline"
          onClick={() => {
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          + Add
        </button>
      </div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm my-2"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
          <div className="flex-1">
            <h3 className="text-md font-semibold">{exp.role}</h3>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
          </div>
          <button
            className="text-black-500 hover:underline"
            onClick={() => handleEdit(index)}
          >
            Edit
          </button>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              {editingIndex !== null ? "Edit Experience" : "Add Experience"}
            </h2>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddOrEditExperience();
              }}
            >
              <input
                placeholder="Role"
                value={newExperience.role}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, role: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, company: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="Duration"
                value={newExperience.duration}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    duration: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
