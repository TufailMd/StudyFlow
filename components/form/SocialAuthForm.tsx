"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import ROUTES from "@/constant/routes";

import Github from "../../public/icons/github.svg";
import Google from "../../public/icons/google.svg";
import { Button } from "../ui/button";

function SocialAuthForm() {
  const BtnClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5 cursor-pointer";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: false });
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (error) {
      console.log(error);

      toast.error("Sign-in failed", {
        description: "Something went wrong",
      });

      // toast.error("Sign-in failed", {
      //   description: "Something went wrong",
      //   style: {
      //     background: "#fee2e2",
      //     color: "#991b1b",
      //     border: "1px solid #fecaca",
      //   },
      // });

      // toast.error("Sign-in failed", {
      //   className: "bg-red-100 text-red-700 border border-red-300",
      // });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={BtnClass} onClick={() => handleSignIn("github")}>
        <Image
          className="invert-colors mr-2.5 object-contain"
          src={Github}
          alt="GitHub"
          width={20}
          height={20}
        />
        <span>Login with GitHub</span>
      </Button>

      <Button className={BtnClass} onClick={() => handleSignIn("google")}>
        <Image
          className="mr-2.5 object-contain"
          src={Google}
          alt="Google"
          width={20}
          height={20}
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
