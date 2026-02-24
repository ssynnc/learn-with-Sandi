"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { Course, Lesson } from "@/lib/data";

export function LessonClient({
  course,
  lesson,
}: {
  course: Course;
  lesson: Lesson;
}) {
  const currentIndex = course.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? course.lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < course.lessons.length - 1
      ? course.lessons[currentIndex + 1]
      : null;
  const progress = ((currentIndex + 1) / course.lessons.length) * 100;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Video Area */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href={`/courses/${course.id}`}
              className="transition-colors hover:text-primary"
            >
              {course.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Lesson {currentIndex + 1}</span>
          </div>

          {/* Video Player */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50 bg-card">
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lesson Info */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {lesson.title}
            </h1>
            <div className="mt-2 flex items-center gap-3 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{lesson.duration}</span>
              </div>
              <span>{"·"}</span>
              <span className="text-sm">
                Lesson {currentIndex + 1} of {course.lessons.length}
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {lesson.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {prevLesson ? (
              <Link href={`/courses/${course.id}/lesson/${prevLesson.id}`}>
                <Button
                  variant="outline"
                  className="border-border/50 text-foreground hover:bg-muted"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Previous
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson ? (
              <Link href={`/courses/${course.id}/lesson/${nextLesson.id}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Next Lesson
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href={`/courses/${course.id}`}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Back to Course
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar - Lesson List */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border/50 bg-card p-6">
            <h2 className="font-semibold text-foreground">Course Progress</h2>
            <div className="mt-3 flex items-center gap-3">
              <Progress value={progress} className="h-2 flex-1" />
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>

            <h3 className="mt-6 text-sm font-semibold text-muted-foreground">
              All Lessons
            </h3>
            <div className="mt-3 flex flex-col gap-1">
              {course.lessons.map((l, index) => {
                const isActive = l.id === lesson.id;
                return (
                  <Link
                    key={l.id}
                    href={`/courses/${course.id}/lesson/${l.id}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-medium ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {isActive ? <Play className="h-3 w-3" /> : index + 1}
                    </div>
                    <span className="line-clamp-1 flex-1">{l.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {l.duration}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
