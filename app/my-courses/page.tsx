"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { BookOpen, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { courses } from "@/lib/data"

export default function MyCoursesPage() {
  const { user, purchasedCourses } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  const freeCourses = courses.filter((c) => c.isFree)
  const paidCourses = courses.filter((c) => purchasedCourses.includes(c.id))
  const myCourses = [...freeCourses, ...paidCourses].filter(
    (course, index, self) => self.findIndex((c) => c.id === course.id) === index
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">My Courses</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Continue Learning</h1>
        <p className="mt-2 text-muted-foreground">Pick up where you left off, {user.name}.</p>
      </div>

      {myCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-card py-20 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground/50" />
          <h2 className="mt-4 text-xl font-semibold text-foreground">No courses yet</h2>
          <p className="mt-2 text-muted-foreground">Start exploring our courses and begin your learning journey.</p>
          <Link href="/courses" className="mt-6">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse Courses
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {myCourses.map((course) => (
            <div key={course.id} className="overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 transition-opacity hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                    <Play className="ml-0.5 h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{course.lessons.length} lessons</p>
                <Link href={`/courses/${course.id}/lesson/${course.lessons[0].id}`}>
                  <Button className="mt-4 w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" size="sm">
                    Continue Learning
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
