import { notFound } from "next/navigation"
import { courses } from "@/lib/data"
import { LessonClient } from "./lesson-client"

export async function generateMetadata({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
  const { id, lessonId } = await params
  const course = courses.find((c) => c.id === id)
  const lesson = course?.lessons.find((l) => l.id === lessonId)
  if (!course || !lesson) return { title: "Lesson Not Found" }
  return {
    title: `${lesson.title} - ${course.title} - SpeakWithSandi`,
    description: lesson.description,
  }
}

export default async function LessonPage({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
  const { id, lessonId } = await params
  const course = courses.find((c) => c.id === id)
  if (!course) notFound()

  const lesson = course.lessons.find((l) => l.id === lessonId)
  if (!lesson) notFound()

  return <LessonClient course={course} lesson={lesson} />
}
