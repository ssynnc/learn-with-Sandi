import { BookOpen } from "lucide-react";
import { CoursesClient } from "./courses-client";

export const metadata = {
  title: "Courses - LearnWithSandi",
  description:
    "Browse all English and Korean language courses by Aye Sandi Htun.",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">All Courses</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance">
          Explore Our Courses
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Learn English and Korean with structured video lessons designed for
          every level.
        </p>
      </div>

      <CoursesClient />
    </div>
  );
}
