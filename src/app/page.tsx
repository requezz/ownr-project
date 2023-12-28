"use client"

import React from "react";
import CryptoList from "@/app/components/CryptoList/CryptoList";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <CryptoList />
        </main>
    );
}
