"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import type { Course } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group">
      <div className="overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${course.isFree ? "bg-emerald-500/90 text-white" : "bg-primary/90 text-primary-foreground"}`}>
              {course.isFree ? "Free" : `${course.price.toLocaleString()} MMK`}
            </span>
          </div>
          <div className="absolute right-3 top-3">
            <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {course.language}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{course.instructor}</p>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-foreground">{course.rating}</span>
              <span className="text-sm text-muted-foreground">({course.reviewCount})</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground">{course.level}</span>
          </div>
          <Button className="mt-4 w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" size="sm">
            {course.isFree ? "Enroll Free" : "View Course"}
          </Button>
        </div>
      </div>
    </Link>
  )
}
