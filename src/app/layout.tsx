"use client";
import React from "react";
import Navigation from "@/app/components/Navigation/Navigation";
import Footer from "@/app/components/Footer/Footer";
import { AuthProvider, useAuth } from "@/app/context/AuthContext";
import AuthForm from "@/app/components/AuthForm/AuthForm";

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <html lang="en">
                <body>
                    <ContentContainer>{children}</ContentContainer>
                </body>
            </html>
        </AuthProvider>
    );
}

function ContentContainer({ children }: { children: React.ReactNode }) {
    const authContext = useAuth();

    if (!authContext || !authContext.isAuthenticated) {
        return <AuthForm />;
    }

    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}
