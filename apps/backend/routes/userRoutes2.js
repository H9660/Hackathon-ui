import express from "express";
import {User }from "../models/User.js";

const router = express.Router();

// Helper Function for Updating Specific Sections
const updateSection = async (userId, sectionData, sectionName, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { [sectionName]: sectionData },
            { new: true }
        );
        res.status(200).json({ message: `${sectionName} updated successfully`, data: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create User
router.put('/update/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Updated successfully", data: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
