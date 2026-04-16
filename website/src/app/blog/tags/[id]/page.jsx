import Link from "next/link";
import { notFound } from "next/navigation";

import BlogPostCard from "../../BlogPostCard";
import { getPostsByTag, getTagCounts } from "../../get-posts";

export async function generateStaticParams() {
  const tags = await getTagCounts();
  return tags.map((tag) => ({ id: encodeURIComponent(tag.name) }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  const tag = decodeURIComponent(params.id);
  return {
    title: `#${tag}`,
    description: `Posts tagged ${tag} on the Typia blog.`,
  };
}

export default async function BlogTagPage(props) {
  const params = await props.params;
  const tag = decodeURIComponent(params.id);
  const posts = await getPostsByTag(tag);

  if (!posts.length) notFound();

  return (
    <section className="typia-blog-list-page">
      <p>
        <Link href="/blog">Back to all posts</Link>
      </p>
      <h1>#{tag}</h1>
      <p>{posts.length} post(s) tagged here.</p>
      <div className="typia-blog-grid">
        {posts.map((post) => (
          <BlogPostCard key={post.route} post={post} />
        ))}
      </div>
    </section>
  );
}
