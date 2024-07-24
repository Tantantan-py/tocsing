import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";

const BlogLayOutOne = ({ blog }) => {
  return (
    <div className="inline-block ovreflow-hidden rounded-xl">
      <div className="absolute h-full top-0 left-0 buttom-0 right-0 bg-gradient-to-b from-transparent from-0% to-black/80 rounded-3xl z-10" />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-xl"
      />
      <div className="w-full absolute bottom-0 p-10 z-20">
        <Tag
          link={`/categories/${blog.tags[0]}`}
          name={blog.tags[0]}
          className="px-6 text-sm py-2 !border"
        />
        <Link href={blog.url_path} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-white">
            <span className="bg-gradient-to-r from-white to-grey bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayOutOne;
