import { useState } from "react";

export default function BioSection() {
  const [bio, setBio] = useState(
    "I'm a recent graduate with a passion for data. I'm eager to learn data analysis techniques and build a strong foundation in this exciting field."
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tempBio, setTempBio] = useState(bio);

  const handleSave = () => {
    setBio(tempBio);
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-5">
      <div className="flex items-center justify-between mb-4 ml-2">
        <h2 className="text-lg font-bold">Bio</h2>
        <button
          className="text-black-500 hover:underline"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </div>

      <p className="text-gray-600 ml-2">{bio}</p>

      {/* Modal for Editing */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Bio</h2>

            <textarea
              className="w-full h-32 border p-2 rounded bg-gray-100"
              value={tempBio}
              onChange={(e) => setTempBio(e.target.value)}
            />

            <div className="flex gap-2 mt-4">
              <button
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
                onClick={handleSave}
              >
                Save
              </button>

              <button
                className="bg-gray-300 text-black w-full py-2 rounded hover:bg-gray-400"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
