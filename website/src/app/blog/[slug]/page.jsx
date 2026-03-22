import { importPage } from "nextra/pages";

import { useMDXComponents as getMDXComponents } from "../../../../mdx-components-blog";
import { getPosts } from "../get-posts";

const Wrapper = getMDXComponents().wrapper;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.route.split("/").at(-1),
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { metadata } = await importPage(["blog", params.slug]);
  const title = metadata.title ?? "Typia Blog";
  const description =
    metadata.description ?? "Engineering notes, releases, and deep dives from Typia.";
  const image = metadata.ogImage ?? "https://typia.io/og.jpg";
  const url = `https://typia.io/blog/${params.slug}/`;

  return {
    ...metadata,
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage(props) {
  const params = await props.params;
  const result = await importPage(["blog", params.slug]);
  const { default: MDXContent, toc, metadata } = result;

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
