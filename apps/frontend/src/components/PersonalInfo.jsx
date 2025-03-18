import { useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { updateUser } from "../services/userService";

export default function PersonalInfo() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [personalData, setPersonalData] = useState({
    firstname: "Rohan",
    lastname: "Roshan",
    email: "rohan.roshan@gmail.com",
    phone: "9876543210",
    bio: "Web developer with 5+ years of experience.",
    gender: "Male",
    age: "35",
    address1: "No 10, Office no 1",
    address2: "Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560095",
    country: "India",
  });

  const [tempData, setTempData] = useState(personalData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const updatedData = {
        personalInfo: {
          name: `${tempData.firstname} ${tempData.lastname}`,
          email: tempData.email,
          phone: tempData.phone,
          bio: tempData.bio,
          gender: tempData.gender,
          age: Number(tempData.age),
          address: {
            address1: tempData.address1,
            address2: tempData.address2,
            city: tempData.city,
            state: tempData.state,
            pincode: tempData.pincode,
            country: tempData.country,
          },
        },
      };

      await updateUser(updatedData);

      setPersonalData(tempData);
      setSuccessMessage("Updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Failed to update data:", error);
      alert("Failed to update personal information.");
    } finally {
      setIsLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="relative mb-5">
      <Card className="bg-white shadow-md rounded-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Personal Information</h2>
            <button
              className="text-black-500 hover:underline"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </div>

          <div className="grid grid-cols-2 gap-y-3">
            <p className="text-gray-500">First Name</p>
            <p className="text-black">{personalData.firstname}</p>

            <p className="text-gray-500">Last Name</p>
            <p className="text-black">{personalData.lastname}</p>

            <p className="text-gray-500">Email</p>
            <p className="text-black">{personalData.email}</p>

            <p className="text-gray-500">Phone</p>
            <p className="text-black">{personalData.phone}</p>

            <p className="text-gray-500">Bio</p>
            <p className="text-black">{personalData.bio}</p>

            <p className="text-gray-500">Gender</p>
            <p className="text-black">{personalData.gender}</p>

            <p className="text-gray-500">Age</p>
            <p className="text-black">{personalData.age}</p>

            <p className="text-gray-500">Address</p>
            <p className="text-black">
              {personalData.address1}, {personalData.address2}, {personalData.city},{" "}
              {personalData.state} {personalData.pincode}, {personalData.country}
            </p>
          </div>

          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </CardContent>
      </Card>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Edit Personal Information</h2>
            <form className="space-y-4" onSubmit={handleSave}>
              <input
                name="firstname"
                placeholder="First Name"
                value={tempData.firstname}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="lastname"
                placeholder="Last Name"
                value={tempData.lastname}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="email"
                placeholder="Email"
                value={tempData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="phone"
                placeholder="Phone"
                value={tempData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="bio"
                placeholder="Bio"
                value={tempData.bio}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="gender"
                placeholder="Gender"
                value={tempData.gender}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="age"
                placeholder="Age"
                value={tempData.age}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="address1"
                placeholder="Address Line 1"
                value={tempData.address1}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                name="address2"
                placeholder="Address Line 2"
                value={tempData.address2}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  name="city"
                  placeholder="City"
                  value={tempData.city}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  name="state"
                  placeholder="State"
                  value={tempData.state}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                />
              </div>
              <div className="flex gap-2">
                <input
                  name="pincode"
                  placeholder="Pincode"
                  value={tempData.pincode}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                />
                <input
                  name="country"
                  placeholder="Country"
                  value={tempData.country}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                />
              </div>
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
                  className={`bg-black text-white px-4 py-2 rounded ${isLoading && "opacity-50"}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
