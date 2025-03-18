import { useState } from "react";

export default function EditPersonalInfoModal({ personalData, onClose, onSave }) {
  const [formData, setFormData] = useState({
    firstname: personalData.firstname,
    lastname: personalData.lastname,
    age: personalData.age,
    gender: personalData.gender,
    address: {
      city: "",
      state: "",
      pincode: "",
      country: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [field]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose(); // Close modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Edit Personal Information</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="border p-2 rounded"
          />

          <input
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-2 rounded"
          />

          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            className="border p-2 rounded"
          />

          <input
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="border p-2 rounded"
          />

          {/* Address Fields */}
          <h3 className="font-semibold mt-2">Address</h3>
          <input
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 rounded"
          />

          <input
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            placeholder="State"
            className="border p-2 rounded"
          />

          <input
            name="address.pincode"
            value={formData.address.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="border p-2 rounded"
          />

          <input
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            placeholder="Country"
            className="border p-2 rounded"
          />

          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-black-500 text-white px-4 py-2 rounded hover:bg-black-600"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
