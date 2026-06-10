"use client";
import { usePathname } from "next/navigation";
import React from "react";

import SocialAuthForm from "@/components/form/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const heading = pathname.includes("sign-in")
    ? "Welcome Back 👋"
    : "Join StudyFlow 🚀";
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat">
      <section className="w-full max-w-md flex flex-col gap-6 rounded-2xl bg-light-100/80 p-6 shadow-xl backdrop-blur-md dark:bg-dark-200/80">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          {heading}
        </h1>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
