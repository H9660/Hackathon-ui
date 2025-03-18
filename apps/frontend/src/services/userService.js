import axios from "axios";

export const updateUser = async (updatedData) => {
  try {
    const response = await axios.put("/api/user/update", {
      personalInfo: {
        name: updatedData.personalInfo.name,
        email: updatedData.personalInfo.email,
        phone: updatedData.personalInfo.phone,
        bio: updatedData.personalInfo.bio,
        gender: updatedData.personalInfo.gender,
        age: updatedData.personalInfo.age,
      },
      contact: {
        address: {
          address1: updatedData.personalInfo.address.address1,
          address2: updatedData.personalInfo.address.address2,
          city: updatedData.personalInfo.address.city,
          state: updatedData.personalInfo.address.state,
          pincode: updatedData.personalInfo.address.pincode,
          country: updatedData.personalInfo.address.country,
        },
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

