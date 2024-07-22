import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-black">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-gray-800 mr-4">
        <Image
          src="/profile-img.png"
          alt="change to lucian one"
          className="w-full h-auto rounded-full"
          width={50}
          height={50}
        />
      </div>

      <span className="font-bold text-xl">Change to Lucian one</span>
    </Link>
  );
};

export default Logo;
