import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile-img.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-black">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-gray-800 mr-4">
        <Image
        src={profileImg}
        alt="change to lucian one"
        className="w-full h-auto rounded-full"
        />
      </div>
      
      <span className="font-bold text-xl">Change to Lucian one</span>
    </Link>
  );
};

export default Logo;
