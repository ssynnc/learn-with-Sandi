import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} - LearnWithSandi Blog`,
    description: post.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <Link href="/blog">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <span>{post.author}</span>
          <span>{"·"}</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>{"·"}</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
          {post.title}
        </h1>

        <div className="mt-8 leading-relaxed text-muted-foreground">
          <p>{post.description}</p>
          <p className="mt-6">
            Language learning is a transformative journey that opens doors to
            new cultures, opportunities, and perspectives. At LearnWithSandi, we
            believe that everyone has the potential to become fluent in a new
            language with the right guidance and consistent practice.
          </p>
          <p className="mt-4">
            Whether you are learning English to advance your career or studying
            Korean because of your love for K-culture, the key is to stay
            consistent, practice daily, and enjoy the process. Remember, every
            expert was once a beginner.
          </p>
          <p className="mt-4">
            Start your learning journey today with LearnWithSandi and discover
            how engaging and effective language learning can be when you have
            the right instructor by your side.
          </p>
        </div>
      </div>
    </article>
  );
}
