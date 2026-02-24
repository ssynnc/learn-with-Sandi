import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Learn<span className="text-primary">WithSandi</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Master English and Korean with engaging video lessons by Aye Sandi
              Htun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Courses
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/courses/english-speaking-mastery"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  English Speaking
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/english-grammar-fundamentals"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  English Grammar
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/korean-for-beginners"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Korean Beginners
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/korean-conversation-practice"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Korean Conversation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-muted-foreground">
                learnwithsandi@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">Yangon, Myanmar</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"© 2026 LearnWithSandi. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
