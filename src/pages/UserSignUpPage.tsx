import { AuthInputComponent } from "../components/authentication/input/AuthInputComponent.tsx";
import { AuthButtonComponent } from "../components/authentication/button/AuthButtonComponent.tsx";
import { AuthImageComponent } from "../components/authentication/image/AuthImageComponent.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { registerUser } from "../reducers/user-slice.ts";
import { User } from "../model/user.ts";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const UserSignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async () => {
        if (email === '' || password === '') {
            setShowAlert(true);
            return;
        }

        const user: User = {
            username: email,
            password: password,
        };

        try {
            const resultAction = await dispatch(registerUser(user));
            const response = unwrapResult(resultAction);

            if (response && response.success) {
                toast.info("OTP sent successfully! Please verify your email.");
                navigate('/verify-otp', { state: { username: email, password } });
            } else {
                console.error("Registration failed:", response.message);
                setShowAlert(true);
            }
        } catch (error) {
            console.error("Registration error:", error);
            setShowAlert(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-orange-200 to-pink-400 p-6"
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden"
            >
                <AuthImageComponent src="src/assets/createAccImg.png" alt="Bark Buddy Sign Up" className="hidden md:block w-1/2" />
                <div className="w-full md:w-1/2 p-10">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-brown-700 animate-pulse">Join the Bark Buddy Family!</h2>
                        <p className="text-gray-500 mt-2">Sign up to get started on your dog’s nutrition journey.</p>
                    </div>

                    {showAlert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center p-4 mb-4 text-sm text-white bg-blue-500 rounded-lg shadow-md"
                        >
                            <span className="font-medium">Oops!</span> Please enter a valid email address.
                        </motion.div>
                    )}

                    <div className="space-y-6">
                        <AuthInputComponent id="email" type="email" placeholder="name@barkbuddy.com" label="Your Email" onChange={(e) => setEmail(e.target.value)} />
                        <AuthInputComponent id="password" type="password" placeholder="••••••••" label="Password" onChange={(e) => setPassword(e.target.value)} />

                        <AuthButtonComponent type="submit" text="Register" onClick={handleSubmit} className="transition duration-300 transform hover:scale-105" />

                        <button type="button" className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                            <img src="src/assets/google-logo-24.png" className="mx-2" alt="google-logo" />
                            SIGN UP WITH GOOGLE
                        </button>

                        <p className="text-center text-sm text-gray-600">Already have an account?{' '}
                            <a href="/signin" className="text-blue-600 font-semibold hover:text-blue-500">Log in</a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};