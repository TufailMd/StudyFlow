import Image from "next/image";

import Github from "../../public/icons/github.svg";
import Google from "../../public/icons/google.svg";
import { Button } from "../ui/button";

function SocialAuthForm() {
  const BtnClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={BtnClass}>
        <Image
          className="invert-colors mr-2.5 object-contain"
          src={Github}
          alt="GitHub"
          width={20}
          height={20}
        />
        <span>Login in with GitHub</span>
      </Button>

      <Button className={BtnClass}>
        <Image
          className="mr-2.5 object-contain"
          src={Google}
          alt="GitHub"
          width={20}
          height={20}
        />
        <span>Login in with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
