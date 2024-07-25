import React from "react";
import { sortBlogs } from "@/utils";
import Link from "next/link";
import BlogLayoutThree from "../Blogs/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className=" inline-block font-bold capitalize text-4xl">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-purple-500 underline underline-offset-2 text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-clos-3 grid-rows-3 gap-16 mt-16">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blogs} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
