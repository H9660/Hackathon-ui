import { useState } from "react";
import { Card, CardContent } from "../ui/Card";

export default function InterestCard() {
  const [interests, setInterests] = useState([
    "Web Development",
    "Mobile Development",
    "Programming Languages",
    "Leadership",
    "Career Development",
    "Digital Marketing",
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter((item) => item !== interest));
  };

  return (
    <Card className="bg-white shadow-md rounded-lg mb-5">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Interested Topics</h2>
          <button
            className="text-black-500 hover:underline"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {interests.map((topic) => (
            <div
              key={topic}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {topic}
            </div>
          ))}
        </div>
      </CardContent>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Interests</h3>

            <div className="flex gap-2 flex-wrap mb-4">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {interest}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveInterest(interest)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <input
              type="text"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Add new interest"
              className="w-full p-2 border rounded bg-gray-100"
            />

            <div className="flex gap-2 mt-4">
              <button
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
                onClick={handleAddInterest}
              >
                Add
              </button>

              <button
                className="bg-gray-300 text-black w-full py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
