import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-4 text-sm text-gray-600 z-10">
      &copy; {new Date().getFullYear()} StudyFlow. All rights reserved.
    </div>
  );
}

export default Footer;
