import React from "react";
import {
    GithubOutlined,
    GitlabOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";

// Можно было скачать иконки и вставить как react component, но решил скачать либу @ant-design/icon
const Footer = () => {
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
            </div>
        </footer>
    );
}

export default Footer
