import { useState } from "react";

export default function EducationCard() {
  const [educationList, setEducationList] = useState([
    {
      degree: "Bachelor's",
      school: "Example University",
      field: "Computer Science",
      startDate: "2020-08-01",
      endDate: "2024-05-30"
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    school: "",
    field: "",
    startDate: "",
    endDate: "",
  });

  const handleAddEducation = () => {
    if (!newEducation.degree || !newEducation.school || !newEducation.field || !newEducation.startDate || !newEducation.endDate) return;

    if (editingIndex !== null) {
      const updatedList = [...educationList];
      updatedList[editingIndex] = newEducation;
      setEducationList(updatedList);
      setEditingIndex(null);
    } else {
      setEducationList((prev) => [...prev, newEducation]);
    }

    setNewEducation({ degree: "", school: "", field: "", startDate: "", endDate: "" });
    setShowModal(false);
  };

  const handleEditEducation = (index) => {
    setNewEducation(educationList[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div div id="education" className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Education</h2>
        <button
          className="text-black-500 hover:underline"
  onClick={() => setShowModal(true)}
>
  + Add
</button>
      </div>

      {educationList.length > 0 ? (
        educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-sm my-2 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center">
              🎓
            </div>

            <div className="flex-1">
              <h3 className="text-md font-semibold">{edu.school}</h3>
              <p className="text-gray-500">{edu.degree} in {edu.field}</p>
              <p className="text-sm text-gray-400">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>

            <button
  className="text-black px-3 py-1 rounded hover:bg-gray-100"
  onClick={() => handleEditEducation(index)}
>
  Edit
</button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No education added yet.</p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              {editingIndex !== null ? "Edit Education" : "Add Education"}
            </h3>

            <select
              value={newEducation.degree}
              onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
              className="w-full p-2 mb-2 border rounded bg-gray-100"
            >
              <option value="">Select Degree</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
              <option value="Diploma">Diploma</option>
            </select>

            <input
              type="text"
              placeholder="College"
              value={newEducation.school}
              onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
              className="w-full p-2 mb-2 border rounded bg-gray-100"
            />

            <input
              type="text"
              placeholder="Field of Study"
              value={newEducation.field}
              onChange={(e) => setNewEducation({ ...newEducation, field: e.target.value })}
              className="w-full p-2 mb-2 border rounded bg-gray-100"
            />

            <input
              type="date"
              placeholder="Start Date"
              value={newEducation.startDate}
              onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
              className="w-full p-2 mb-2 border rounded bg-gray-100"
            />

            <input
              type="date"
              placeholder="End Date"
              value={newEducation.endDate}
              onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
              className="w-full p-2 mb-4 border rounded bg-gray-100"
            />

            <div className="flex gap-2">
              <button
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
                onClick={handleAddEducation}
              >
                {editingIndex !== null ? "UPDATE" : "ADD"}
              </button>
              <button
                className="bg-gray-300 text-black w-full py-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setShowModal(false);
                  setEditingIndex(null);
                }}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
