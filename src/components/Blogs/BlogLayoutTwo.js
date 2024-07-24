import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="grid grid-clos-12 gap-4 items-center text-black">
      <Link
        href={blog.url_path}
        className="col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </Link>
      <div className="col-span-8 w-full">
        <span className="uppercase text-purple-600 font-semibold text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url_path} className="inline-block my-1 ">
          <h2 className="font-semibold capitalize text-lg text-purple-500">
            <span className="bg-gradient-to-r from-purple-600/50 to-purple-500/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
        <span>{format(new Date(blog.publishedAt), "MMMM dd, yyyy")}</span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
