import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <div>
      <Link
        href={link}
        className={cx(
          "inline-block py-3 px-10 bg-black text-white rounded-full capitalize font-semibold border-2 border-solid border-white hover:scale-105 transition-all ease duration-200",
          props.className
        )}
      >
        {name}
      </Link>
    </div>
  );
};

export default Tag;
