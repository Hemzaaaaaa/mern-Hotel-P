import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export const useUserStore = create((set, get) => ({
    user: null,
    isLoading: false,
    checkingAuth: true,

    signup: async ({name, email, password, confirmPassword}) => {
        set({isLoading: true});

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            set({isLoading: false});
            return;
        }

        try {
            const res = await axios.post("/auth/register", {name, email, password});
            set({user: res.data, isLoading: false});
        } catch (error) {
            set({isLoading: false});
            toast.error(error.response.data.message || "Something went wrong");
        }
    },

    login: async ({email, password}) => {
        set({isLoading: true});

        try {
            const res = await axios.post("/auth/login", {email, password});
            set({user: res.data, isLoading: false});
        } catch (error) {
            set({isLoading: false});
            toast.error(error.response.data.message || "Something went wrong");
        }
    },

    logout: async () => {
        try {
            await axios.post("/auth/logout");
            set({user: null});
        } catch (error) {
            toast.error(error.response.data.message || "Something went wrong");
        }
    },

    checkAuth: async () => {
        set({checkingAuth: true});

        try {
            const res = await axios.get("/auth/is-authenticated");
            set({user: res.data, checkingAuth: false});
        } catch (error) {
            set({checkingAuth: false});
        }
    }
}))