"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Star, Clock, BookOpen, Play, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ReviewCard } from "@/components/review-card"
import { useAuth } from "@/lib/auth-context"
import type { Course, Review } from "@/lib/data"

export function CourseDetailClient({ course, courseReviews }: { course: Course; courseReviews: Review[] }) {
  const { user, purchasedCourses } = useAuth()
  const router = useRouter()

  const isPurchased = purchasedCourses.includes(course.id)
  const hasAccess = course.isFree || isPurchased

  const totalDuration = course.lessons.reduce((acc, lesson) => {
    const [min, sec] = lesson.duration.split(":").map(Number)
    return acc + min * 60 + sec
  }, 0)
  const hours = Math.floor(totalDuration / 3600)
  const minutes = Math.floor((totalDuration % 3600) / 60)

  const handleEnroll = () => {
    if (!user) {
      router.push("/login")
      return
    }
    if (course.isFree) {
      router.push(`/courses/${course.id}/lesson/${course.lessons[0].id}`)
    } else {
      router.push(`/checkout/${course.id}`)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Video Preview */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                <Play className="ml-1 h-7 w-7 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {course.language}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                {course.level}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">{course.title}</h1>
            <p className="mt-2 text-muted-foreground">by {course.instructor}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-foreground">{course.rating}</span>
                <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{course.reviewCount} students</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{hours > 0 ? `${hours}h ` : ""}{minutes}m total</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons.length} lessons</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-foreground">About This Course</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{course.description}</p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground">Course Curriculum</h2>
            <div className="mt-6 flex flex-col gap-3">
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-all duration-200 hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{lesson.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{lesson.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                    {hasAccess && (
                      <Link href={`/courses/${course.id}/lesson/${lesson.id}`}>
                        <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                          <Play className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          {courseReviews.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-foreground">Student Reviews</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {courseReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-border/50 bg-card p-6">
            <div className="text-center">
              {course.isFree ? (
                <p className="text-3xl font-bold text-emerald-400">Free</p>
              ) : (
                <p className="text-3xl font-bold text-foreground">
                  {course.price.toLocaleString()} <span className="text-lg text-muted-foreground">MMK</span>
                </p>
              )}
            </div>

            <Button
              className="mt-6 w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
              size="lg"
              onClick={handleEnroll}
            >
              {hasAccess ? (
                <>
                  Start Learning
                  <ChevronRight className="ml-1 h-4 w-4" />
                </>
              ) : course.isFree ? (
                "Enroll Free"
              ) : (
                "Buy Course"
              )}
            </Button>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Lessons</span>
                <span className="font-medium text-foreground">{course.lessons.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-medium text-foreground">{hours > 0 ? `${hours}h ` : ""}{minutes}m</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Level</span>
                <span className="font-medium text-foreground">{course.level}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Language</span>
                <span className="font-medium text-foreground">{course.language}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Instructor</span>
                <span className="font-medium text-foreground">{course.instructor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
