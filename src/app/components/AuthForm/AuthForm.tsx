"use client";

import React from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import styles from "./AuthForm.module.scss";
import useAuthorizationHook from "@/app/hooks/useAuthorizationHook";

export default function AuthForm() {
    const {
        email,
        password,
        setEmail,
        setPassword,
        errorEmail,
        errorPassword,
        handleSubmit,
        togglePasswordVisibility,
        showPassword,
    } = useAuthorizationHook();

    return (
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailForm}
                placeholder="Введите email"
            />
            {errorEmail && <div className={styles.errorEmail}>{errorEmail}</div>}
            <div className={styles.passwordContainer}>
                <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.passwordForm}
                    placeholder="Введите пароль"
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.togglePasswordButton}
                >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </button>
            </div>
            <button type="submit" className={styles.signInButton}>
                Войти
            </button>
            {errorPassword && (
                <div className={styles.errorPassword}>{errorPassword}</div>
            )}
        </form>
    );
}
