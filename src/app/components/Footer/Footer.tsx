"use client";
import React from "react";
import {
    GithubOutlined,
    GitlabOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    LogoutOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

// Можно было скачать иконки и вставить как react component, но решил установить либу @ant-design/icon
const Footer: React.FC = () => {
    const router = useRouter();
    const auth = useAuth();
    const handleLogout = () => {
        if (auth) {
            auth.clearLocalStorage();
            auth.logout();
            router.replace("/");
        }
    };
    return (
        <footer>
            <div className={styles.footerContainer}>
                <a href="#" className={styles.instagramIcon}>
                    <InstagramOutlined />
                </a>
                <a href="#" className={styles.twitterIcon}>
                    <TwitterOutlined />
                </a>
                <a href="#" className={styles.linkedinIcon}>
                    <LinkedinOutlined />
                </a>
                <a href="#" className={styles.githubIcon}>
                    <GithubOutlined />
                </a>
                <a href="#" className={styles.gitlabIcon}>
                    <GitlabOutlined />
                </a>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    <LogoutOutlined />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
