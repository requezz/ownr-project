"use client";
import React, { useState } from "react";
import { useAuth } from "@/app/components/Context/AuthContext";

export default function useAuthorizationHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const auth = useAuth();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password: string) => {
        const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,.()-_=+])[a-zA-Z\d!@#$%^&*,.()-_=+]{8,}$/;
        return re.test(password);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrorEmail("Неверный формат email.");
            return;
        }

        if (!validatePassword(password)) {
            setErrorPassword("Пароль не соответствует требованиям.");
            return;
        }

        setErrorEmail("");
        setErrorPassword("");

        if (auth) {
            auth.login();
        }
    };
    return {
        email,
        password,
        setEmail,
        setPassword,
        errorEmail,
        errorPassword,
        handleSubmit,
        togglePasswordVisibility,
        showPassword,
    };
}
