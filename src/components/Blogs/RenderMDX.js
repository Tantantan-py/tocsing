"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

export const RenderMDX = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="col-span-8 font-in prose prose-lg max-w-max
    prose-blockquote:bg-red-600/20
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-red-500
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg
    
    // change the list marker's color and font size
    prose-li:marker:text-red-500
    prose-li:marker:font-semibold
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};
