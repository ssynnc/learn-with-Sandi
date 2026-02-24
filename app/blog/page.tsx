import { blogPosts } from "@/lib/data";
import { BlogCard } from "@/components/blog-card";
import { PenLine } from "lucide-react";

export const metadata = {
  title: "Blog - LearnWithSandi",
  description:
    "Read language learning tips, guides, and insights to support your English and Korean studies.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <PenLine className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Blog</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance">
          Language Learning Insights
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Tips, guides, and stories to help you on your language learning
          journey.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
