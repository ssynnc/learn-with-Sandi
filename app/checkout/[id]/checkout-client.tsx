"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShieldCheck, CreditCard, CheckCircle2, ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import type { Course } from "@/lib/data"

export function CheckoutClient({ course }: { course: Course }) {
  const [isPaying, setIsPaying] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { user, purchaseCourse } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  const handlePayment = () => {
    setIsPaying(true)
    setTimeout(() => {
      purchaseCourse(course.id)
      setIsPaying(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md text-center">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="relative rounded-2xl border border-border/50 bg-card p-8">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Payment Successful!</h1>
            <p className="mt-3 text-muted-foreground">
              You now have access to this course. Start learning right away!
            </p>
            <div className="mt-6 rounded-xl border border-border/50 bg-background p-4">
              <h3 className="font-semibold text-foreground">{course.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">by {course.instructor}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href={`/courses/${course.id}/lesson/${course.lessons[0].id}`}>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  Start Learning
                </Button>
              </Link>
              <Link href="/my-courses">
                <Button variant="outline" className="w-full border-border/50 text-foreground hover:bg-muted">
                  Go to My Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <Link href={`/courses/${course.id}`}>
        <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Course
        </Button>
      </Link>

      <h1 className="text-3xl font-bold text-foreground">Checkout</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {/* Order Summary */}
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>
          <div className="mt-4 flex gap-4">
            <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{course.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">by {course.instructor}</p>
              <p className="mt-1 text-sm text-muted-foreground">{course.lessons.length} lessons</p>
            </div>
          </div>
          <div className="mt-6 border-t border-border/50 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Price</span>
              <span className="text-lg font-bold text-foreground">
                {course.price.toLocaleString()} MMK
              </span>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="rounded-2xl border border-border/50 bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Payment</h2>
          <div className="mt-4 rounded-xl border border-border/50 bg-background p-4">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Simulated Payment</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              This is a demo payment. No real payment will be processed.
            </p>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <span>Your purchase is secure. Instant access after payment.</span>
          </div>

          <Button
            className="mt-6 w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
            size="lg"
            onClick={handlePayment}
            disabled={isPaying}
          >
            {isPaying ? "Processing..." : `Pay ${course.price.toLocaleString()} MMK`}
          </Button>
        </div>
      </div>
    </div>
  )
}
