import BlogDetails from "@/components/Blogs/BlogDetails";
import Tag from "@/components/Elements/Tag";
import { allBlogs } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            classname="px-6 text-sm py-2"
            name={blog.tags[0]}
            link={`/categories/${blog.tags[0]}`}
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/70" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>
      <BlogDetails blog={blog} slug={slug} />
    </article>
  );
}