import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    personalInfo: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String },
        bio: { type: String },
        gender: { type: String },
        age: { type: Number },
        address: {
            address1: { type: String },
            address2: { type: String },
            city: { type: String },
            state: { type: String },
            pincode: { type: String },
            country: { type: String }
        }
    },

    education: [
        {
            institution: { type: String, required: true },
            degree: { type: String, required: true },
            fieldOfStudy: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
            grade: { type: String },
            description: { type: String }
        }
    ],

    workExperience: [
        {
            company: { type: String, required: true },
            role: { type: String, required: true },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String }
        }
    ],

    socialLinks: {
        linkedin: { type: String },
        twitter: { type: String },
        facebook: { type: String },
        instagram: { type: String },
        youtube: { type: String },
        website: { type: String }
    },

    interestedTopics: [{ type: String }],

    preferredLanguages: [{ type: String }],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Auto-update `updatedAt` before saving
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

export const User = mongoose.model('User', userSchema);
