// contentlayer.config.js

import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      require: true,
    },
    publishAt: {
      type: "date",
      require: true,
    },
    updateAt: {
      type: "date",
      require: true,
    },
    description: {
      type: "string",
      require: true,
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string", // or make it to a list
      require: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    image: {
      type: "image",
    },
    // For the Image needs to update the store method
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog],
});
