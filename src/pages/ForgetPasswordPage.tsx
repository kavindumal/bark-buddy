import { AuthImageComponent } from "../components/authentication/image/AuthImageComponent.tsx";
import { AuthInputComponent } from "../components/authentication/input/AuthInputComponent.tsx";
import { AuthButtonComponent } from "../components/authentication/button/AuthButtonComponent.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { resetPassword } from "../reducers/user-slice.ts";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (email === '') {
            setShowAlert(true);
            return;
        }

        try {
            const resultAction = await dispatch(resetPassword({ email }));
            const response = unwrapResult(resultAction);

            if (response && response.success) {
                toast.success("Reset link sent! Check your email.");
                navigate('/signin');
            } else {
                console.error("Reset failed:", response.message);
                setShowAlert(true);
            }
        } catch (error) {
            console.error("Error sending reset link:", error);
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
                <AuthImageComponent src="src/assets/forgetImg.png" alt="Forgot Password Illustration" className="hidden md:block w-1/2" />
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center"> {/* Centered content vertically */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-blue-700 animate-pulse">Forgot Password?</h2>
                        <p className="text-gray-500 mt-2">Enter your email to receive a password reset link.</p>
                    </div>

                    {showAlert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center p-4 mb-4 text-sm text-white bg-red-500 rounded-lg shadow-md"
                        >
                            <span className="font-medium">Error:</span> Please enter a valid email.
                        </motion.div>
                    )}

                    <div className="space-y-6">
                        <AuthInputComponent id="email" type="email" placeholder="name@gmail.com" label="Your Email" onChange={(e) => setEmail(e.target.value)} />

                        <AuthButtonComponent type="submit" text="Send Reset Link" onClick={handleSubmit} className="transition duration-300 transform hover:scale-105" />

                        <p className="text-center text-sm text-gray-600">Remembered your password?{' '}
                            <a href="/signin" className="text-blue-600 font-semibold hover:text-blue-500">Login here</a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};