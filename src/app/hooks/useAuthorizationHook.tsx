"use client";
import React, { useState,  Dispatch, SetStateAction } from "react";
import { useAuth } from "@/app/context/AuthContext";

interface AuthorizationHookProps {
    email: string;
    password: string;
    setEmail: (Dispatch<SetStateAction<string>>);
    setPassword: Dispatch<SetStateAction<string>>;
    errorEmail: string;
    errorPassword: string;
    handleSubmit: (event: React.FormEvent) => void;
    togglePasswordVisibility: () => void;
    showPassword: boolean;
}

const useAuthorizationHook: () => AuthorizationHookProps = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const auth = useAuth();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const validateEmail = (email: string): boolean => {
        const re: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password: string): boolean => {
        const re: RegExp =
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
};

export default useAuthorizationHook;