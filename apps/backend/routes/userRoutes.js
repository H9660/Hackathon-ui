import express from "express"
import User from "../model/User"

const router = express.Router();

// Create User
router.post('/add', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update User
router.put('/update/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Updated successfully', data: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete User
router.delete('/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get Single User by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default router
