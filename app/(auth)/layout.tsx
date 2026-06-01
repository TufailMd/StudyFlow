import Image from "next/image";
import React, { ReactNode } from "react";

import SocialAuthForm from "@/components/form/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-auth-light dark:bg-auth-dark bg-cover bg-center bg-no-repeat">
      <section className="flex flex-col items-center gap-6 rounded-lg bg-light-100/80 p-8 shadow-lg backdrop-blur-sm dark:bg-dark-200/80">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Create your account
            </h1>
            <h6 className="text-sm text-gray-600 dark:text-gray-400">
              to continue to StudyFlow
            </h6>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-site.svg"
              alt="StudyFlow Logo"
              width={55}
              height={55}
            />
          </div>
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
