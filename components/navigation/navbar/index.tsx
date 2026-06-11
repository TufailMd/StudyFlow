import Image from "next/image";
import Link from "next/link";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";
import Logo from "../../../public/images/logo-site.svg";

function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed x-50 w-full  gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={Logo} width={35} height={35} alt="StudyFlow Logo" />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Study<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Search</p>

      {/* <div className="h-6 w-6 rounded-full bg-primary-500 text-center text-xs text-light-900 flex"> */}
      {/* <button className="flex-between gap-5 cursor-pointer  rounded-full bg-primary-500 p-2 text-light-900">
        Ask Questions
      </button>

      <div className="flex-between gap-5 cursor-pointer  rounded-full bg-primary-500 p-2 text-light-900">
        Notification
      </div> */}

      <div className="flex-between gap-5 cursor-pointer">
        <Theme />
      </div>

      <MobileNavigation />
      {/* <div className="flex-between gap-5 cursor-pointer  rounded-full bg-primary-500 p-2 text-light-900">
        profile
      </div> */}
    </nav>
  );
}

export default Navbar;
