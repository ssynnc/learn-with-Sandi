import { notFound } from "next/navigation"
import { courses, reviews } from "@/lib/data"
import { CourseDetailClient } from "./course-detail-client"

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)
  if (!course) return { title: "Course Not Found" }
  return {
    title: `${course.title} - SpeakWithSandi`,
    description: course.description,
  }
}

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)
  if (!course) notFound()

  const courseReviews = reviews.filter((r) => r.course === course.title)

  return <CourseDetailClient course={course} courseReviews={courseReviews} />
}
