import userModel from "../models/user.model.js";

export const getUserData = async (req, res) => {
    try {
        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ 
            success: true, 
            message: "User data fetched successfully", 
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified,
        } 
    });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}