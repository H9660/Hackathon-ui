import { useState } from "react";

export default function SocialMediaLinks() {
  const [links, setLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newLink, setNewLink] = useState({ platform: "", url: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddLink = () => {
    if (!newLink.platform || !newLink.url) return;

    if (editingIndex !== null) {
      const updatedLinks = [...links];
      updatedLinks[editingIndex] = newLink;
      setLinks(updatedLinks);
      setEditingIndex(null);
    } else {
      setLinks([...links, newLink]);
    }

    setNewLink({ platform: "", url: "" });
    setShowModal(false);
  };

  const handleEditLink = (index) => {
    setNewLink(links[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold ml-2">Social Media Links</h2>
      </div>

      {links.length > 0 ? (
        links.map((link, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-sm my-2 flex items-center justify-between"
          >
            <p className="text-md">
              <strong>{link.platform}:</strong> {link.url}
            </p>

            <button
              className="bg-white text-black px-3 py-1 rounded border border-black hover:bg-gray-100"
              onClick={() => handleEditLink(index)}
            >
              Edit
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic ml-2">No links added yet.</p>
      )}

      <div
        className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black mt-4"
        onClick={() => setShowModal(true)}
      >
        <button className="text-xl font-bold ml-2">+</button>
        <span>Add New Link</span>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">
              {editingIndex !== null ? "Edit Social Media Link" : "Add Social Media Link"}
            </h3>

            <select
              value={newLink.platform}
              onChange={(e) =>
                setNewLink({ ...newLink, platform: e.target.value })
              }
              className="w-full p-2 mb-2 border rounded bg-gray-100"
            >
              <option value="">Select Platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="X">X</option>
              <option value="YouTube">YouTube</option>
            </select>

            <input
              type="text"
              placeholder="Enter Link"
              value={newLink.url}
              onChange={(e) =>
                setNewLink({ ...newLink, url: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded bg-gray-100"
            />

            <button
              className="bg-black text-white w-full py-2 rounded hover:bg-gray-800"
              onClick={handleAddLink}
            >
              {editingIndex !== null ? "UPDATE" : "SAVE"}
            </button>

            <button
              className="bg-gray-300 text-black w-full py-2 rounded mt-2 hover:bg-gray-400"
              onClick={() => {
                setShowModal(false);
                setEditingIndex(null);
              }}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
