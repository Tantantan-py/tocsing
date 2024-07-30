import { format, parseISO } from "date-fns";
import React from "react";

const BlogDetails = ({ blog, slug }) => {
  return (
    <div>
      <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
    </div>
  );
};

export default BlogDetails;
